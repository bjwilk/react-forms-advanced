import { useState } from "react";
import formData from "../_assets/spi.json";
import "../index.css";

const hearing = ["q2", "q5", "q8", "q11", "q14"];
const sight = ["q1", "q4", "q7", "q10", "q13"];
const touch = ["q3", "q6", "q9", "q12", "q15"];

function FormData() {
  const [data, setData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [percentages, setPercentages] = useState({ hearing: 0, sight: 0, touch: 0 });

  const handleInputChange = (questionId, value) => {
    setData((prevData) => ({
      ...prevData,
      [questionId]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Calculate total responses for each category
    const hearingResponses = hearing.filter((code) => data[code] === "agree").length;
    const sightResponses = sight.filter((code) => data[code] === "agree").length;
    const touchResponses = touch.filter((code) => data[code] === "agree").length;

    const totalHearing = hearing.length;
    const totalSight = sight.length;
    const totalTouch = touch.length;

    const hearingPercentage = (hearingResponses / totalHearing) * 100;
    const sightPercentage = (sightResponses / totalSight) * 100;
    const touchPercentage = (touchResponses / totalTouch) * 100;

    // Set calculated percentages
    setPercentages({
      hearing: hearingPercentage,
      sight: sightPercentage,
      touch: touchPercentage,
    });

    // Set submitted flag to true
    setSubmitted(true);
  };

  // Filter questions where question.stem is true
  const filteredQuestions = formData.questions.filter((question) => question.stem);

  return (
    <div className="form-data-wrapper">
      <form onSubmit={handleSubmit}>
        <h1>{formData.name}</h1>
        <div>
          {filteredQuestions.map((question, index) => (
            <div key={index} className="question-container">
              <div dangerouslySetInnerHTML={{ __html: question.stem }}></div>
              <label>
                <input
                  type="radio"
                  name={`question_${index + 1}`} // Correct the index
                  value="agree"
                  onChange={() => handleInputChange(question.code, "agree")}
                />
                Agree
              </label>
              <label>
                <input
                  type="radio"
                  name={`question_${index + 1}`} // Correct the index
                  value="disagree"
                  onChange={() => handleInputChange(question.code, "disagree")}
                />
                Disagree
              </label>
            </div>
          ))}
        </div>
        <button type="submit">Submit</button>
        {submitted && <PercentageDisplay percentages={percentages} />}
      </form>
    </div>
  );
}

function PercentageDisplay({ percentages }) {
  return (
    <div>
      <h2>Response Percentages:</h2>
      <p>Hearing: {percentages.hearing.toFixed(2)}%</p>
      <p>Sight: {percentages.sight.toFixed(2)}%</p>
      <p>Touch: {percentages.touch.toFixed(2)}%</p>
    </div>
  );
}

export default FormData;
