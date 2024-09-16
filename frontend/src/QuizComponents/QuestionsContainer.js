
// QuestionsContainer.js
import React from 'react';
import SpaceQuestions from './SpaceQuestions';
import HumanBodyQuestions from './HumanBodyQuestions';
import PlantsQuestions from './PlantsQuestions';
import AnimalsQuestions from './AnimalsQuestions';

function QuestionsContainer() {
    const handleQuestionClick = (type) => {
        // Logic to navigate to the respective questions based on the type
        console.log(`Navigating to ${type} questions...`);
        // You can use routing or change state to display the relevant questions
    };

    return (
        <div className="questions-container">
            <SpaceQuestions onClick={() => handleQuestionClick('space')} />
            <HumanBodyQuestions onClick={() => handleQuestionClick('human-body')} />
            <PlantsQuestions onClick={() => handleQuestionClick('plants')} />
            <AnimalsQuestions onClick={() => handleQuestionClick('animals')} />
        </div>
    );
}

export default QuestionsContainer;
