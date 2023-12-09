import React from 'react'
import { Link } from 'react-router-dom'

//Componente funcional que representa la barra de navegación
export const Navbar = () => {
    return (
        //Encabezado de la barra de navegación con fondo gris oscuro y espaciado
        <header className='bg-gray-900 py-5 flex justify-center'>
            {/* Enlace que redirige a la página de inicio o home */}
            <Link to='/'>
                {/* Título de la aplicación con estilos y efecto de escala al pasar el mouse */}
                <h1 className='text-white text-2xl font-bold hover:scale-110 transition-all duration-500'>
                    Quiz App
                </h1>
            </Link>
        </header>
    )
}