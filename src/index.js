import React from 'react';
import ReactDOM from 'react-dom/client';
import "./home.css"
import Pages from "./routes/routes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <Pages />
  </React.StrictMode>
);
