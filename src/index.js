import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NavBar } from './components/navbar/navbar';

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { HomeDiscover } from './components/home-discover/home-discover';
import { HomeCategories } from './components/home-categories/home-categories';
import { HomeCollection } from './components/home-collection/home-collection';

import { Footer } from './components/footer/footer';
import { Home } from './components/Home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { MenCategory } from './components/men-category/men-category';
import { WomenCategory } from './components/women-category/women-category';
import { Electronics } from './components/electronics/electronics';
import { Jewelery } from './components/jewelery/jewelery';
import { Cart } from './components/cart/cart';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
