
// import React from 'react';
// import animals from './src/Assets/animals.jpeg';

// function AnimalsQuestions({ onClick }) {
//     return (
//         <div className="question-card" onClick={onClick}>
//             <img src={animals} alt='Animals'/>
//             <p>Animals Related Data</p>
//         </div>
//     );
// }

// export default AnimalsQuestions;

// AnimalsQuestions.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import animals from '../Assets/animals.jpeg';

function AnimalsQuestions() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/animals-questions');
    };

    return (
        <div className="question-card" onClick={handleClick}>
            <img src={animals} alt='Animals Related Data' />
            <p>Animals Quiz</p>
        </div>
    );
}

export default AnimalsQuestions;
