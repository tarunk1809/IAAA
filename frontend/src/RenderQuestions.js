
import React, { useState } from 'react';
import QuestionsContainer from './QuizComponents/QuestionsContainer';
import SpaceQuestionsPage from './Pages/SpaceQuestionsPage'; 
import HumanBodyQuestionsPage from './Pages/HumanBodyQuestionsPage';
import PlantsQuestionsPage from './Pages/PlantsQuestionsPage';
import AnimalsQuestionsPage from './Pages/AnimalsQuestionsPage';

// Create these pages as needed

function RenderQuestions() {
    const [selectedType, setSelectedType] = useState(null);

    const renderQuestions = () => {
        switch (selectedType) {
            case 'space':
                return <SpaceQuestionsPage />;
            case 'human-body':
                return <HumanBodyQuestionsPage />;
            case 'Plants':
                return <PlantsQuestionsPage />;
            case 'Animals':
                return <AnimalsQuestionsPage />
            // Add cases for other question types
            default:
                return <QuestionsContainer onClick={setSelectedType} />;
        }
    };

    return (
        <div className="App">
            {renderQuestions()}
        </div>
    );
}

export default RenderQuestions;
