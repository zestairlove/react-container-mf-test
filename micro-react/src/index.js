import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.mountMicroReact = id => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById(id)
  );
};

window.unmountMicroReact = id => {
  const target = document.getElementById(id);
  if (target) {
    ReactDOM.unmountComponentAtNode(target);
  }
};

if (document.getElementById('micro-server') !== null) {
  ReactDOM.render(
    <React.StrictMode>
      <p>micro-react is serving</p>
    </React.StrictMode>,
    document.getElementById('micro-server')
  );
}
