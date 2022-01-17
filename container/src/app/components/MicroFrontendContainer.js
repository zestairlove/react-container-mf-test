import { useEffect } from 'react';

const MicroFrontendReact = ({ host, methodName, targetId }) => {
  useEffect(() => {
    const scriptId = `${targetId}-script`;

    const mount = () => {
      window[`mount${methodName}`](targetId);
    };

    const cleanup = () => {
      window[`unmount${methodName}`](targetId);
    };

    if (document && document.getElementById(scriptId)) {
      mount();
      return cleanup;
    }

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        console.log('manifest', manifest);
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${host}${manifest.files['main.js']}`;
        script.onload = () => {
          mount();
        };
        document.head.appendChild(script);
      });

    return cleanup;
  }, [host, methodName, targetId]);

  // key 값을 넣는다.
  return <main key={targetId} id={targetId} />;
};

export default MicroFrontendReact;
