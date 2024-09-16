
// // SpaceQuestions.js
// import React from 'react';

// function SpaceQuestions({ onClick }) {
//     return (
//         <div className="question-card" onClick={onClick}>
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtQyXGKqaawhTEsftomCBIXtIk16zx7djAA&s" alt="Space Related Data" />
//             <p>Space Related Data</p>
//         </div>
//     );
// }

// export default SpaceQuestions;

// Repeat the same for other question types with different images and texts


// SpaceQuestions.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SpaceQuestions() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/space-questions');
    };

    return (
        <div className="question-card" onClick={handleClick}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtQyXGKqaawhTEsftomCBIXtIk16zx7djAA&s" alt="Space Related Data" />
            <p>Space Quiz</p>
        </div>
       
    );
}

export default SpaceQuestions;
