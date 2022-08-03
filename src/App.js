

function App() {

  const data = {
    "response_code": 0,
    "results": [
      {
        "category": "General Knowledge",
        "type": "boolean",
        "difficulty": "easy",
        "question": "The Great Wall of China is visible from the moon.",
        "correct_answer": "False",
        "incorrect_answers": [
          "True"
        ]
      },
      {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "On a dartboard, what number is directly opposite No. 1?",
        "correct_answer": "19",
        "incorrect_answers": [
          "20",
          "12",
          "15"
        ]
      },
      {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "hard",
        "question": "The Swedish word &quot;Grunka&quot; means what in English?",
        "correct_answer": "Thing",
        "incorrect_answers": [
          "People",
          "Place",
          "Pineapple"
        ]
      },
      {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What country saw a world record 315 million voters turn out for elections on May 20, 1991?",
        "correct_answer": "India",
        "incorrect_answers": [
          "United States of America",
          "Soviet Union",
          "Poland"
        ]
      },
      {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "hard",
        "question": "How long did it take the motorized window washers of the original World Trade Center to clean the entire exterior of the building?",
        "correct_answer": "1 Month",
        "incorrect_answers": [
          "3 Weeks",
          "1 Week",
          "2 Months"
        ]
      },
      {
        "category": "General Knowledge",
        "type": "boolean",
        "difficulty": "easy",
        "question": "One of Donald Trump&#039;s 2016 Presidential Campaign promises was to build a border wall between the United States and Mexico.",
        "correct_answer": "True",
        "incorrect_answers": [
          "False"
        ]
      },
      {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What year was the RoboSapien toy robot released?",
        "correct_answer": "2004",
        "incorrect_answers": [
          "2000",
          "2001",
          "2006"
        ]
      },
      {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Who founded the Khan Academy?",
        "correct_answer": "Sal Khan",
        "incorrect_answers": [
          "Ben Khan",
          "Kitt Khan",
          "Adel Khan"
        ]
      },
      {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In which fast food chain can you order a Jamocha Shake?",
        "correct_answer": "Arby&#039;s",
        "incorrect_answers": [
          "McDonald&#039;s",
          "Burger King",
          "Wendy&#039;s"
        ]
      },
      {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Earth is located in which galaxy?",
        "correct_answer": "The Milky Way Galaxy",
        "incorrect_answers": [
          "The Mars Galaxy",
          "The Galaxy Note",
          "The Black Hole"
        ]
      }
    ]
  }

  console.log(data.results)

  return (
    <div className="App">
      {data.results.map((item, index) => {
        const { question, correct_answer, incorrect_answers } = item
        return (
          <>
            <h1 key={index}>{question}</h1>
            {incorrect_answers.map((answer, index) => {
              return (
                <button key={index}>{answer}</button>
              )
            })}
            <button>{correct_answer}</button>
          </>
        )
      })}

    </div>
  );
}

export default App;
