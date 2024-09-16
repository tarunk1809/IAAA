
// PlantsQuestions.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import plants from '../Assets/plants.jpeg'; // Ensure the correct image path

function PlantsQuestions() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/plants-questions');
    };

    return (
        <div className="question-card" onClick={handleClick}>
            <img src={plants} alt="Plants Related Data" />
            <p>Plants Quiz</p>
        </div>
    );
}

export default PlantsQuestions;


// import React from 'react';
// import plants from '../Assets/plants.jpeg';

// function PlantsQuestions({ onClick }) {
//     return (
//         <div className="question-card" onClick={onClick}>
//         <img src={plants} alt="Plants Related Data" />
//             <p>Plants Related Data</p>
//         </div>
//     );
// }

// export default PlantsQuestions;

