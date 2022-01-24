import React from "react";
import "./App.css";


function App() {
    const quiz = {
        question: "일론 머스크의 우주 탐사 기업 이름은?",
        answers: [
            {text: "스페이스 엑스" , isCorrect: true},
            {text: "테슬라", isCorrect: false},
            {text: "보림 컴퍼니" , isCorrect : false},
            {text: "솔라시티" , isCorrect: false},
        ],
    };

    const handleClick = (isCorrect) =>{
        if(isCorrect){
            alert("정담");
        }
        else{
            alert("오답");
        }
    }
    return (
        <div className = "container">
            <div className = "app">
                <div className = "question-section">
                    <h1 className = "question-header">
                        <span>1/4</span>
                    </h1>
                    <div className = "question-text">{quiz.question}</div>
                </div>
                <div className = "answer-section">
                    {quiz.answers.map((answer) =>(
                        <button value = {answer.text} onClick = {() => handleClick(answer.isCorrect)}>
                            {answer.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;