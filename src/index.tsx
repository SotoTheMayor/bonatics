import { createRoot } from 'react-dom/client';
import App from './App';
import React, { StrictMode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)

