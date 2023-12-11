# Quiz App

Bienvenido a Quiz App (prueba técnica para el acceso a un empleo como desarrollador), este proyecto consiste en consumir una API externa de Open Trivia DataBase, la cual retorna un JSON con 10 preguntas de verdadero/falso y con una dificultad difícil.

## Tecnologías Utilizadas

- [React](https://reactjs.org/): Biblioteca de JavaScript para construir interfaces de usuario.
- [React Router](https://reactrouter.com/): Biblioteca para el enrutamiento en aplicaciones React.
- [Tailwind CSS](https://tailwindcss.com/): Framework de estilos utilitarios de bajo nivel para construir interfaces.

## Despliegue
La app web se encuentra desplegada en Render y puedes acceder a ella a través del siguiente link: https://quiz-app-cristianespitia.onrender.com

## Instalación

Sigue estos pasos para ejecutar la aplicación en tu dispositivo:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/CrisEs2506/Quiz-App.git
   cd Quiz-App

2. Instala las dependencias:
    
    ```bash
    npm install

3. Inicia la aplicación:

    ```bash
    npm run dev

La aplicación estará disponible en http://localhost:5173

## Notas Adicionales
- Asegúrate de tener Node.js y npm instalados en tu máquina antes de ejecutar la aplicación.
- Puedes personalizar y agregar más preguntas modificando la URL de la API (que por defecto es https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean) por cualquiera de las que se encuentran en la página oficial de https://opentdb.com. Para ello vas al archivo `AppRouter.jsx` que se encuentra en la carpeta `src/` y colocas la nueva URL en la línea #28 del código.
- Recuerda refrescar la página para obtener nuevas preguntas de la API.