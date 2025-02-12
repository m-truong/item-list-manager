import React from "react";
import ReactDOM from "react-dom/client";
import { applyPolyfills, defineCustomElements } from "h8k-components/loader";

import "./index.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

applyPolyfills().then(() => {
  defineCustomElements(window);
});
