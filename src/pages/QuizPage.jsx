import React, { useState } from 'react'
import { Question } from '../components/Question'

//Componente funcional que representa la página del cuestionario
export const QuizPage = ({ questions }) => {
    //Estado para seguir el índice de la pregunta actual
    const [indexQuestion, setIndexQuestion] = useState(0)
    
    return (
        <div 
            className='container flex flex-col items-center justify-center gap-10'
            style={{ height: 'calc(100vh - 5rem)' }}
        >
            {/* Renderizar el componente Question pasando por Props todas las preguntas, la pregunta actual, el indice y su Setter */}
            <Question 
                question={questions[indexQuestion]}
                setIndexQuestion={setIndexQuestion}
                indexQuestion={indexQuestion}
                questions={questions}
            />
        </div>
    )
}