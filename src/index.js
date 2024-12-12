// import React from 'react';
// import ReactDOM from 'react-dom';
// import  App  from './components/App/App'

// ReactDOM.createRoot(<App />, document.getElementById('root'));
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App.jsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);