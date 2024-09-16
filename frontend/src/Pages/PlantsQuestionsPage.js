
// PlantsQuestionsPage.js
import React from 'react';
import CommonComponent from '../CommonComponent';

const questions = [
    { question: "1. What is the process by which plants make their food?", options: ["Photosynthesis", "Respiration", "Transpiration", "Fertilization"], correct: 0 },
    { question: "2. Which part of the plant conducts photosynthesis?", options: ["Roots", "Leaves", "Stem", "Flowers"], correct: 1 },
    { question: "3. Which gas do plants absorb from the atmosphere during photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
    { question: "4. What is the largest type of tree by volume?", options: ["Redwood", "Baobab", "Oak", "Sequoia"], correct: 3 },
    { question: "5. Which part of the plant is responsible for transporting water from the roots to the leaves?", options: ["Xylem", "Phloem", "Stomata", "Chloroplast"], correct: 0 },
    { question: "6. What do plants release into the air during photosynthesis?", options: ["Carbon Dioxide", "Oxygen", "Water Vapor", "Nitrogen"], correct: 1 },
    { question: "7. What type of plant is known for trapping and digesting insects?", options: ["Venus Flytrap", "Cactus", "Fern", "Bamboo"], correct: 0 },
    { question: "8. Which part of a flower becomes the fruit?", options: ["Petal", "Stem", "Ovule", "Pistil"], correct: 2 },
    { question: "9. What is the primary function of plant roots?", options: ["Absorb water and nutrients", "Conduct photosynthesis", "Support the stem", "Produce seeds"], correct: 0 },
    { question: "10. What is the tallest type of grass?", options: ["Bamboo", "Wheat", "Sugarcane", "Rice"], correct: 0 },
    { question: "11. Which plant is known as the 'King of the Forest'?", options: ["Oak", "Redwood", "Sequoia", "Maple"], correct: 1 },
    { question: "12. Which plant is famous for its healing properties and is used in skincare?", options: ["Lavender", "Aloe Vera", "Chamomile", "Mint"], correct: 1 },
    { question: "13. Which plant is commonly known as a Christmas tree?", options: ["Pine", "Fir", "Spruce", "Cedar"], correct: 1 },
    { question: "14. What type of plant is a sunflower?", options: ["Shrub", "Tree", "Herb", "Annual"], correct: 3 },
    { question: "15. Which plant is commonly associated with good luck?", options: ["Clover", "Rose", "Tulip", "Lily"], correct: 0 }

  ];

function PlantsQuestionsPage() {
    return (
        <div className="plants-questions-page">
            <h1>Plants Related Questions</h1>
            <CommonComponent questions={questions} />
        </div>
    );
}

export default PlantsQuestionsPage;



// import React from 'react';

// function PlantsQuestionsPage() {
//     return (
//         <div className="plants-questions-page">
//             <h1>Plants Related Questions</h1>
//             <ul>
//                 <li>How many bones are in the human body?</li>
//                 <li>What is the largest organ in the human body?</li>
//                 <li>What is the function of red blood cells?</li>
//                 {/* Add more questions here */}
//             </ul>
//         </div>
//     );
// }

// export default PlantsQuestionsPage;
