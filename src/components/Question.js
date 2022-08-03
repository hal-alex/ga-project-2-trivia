import React from 'react'


// Ask why { results } is not working
const Question = (props) => {

  return (
    <>
    <div>
        {props.data.results.map(item => {
          const { question, correct_answer, incorrect_answers } = item
          return (
            <>
              <h1>{question.replace(/&amp;/g, '&')}</h1>
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