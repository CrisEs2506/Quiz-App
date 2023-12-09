import React from 'react'
import { Link } from 'react-router-dom'

// Componente funcional que representa la página de inicio o home
export const HomePage = () => {
    return (
        <section 
            className='wrapper flex flex-col items-center justify-center gap-10'
            style={{ height: 'calc(100vh - 5rem)' }}
        >
            <article className='text-center space-y-6'>
                {/* Título principal */}
                <h1 className='text-3xl font-bold'>
                    Welcome to the Trivia Challenge!
                </h1>
                
                {/* Descripción de las reglas del juego */}
                <p>
                    You will presented with 10 True or False questions.
                </p>
                
                {/* Desafío al jugador */}
                <p className='text-gray-600'>
                    ¿Can you score 100%?
                </p>

{               /* Enlace para comenzar el juego */}
                <Link to='/quiz' className='inline-block'>
                    <h1 className='text-2xl font-bold hover:scale-110 transition-all duration-500'>
                        Begin
                    </h1>
                </Link>
            </article>
            
            {/* Mensaje adicional */}
            <div className='text-center mt-8'>
                <p className='text-sm text-gray-500'>
                Refresh the Page so that the API brings new Questions :D
                </p>
            </div>
        </section>
    )
}