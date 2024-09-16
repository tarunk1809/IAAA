


// SpaceQuestionsPage.js
import React from 'react';
import CommonComponent from '../CommonComponent';
const questions = [
    { question: "1. Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], correct: 0 },
    { question: "2. What is the largest planet in our solar system?", options: ["Saturn", "Earth", "Jupiter", "Neptune"], correct: 2 },
    { question: "3. Which planet is known as the 'Red Planet'?", options: ["Venus", "Mars", "Mercury", "Jupiter"], correct: 1 },
    { question: "4. What is the name of the galaxy that contains our solar system?", options: ["Andromeda", "Milky Way", "Triangulum", "Whirlpool"], correct: 1 },
    { question: "5. Which planet is known for its prominent ring system?", options: ["Uranus", "Jupiter", "Saturn", "Neptune"], correct: 2 },
    { question: "6. Which planet is known as the 'Morning Star' or 'Evening Star'?", options: ["Venus", "Mars", "Mercury", "Jupiter"], correct: 0 },
    { question: "7. What celestial body is Earth's only natural satellite?", options: ["Sun", "Mars", "Moon", "Venus"], correct: 2 },
    { question: "8. Which planet has the most moons?", options: ["Saturn", "Earth", "Jupiter", "Neptune"], correct: 2 },
    { question: "9. What is the name of the 2nd largest dwarf planet in our solar system?", options: ["Pluto", "Ceres", "Eris", "Makemake"], correct: 2 },
    { question: "10. What is the closest star to Earth?", options: ["Sirius", "Proxima Centauri", "Alpha Centauri", "The Sun"], correct: 3 },
    { question: "11. What force keeps the planets in orbit around the Sun?", options: ["Magnetism", "Gravity", "Inertia", "Radiation"], correct: 1 },
    { question: "12. What is the hottest planet in our solar system?", options: ["Mercury", "Venus", "Mars", "Jupiter"], correct: 1 },
    { question: "13. Which planet has a day longer than its year?", options: ["Neptune", "Venus", "Mars", "Mercury"], correct: 1 },
    { question: "14. What are the small rocky objects orbiting the Sun, primarily found between Mars and Jupiter, called?", options: ["Comets", "Asteroids", "Meteors", "Moons"], correct: 1 },
    { question: "15. What is the name of the largest volcano in the solar system, located on Mars?", options: ["Olympus Mons", "Mauna Kea", "Mount Everest", "K2"], correct: 0 }
];    

function SpaceQuestionsPage() {
   
    return (
        <div className="space-questions-page">
            <h1>Space Related Questions</h1>
            
            <CommonComponent questions={questions} />

        </div>
    );
}

export default SpaceQuestionsPage;

// // src/pages/SpaceQuestionsPage.js
// import React from 'react';

// function SpaceQuestionsPage() {
//     return (
//         <div className="space-questions-page">
//             <h1>Space Related Questions</h1>
//             <ul>
//                 <li>What is the closest planet to the Sun?</li>
//                 <li>How many moons does Mars have?</li>
//                 <li>What is the largest planet in our solar system?</li>
//                 {/* Add more questions here */}
//             </ul>
//         </div>
//     );
// }

// export default SpaceQuestionsPage;