

// import React from 'react';

// function AnimalsQuestionsPage() {
//     return (
//         <div className="animals-questions-page">
//             <h1>Animals Related Questions</h1>
//             <ul>
//                 <li>How many bones are in the human body?</li>
//                 <li>What is the largest organ in the human body?</li>
//                 <li>What is the function of red blood cells?</li>
//                 {/* Add more questions here */}
//             </ul>
//         </div>
//     );
// }

// export default AnimalsQuestionsPage;

// AnimalsQuestionsPage.js
import React from 'react';
import CommonComponent from '../CommonComponent';


const questions = [
    { question: "1. What is the fastest land animal?", options: ["Cheetah", "Lion", "Horse", "Leopard"], correct: 0 },
    { question: "2. Which animal is known as the 'King of the Jungle'?", options: ["Tiger", "Lion", "Elephant", "Leopard"], correct: 1 },
    { question: "3. What is the largest mammal on Earth?", options: ["Elephant", "Blue Whale", "Giraffe", "Rhino"], correct: 1 },
    { question: "4. Which bird is famous for its colorful feathers and large tail fan?", options: ["Peacock", "Parrot", "Swan", "Flamingo"], correct: 0 },
    { question: "5. Which animal is known for having a long neck?", options: ["Giraffe", "Elephant", "Zebra", "Camel"], correct: 0 },
    { question: "6. What is the only mammal capable of true flight?", options: ["Bat", "Eagle", "Flying Squirrel", "Owl"], correct: 0 },
    { question: "7. Which animal can live both on land and in water?", options: ["Crocodile", "Dolphin", "Penguin", "Frog"], correct: 3 },
    { question: "8. What is the tallest bird in the world?", options: ["Ostrich", "Eagle", "Flamingo", "Emu"], correct: 0 },
    { question: "9. Which animal is known for its ability to change color?", options: ["Chameleon", "Octopus", "Jellyfish", "Frog"], correct: 0 },
    { question: "10. Which animal is known for having black and white stripes?", options: ["Zebra", "Tiger", "Panda", "Penguin"], correct: 0 },
    { question: "11. Which animal is known for building dams?", options: ["Beaver", "Otter", "Squirrel", "Platypus"], correct: 0 },
    { question: "12. Which animal is the largest of the big cats?", options: ["Lion", "Tiger", "Jaguar", "Leopard"], correct: 1 },
    { question: "13. What is the slowest animal on land?", options: ["Snail", "Sloth", "Turtle", "Koala"], correct: 1 },
    { question: "14. Which animal has the longest lifespan?", options: ["Elephant", "Galápagos Tortoise", "Whale", "Parrot"], correct: 1 },
    { question: "15. What is the only species of insect that makes food eaten by humans?", options: ["Bee", "Ant", "Butterfly", "Ladybug"], correct: 0 }

];


function AnimalsQuestionsPage() {
    return (
        <div className="animals-questions-page">
            <h1>Animals Related Questions</h1>
            <CommonComponent questions={questions}/>
        </div>
    );
}

export default AnimalsQuestionsPage;

