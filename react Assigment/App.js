import "./App.css";
import { useState } from "react";

const Quiz = [
  {
    Title: "What is AI",
    options: [
      "Artificial Intelligance",
      "Anda Intelligance",
      "Artificial Internet",
      "Allu Intelligance",
    ],
    correctAnswer: "Artificial Intelligance",
  },
  {
    Title: "What is CSS",
    options: [
      "Cascading Seen Seen",
      "Cut Soja Soja",
      "Cascading Style Sheet",
      "Mjhe Ni Pta",
    ],
    correctAnswer: "Cascading Style Sheet",
  },
  {
    Title: "What is JS",
    options: ["Java", "Jao Sahi Se", "Java Script", "Jiye Sindh"],
    correctAnswer: "Java Script",
  },
  {
    Title: "What is React",
    options: ["FrameWork", "Frame Cover", "Library", "Libory"],
    correctAnswer: "Library",
  },
  {
    Title: "BBC Stands For",
    options: ["British Broadcasting Corporation", "British Bro Code", "Brother Broadcasting Coding", "Mjhe ni pata"],
    correctAnswer: "British Broadcasting Corporation",
  },
  {
    Title: "Biology is the branch of?",
    options: ["Urdu", "English", "Computer", "Science"],
    correctAnswer: "Science",
  },
  {
    Title: "IT Stand For",
    options: ["Information Technology", "Inter Tech", "Idea Technology", "Input tech"],
    correctAnswer: "Information Technology",
  },
  {

  }
];
function App() {
  const [questionNo, setQuestionNo] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [userNumber, setUserNumber] = useState(0); 
  const [showMarks, setShownMarks] = useState(false);
  const [checking, setChecking] = useState(false);

  function ChangeQ() {
    let tempQues = questionNo
    setQuestionNo(++tempQues)
    let demoUserNumber = userNumber
    Quiz[questionNo].correctAnswer === selectedAnswer && setUserNumber(demoUserNumber + 10)
    setChecking (false)
  }

  function selectedvalue(e) {
   setSelectedAnswer(e.target.value);
    setChecking(true);
  }

  function result() {
    setShownMarks(true);
  }

  const options = Quiz[questionNo].options;

  return (
    <div className="App">
      <header className="App-header">
        <div className="Style">
          
        {questionNo < Quiz.length - 1 && <h4>
          Q{questionNo + 1}) {Quiz[questionNo].Title}
        </h4>}

        { questionNo < Quiz.length - 1 && options.map(function (items, index) {
          return (
            <div>
              <input
              className="Inp"
                name="q1"
                onChange={(e) => selectedvalue(e)}
                type="radio"
                value={items}
                checked={checking}
              />{" "}
              {items}
            </div>
          );
        })}
       {questionNo < Quiz.length -1 &&  (
          <button className="Btn-next" onClick={ChangeQ}>Next</button>
        )}
       {questionNo == Quiz.length -1 && (
          <button className="btn-finish" onClick={result}>Finish</button>
        )}
        {showMarks && <h1>Marks + {userNumber}</h1>}
        </div>
      </header>
    </div>
  );
}

export default App;