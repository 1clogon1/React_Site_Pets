import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.min";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/index.css";

import App from "./App";
import Header from "./components/header";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render
(
    <BrowserRouter>
        <Header />
        <App />
        <Footer />
    </BrowserRouter>
);

