// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpaceQuestions from './QuizComponents/SpaceQuestions';
import AnimalsQuestions from './QuizComponents/AnimalsQuestions';
import PlantsQuestions from './QuizComponents/PlantsQuestions';
import HumanBodyQuestions from './QuizComponents/HumanBodyQuestions';
import SpaceQuestionsPage from './Pages/SpaceQuestionsPage';
import AnimalsQuestionsPage from './Pages/AnimalsQuestionsPage';
import PlantsQuestionsPage from './Pages/PlantsQuestionsPage';
import HumanBodyQuestionsPage from './Pages/HumanBodyQuestionsPage';
import Navbar from './Navbar';
import Home from './QuitzComonents/Home';
import AddQuestion from './QuitzComonents/AddQuestion';
import AddCategory from './QuitzComonents/AddCategory';
import Quiz from './QuitzComonents/Quiz';

function App() {
  return (
    <BrowserRouter>
       
      <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/home' element={<Home />}/>
         <Route path='/addQuestion' element={<AddQuestion />}/>
         <Route path='/addCategory' element={<AddCategory />}/>
         <Route path='/quiz' element={<Quiz />}/>










        <Route path='/space' element={<SpaceQuestions />}/>
        <Route path='/animals' element={<AnimalsQuestions />}/>
        <Route path='/plants' element={<PlantsQuestions />}/>
        <Route path='/humanbody' element={<HumanBodyQuestions />}/>
        <Route path="/space-questions" element={<SpaceQuestionsPage />} />
        <Route path="/animals-questions" element={<AnimalsQuestionsPage />} />
        <Route path="/plants-questions" element={<PlantsQuestionsPage />} />
        <Route path="/human-body-questions" element={<HumanBodyQuestionsPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// import React from 'react'
// import RenderQuestions from './RenderQuestions';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';

// function App() {
//   return (

//     <BrowserRouter>
//         <Routes>
//             <Route path='/questions' element={<RenderQuestions />}/>
//             <Route path='/pages' element={<RenderQuestions />}/>
//         </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

// App.js
// App.js