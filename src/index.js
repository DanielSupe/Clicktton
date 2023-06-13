import React from 'react';
import ReactDOM from 'react-dom';
import { Principal } from './Componentes/Principal';
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import {ComponentMain} from './Componentes/CrearCuenta/ComponentMain'
import { Records } from './Componentes/Records';
import { IniciarSesion } from './Componentes/IniciarSesion';
import { Contactanos } from './Componentes/Contactanos';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Principal/> 
    },
    {
        path:'/Crear',
        element: <ComponentMain/>
    },
    {
        path:'/Records',
        element:<Records/>
    },
    {
        path:'/IniciarSesion',
        element:<IniciarSesion/>
    },
    {
        path:'/Contactanos',
        element:<Contactanos/>
    }
])
ReactDOM.render(<RouterProvider router={router}/>,document.getElementById("root"))


