import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import App from './App';
// import React, { StrictMode } from 'react';
import { StrictMode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const root = createRoot(document.getElementById('root')!);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)

// ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
