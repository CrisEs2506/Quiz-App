import React from 'react'
import { Link } from 'react-router-dom'

//Componente funcional para mostrar los resultados del quiz
export const Results = ({ score, questions, onReset }) => {
    return (
        <div className='flex flex-col justify-evenly items-center shadow-xl rounded-lg w-[600px] h-[600px] gap-5'>
			{/* Título de puntuación */}
            <h1 className='text-4xl font-bold'>You Scored</h1>

            {/* Puntuación y porcentaje */}
			<div className='flex flex-col gap-5 text-center text-lg font-bold'>
				{/* Porcentaje de respuestas correctas con animación de pulso */}
                <span className='font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl animate-pulse'>
					{((score / questions.length) * 100).toFixed(0)}%
				</span>
				({score} of {questions.length})
			</div>

            {/* Enlace para volver a jugar y que lleva a la pantalla de inicio o home */}
            <Link to='/'>
                <button
                    className='border px-5 py-2 rounded-lg transition-all font-bold hover:bg-yellow-500 hover:text-gray-900'
                    onClick={onReset}
                >
                    Play Again
                </button>
            </Link>
		</div>
    )
}