import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Basic from './componentes/About';
import {Video} from './componentes/VideoYou';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
<Video />
    <Basic />
  <App />


</div>
);


