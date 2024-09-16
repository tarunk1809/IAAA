
// HumanBodyQuestionsPage.js
import React from 'react';
import CommonComponent from '../CommonComponent';

const questions = [
    { question: "1. What is the largest organ in the human body?", options: ["Heart", "Liver", "Skin", "Lungs"], correct: 2 },
    { question: "2. What type of blood cells help to fight infection?", options: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"], correct: 1 },
    { question: "3. How many bones does an adult human body have?", options: ["206", "208", "210", "212"], correct: 0 },
    { question: "4. Which part of the body is responsible for pumping blood?", options: ["Brain", "Heart", "Lungs", "Kidneys"], correct: 1 },
    { question: "5. What is the function of the small intestine?", options: ["Absorb nutrients", "Filter blood", "Store energy", "Produce hormones"], correct: 0 },
    { question: "6. What is the main component of human hair and nails?", options: ["Collagen", "Keratin", "Calcium", "Enzymes"], correct: 1 },
    { question: "7. Which part of the brain controls balance and coordination?", options: ["Cerebrum", "Brainstem", "Cerebellum", "Hypothalamus"], correct: 2 },
    { question: "8. How many chambers does the human heart have?", options: ["2", "3", "4", "5"], correct: 2 },
    { question: "9. What is the hardest substance in the human body?", options: ["Bone", "Enamel", "Cartilage", "Nail"], correct: 1 },
    { question: "10. Which organ is responsible for filtering and cleaning the blood?", options: ["Liver", "Heart", "Kidneys", "Pancreas"], correct: 2 },
    { question: "11. What is the name of the pigment that gives skin its color?", options: ["Chlorophyll", "Hemoglobin", "Melanin", "Keratin"], correct: 2 },
    { question: "12. Which part of the body is affected by arthritis?", options: ["Muscles", "Lungs", "Joints", "Nerves"], correct: 2 },
    { question: "13. What is the longest bone in the human body?", options: ["Spine", "Humerus", "Femur", "Tibia"], correct: 2 },
    { question: "14. What is the function of red blood cells?", options: ["Transport oxygen", "Fight infection", "Clot blood", "Provide nutrients"], correct: 0 },
    { question: "15. Which organ helps in digestion by producing bile?", options: ["Liver", "Stomach", "Pancreas", "Gallbladder"], correct: 0 }

  ];


function HumanBodyQuestionsPage() {
    return (
        <div className="human-body-questions-page">
            <h1>Human Body Related Questions</h1>
            <CommonComponent questions={questions}/>
        </div>
    );
}

export default HumanBodyQuestionsPage;



// import React from 'react';

// function HumanBodyQuestionsPage() {
//     return (
//         <div className="human-body-questions-page">
//             <h1>Human Body Related Questions</h1>
//             <ul>
//                 <li>How many bones are in the human body?</li>
//                 <li>What is the largest organ in the human body?</li>
//                 <li>What is the function of red blood cells?</li>
//                 {/* Add more questions here */}
//             </ul>
//         </div>
//     );
// }

// export default HumanBodyQuestionsPage;
