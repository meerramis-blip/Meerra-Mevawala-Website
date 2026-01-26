import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root');

if (!rootElement) {
  document.body.innerHTML = "<h1>ROOT NOT FOUND</h1>";
  throw new Error("Could not find root element");
}

document.body.insertAdjacentHTML("beforeend", "<div id='debug' style='padding:20px;color:red'>JS Loaded</div>");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <div style={{ padding: 40 }}>
    <h1>React is running</h1>
    <p>If you see this, React mounting is working.</p>
  </div>
);
