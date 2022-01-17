import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderMicroReact = id => {
  console.log('id', id);
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById(id)
  );
};

if (document.getElementById('micro-server') !== null) {
  ReactDOM.render(
    <React.StrictMode>
      <p>micro-react is serving</p>
    </React.StrictMode>,
    document.getElementById('micro-server')
  );
}
