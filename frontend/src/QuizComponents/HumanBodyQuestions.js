
// HumanBodyQuestions.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import humanbody from '../Assets/humanbody.jpeg'; // Ensure the correct image path

function HumanBodyQuestions() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/human-body-questions');
    };

    return (
        <div className="question-card" onClick={handleClick}>
            <img src={humanbody} alt="HumanBody Related Data" />
            <p>Human Body Quiz</p>
        </div>
    );
}

export default HumanBodyQuestions;



// import React from 'react';
// import humanbody from '../Assets/humanbody.jpeg'

// function HumanBodyQuestions({ onClick }) {
//     return (
//         <div className="question-card" onClick={onClick}>
//             <img src={humanbody} alt="HumanBody Related Data" />
//             <p>HumanBody Related Data</p>
//         </div>
//     );
// }

// export default HumanBodyQuestions;

