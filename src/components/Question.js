import React from 'react'


// Ask why { results } is not working

// set question at index 0 using setstate
// add a condition that checks if the index of the question matches the current iteration of the map method
// 
const Question = ({ data }) => {

  return (
    <>
    <div>
        {data.results.map(item => {
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

    </div>

    </>
  )
}

export default Question