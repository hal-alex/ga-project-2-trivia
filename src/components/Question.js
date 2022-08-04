import React from 'react'
import { useState } from 'react'

// const [ currentQuestion, setCurrentQuestion ] = useState('')



// let currentIndex = 0
// Ask why { results } is not working

// set question at index 0 using setstate
// add a condition that checks if the index of the question matches the current iteration of the map method
// 
const Question = ({ data }) => {

  const [questionIndex, setQuestionIndex] = useState(0)

  return (
    <>
      <div>
        {console.log(data.results[questionIndex])}

        {/* {data.results.map((item, index) => {
          setCurrentQuestion(data.results.indexOf(item))
          console.log(currentQuestion)
          const { question, correct_answer, incorrect_answers } = item
          return (
            <>
              <h1>{question}</h1>
              {incorrect_answers.map(answer => {
                return <button>{answer}</button>
              })}
              <button>{correct_answer}</button>
            </>
          )
        })} */}

      </div>

    {/* <div>
        {data.results.map((item, index) => {
          setCurrentQuestion(data.results.indexOf(item))
          console.log(currentQuestion)
          const { question, correct_answer, incorrect_answers } = item
          return (
            <>
              <h1>{question}</h1>
              {incorrect_answers.map(answer => {
                return <button>{answer}</button>
              })}
              <button>{correct_answer}</button>
            </>
          )
        })}

    </div> */}

    </>
  )
}

export default Question