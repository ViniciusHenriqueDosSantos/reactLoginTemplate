import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import RecuperacaoDeSenha from './pages/RecureracaoDeSenha';
import Erro from './pages/Erro';
import HomeUnlogged from './pages/HomeUnlogged';

import Token from './components/Token';
import App from './App';
import Home from './pages/Home';

const routesUnlogged =createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
    path:'/',
    element:<HomeUnlogged/>

  },
  {
    path:'/login',
    element:<Login/>

  },
  {
    path:'/cadastro',
    element: <Cadastro/>
  },
  {
    path:'/recuperacaodesenha',
    element:<RecuperacaoDeSenha/>
  },
  {
    path:'*',
    element:<HomeUnlogged/>
  }
    ]
  }
  
]);

const routesLogged =createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
    path:'/',
    element:<Home/>

  },
  {
    path:'/login',
    element:<Home/>

  },
  {
    path:'/cadastro',
    element: <Cadastro/>
  },
  {
    path:'*',
    element:<Home/>
  }
    ]
  }
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    <RouterProvider router={Token.getToken()==null ? routesUnlogged : routesLogged}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
