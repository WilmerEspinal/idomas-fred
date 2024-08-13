import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home.jsx";

import Numeros from "./pages/numeros/numeros.jsx";
import Familia from "./pages/familia/familia.jsx";
import Aves from "./pages/aves/aves.jsx";
import Colores from "./pages/colores/colores.jsx";
import Animales from "./pages/animales/animales.jsx";
import Saludos from "./pages/saludos/saludo.jsx";
import Objetos from "./pages/objetos/objetos.jsx";
import Alimentos from "./pages/alimentos/alimentos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true, // Esto indica que esta es la ruta predeterminada
        element: <Navigate to="/saludo" />, // Redirige automáticamente a /saludo
      },
      {
        path: "/saludo",
        element: <Saludos />,
      },
      {
        path: "/numeros",
        element: <Numeros />,
      },
      {
        path: "/familia",
        element: <Familia />,
      },
      {
        path: "/aves",
        element: <Aves />,
      },
      {
        path: "/colores",
        element: <Colores />,
      },
      {
        path: "/animales",
        element: <Animales />,
      },
      {
        path: "/alimentos",
        element: <Alimentos />,
      },
      {
        path: "/objetos",
        element: <Objetos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
