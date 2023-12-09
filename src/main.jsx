//Importación de React y ReactDOM
import React from 'react'
import ReactDOM from 'react-dom/client'

//Importación del enrutador de React
import { BrowserRouter } from 'react-router-dom'

//Importación del componente principal de la aplicación
import App from './App.jsx'

//Importación del archivo de estilos principal
import './index.css'

//Renderizado del componente principal de la aplicación en el DOM
//utilizando ReactDOM.createRoot y el enrutador de React (BrowserRouter)
ReactDOM.createRoot(document.getElementById('root')).render(
  // Uso de React.StrictMode para activar comprobaciones adicionales en desarrollo
  <React.StrictMode>
    {/* Encapsulación de la aplicación dentro del enrutador BrowserRouter */}
    <BrowserRouter>
      {/* Renderizado del componente principal de la aplicación */}
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
