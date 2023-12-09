import React, { useEffect, useState } from 'react'
import { Results } from './Results'

//Función para Decodificar los textos con entidades HTML que trae la API
const decodeEntities = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent;
}

//Componente que representará las pregunta del quiz
export const Question = ({
        question,
        questions,
        indexQuestion,
        setIndexQuestion,
    }
) => {
    //Estado para la Puntuación
    const [score, setScore] = useState(0);
    
    //Estado para conocer la Respuesta escogida
    const [selectAnswerIndex, setSelectAnswerIndex] = useState(null)

    //Estado para saber si se contesto o no una Pregunta
    const [answered, setAnswered] = useState(false)

    //Estado para saber si Mostrar o no la Vista de los Resultados
    const [activeResults, setActiveResults] = useState(false)
    
    //Unificar las Respuestas Incorrectas y Correcta en un solo Arreglo
    const [answersRandom, setAnswersRandom] = useState([])
    
    //Efecto que se ejecuta cuando cambia la pregunta para ordenar las respuestas aleatoriamente
    useEffect(() => {
        const answers = [
            ...question.incorrect_answers,
            question.correct_answer,
        ]

        //Colocar las Respuestas en Desorden
        setAnswersRandom(answers.sort(() => Math.random() - 0.5))
    }, [question])

    //Función para avanzzar a la siguiente pregunta
    //Cambiar Estado del Índice de la Pregunta
    const onNextQuestion = () => {
        setIndexQuestion(indexQuestion + 1)
        setSelectAnswerIndex(null)
        setAnswered(false)
    }

    //Resetear el Quiz
    const onReset = () => {
        setScore(0)
        setIndexQuestion(0)
    }

    //Comprobar si la Respuesta es Correcta o Incorrecta
    const checkAnswer = (answerText, index) => {
        if(answerText === question.correct_answer)
        {
            //Sumar un punto al Score si la Respuesta es Correcta
            setScore(score + 1)
        }
        setSelectAnswerIndex(index)
        //Marcar la pregunta como contestada
        setAnswered(true)
    }

    return (
        <>
            {activeResults ? (
                //Mostrar la vista de resultados si activeResults es verdadero
                < Results
                    questions={questions}
                    score={score}
                    onReset={onReset}
                />
            ) : (
                //Renderizar el componente de la pregunta
                <div className='flex flex-col justify-between shadow-md shadow-slate-300 w-[600px] h-[600px] p-10 rounded-lg'>
                    <div className='border-2 px-5 py-2 rounded-lg border-gray-900 text-center'>
                            <span className='font-bold'>
                                {/* Categoria de la Pregunta */}
                                {decodeEntities(question.category)}
                            </span>
                    </div>
                    
                    <div className='flex justify-between'>
                        <span className='text-xl font-bold'>
                            {/* Número de la Pregunta Actual y Restantes */}
                            {indexQuestion + 1} / {questions.length}
                        </span>

                        <div>
                            <span className='font-semibold'>
                                Difficulty:
                            </span>
                            <span className='font-bold'>
                                {/* Dificultad de la Pregunta */}
                                {' '} {question.difficulty}
                            </span>
                        </div>
                    </div>

                    <div className='text-center'>
                        <h1 className='font-bold'>
                            {/* Texto de la Pregunta */}
                            {decodeEntities(question.question)}
                        </h1>
                    </div>

                    {/* Respuestas */}
                    <div className='grid grid-cols-2 gap-5'>
                        {/* Mapear Arreglo de Respuestas */}
                        {answersRandom.map((answer, index) => (
                                //Si la respuesta es correcta, entonces colocará el fondo del botón de color verde, pero de lo contrario se pondrá rojo
                                <button 
                                    className={`border p-5 rounded-lg flex justify-center items-center hover:scale-105 ${
                                        selectAnswerIndex !== null && 
                                        index === selectAnswerIndex 
                                            ? answer === question.correct_answer
                                                ? 'bg-green-500'
                                                : 'bg-red-500'
                                            : ''
                                    }`}
                                    key={answer}
                                    onClick={() => checkAnswer(answer, index)}
                                    disabled={answered && selectAnswerIndex !== index}
                                >
                                    <p className='font-medium text-center text-sm'>
                                        {answer}
                                    </p>
                                </button>
                            ))}
                    </div>

                    {/* Condicional de Sigiuente o Finalizar */}
                    {indexQuestion + 1 === questions.length ? (
                        //Botón para finalizar
                        <button 
                            className='border px-5 py-2 rounded-lg bg-yellow-500 hover:scale-105'
                            onClick={() => {
                                setAnswered(false)
                                setActiveResults(true)
                            }}
                        >
                            Finish
                        </button>
                    ) : (
                        //Botón para ir a la siguiente pregunta
                        <button 
                            className='border px-5 py-2 rounded-lg bg-yellow-500 hover:scale-105'
                            onClick={onNextQuestion}
                        >
                            Next
                        </button>
                    )}
                </div>
            )}
        </>
    )
}
