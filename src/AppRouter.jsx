import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, QuizPage } from './pages/index.js'
import { Navbar } from './components/index.js'

//Punto de entrada o acceso a todas las rutas de la aplicación
export const AppRouter = () => {
    //Estado para almacenar las preguntas obtenidas de la API
    const [questions, setQuestions] = useState([])
    
    //Contador para asegurar que la obtención de preguntas solo ocurra una vez
    let contador = 0;

    //Efecto secundario para obtener preguntas al cargar el componente
    useEffect(() => {
        contador = contador + 1;
        if(contador <= 1)
        {
            getQuestions()
        }
    }, [])

    //Función asincrónica para obtener preguntas de la API externa Open Trivia DataBase
    const getQuestions = async () => {
        try 
        {
            //Llamada a la API para obtener preguntas de verdadero/falso con dificultad difícil
            const response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
            //Conversión de la respuesta a formato JSON
            const questionsResponse = await response.json()
            //Extracción de únicamente el arreglo de preguntas de la respuesta
            const resultsQuestions = questionsResponse.results
            //Actualización del estado con las preguntas obtenidas
            setQuestions(resultsQuestions)  
        } 
        catch (error) 
        {
            console.log(error)
        }
    }
    
    return (
        <>
            {/* Barra de navegación */}
            <Navbar/>

            {/* Definición de rutas de la aplicación */}
            <Routes>
                {/* Ruta para la página de home o inicio */}
                <Route path='/' element={ <HomePage/> }/>
                {/* Ruta para la página donde surge el cuestionario*/}
                <Route path='/quiz' element={ <QuizPage questions={questions} /> }/>
            </Routes>
        </>
    )
}