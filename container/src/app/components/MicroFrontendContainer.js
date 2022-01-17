import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const MicroFrontendContainer = ({ host, renderMethodName, targetId }) => {
  useEffect(() => {
    const scriptId = `${targetId}-script`;

    const renderMicroFrontend = () => {
      window[renderMethodName](targetId);
    };

    const cleanUp = () => {
      const target = document.getElementById(targetId);
      if (target) {
        ReactDOM.unmountComponentAtNode(target);
      }
    };

    if (document && document.getElementById(scriptId)) {
      renderMicroFrontend();
      return cleanUp;
    }

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${host}${manifest.files['main.js']}`;
        script.onload = () => {
          renderMicroFrontend();
        };
        document.head.appendChild(script);
      });

    return cleanUp;
  }, [host, renderMethodName, targetId]);

  return <main id={targetId} />;
};

export default MicroFrontendContainer;
