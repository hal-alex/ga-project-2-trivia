import React from 'react'
import { useState, createContext } from 'react'



// const [ currentQuestion, setCurrentQuestion ] = useState('')

// let currentIndex = 0

const Question = ({ testData, setStartVisibility, setVisible }) => {

  function showStart() {
    setStartVisibility(true)
    setVisible(false)
  }

  const [questionIndex, setQuestionIndex] = useState(0)

  const [score, setScore] = useState(0)

  function compareAnswers(event, correctAnswer) {
    setQuestionIndex(questionIndex + 1)

    if (event.target.value === correctAnswer) {
      setScore(score + 1)
    }
  }
 
  let newArray

  function arrayMagic(correctAnswer, incorrectAnswers) {
    newArray = [...incorrectAnswers, correctAnswer ].sort()
  }

  return (
    <>
      <div>
        {testData.map((item, index) => {

          const { question, correctAnswer, incorrectAnswers, category, difficulty } = item

          if (index === questionIndex) {
            { arrayMagic(correctAnswer, incorrectAnswers) }
            return (
              <>
                <p>Question category: {category}</p>
                <p>Question difficulty: {difficulty}</p>
                <p>Question {index + 1} out of {testData.length} </p>
                <p>Your score is: {score}</p>
                <h1>{question}</h1>
                {newArray.map(answer => {
                  return <button value={answer} onClick={(event) => { compareAnswers(event, correctAnswer); }}>{answer}</button>
                })}
              </>
            )
          }
        })}

        {questionIndex >= testData.length ? [<p>Quiz complete! Your final score is: {score}</p>, <button onClick={showStart}>Start new quiz</button>, testData.map((item, index) => {
          const { question, correctAnswer, incorrectAnswers } = item
          return(
            <>
              <div>
                <p>{question}</p>
                <p>Correct answer: {correctAnswer}</p>
                <p>Incorrect answers: {incorrectAnswers.map((answer, index) => {
                  return (index + 1 === incorrectAnswers.length ? `${answer}`: `${answer}, `)
                })}</p>
              </div>
            </>
          )
        })  ]: ""  } 

        </div>



    </>
  )
}

export default Question