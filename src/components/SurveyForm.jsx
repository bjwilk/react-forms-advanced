import { useState } from 'react';

import surveyData from '../_assets/sample.json';

function SurveyForm() {
  // State to store form data
  const [formData, setFormData] = useState({});

  // Handle form input changes
  const handleInputChange = (questionId, value) => {
    setFormData(prevData => ({
      ...prevData,
      [questionId]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic (e.g., sending data to server)
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{surveyData.name}</h1>
      <p>{surveyData.description}</p>
      <p>{surveyData.instructions}</p>
      
      {surveyData.questions.map((question, index) => (
        <div key={index}>
          {question.type === 'mcq' && (
            <>
              <p>{question.stem}</p>
              <ul>
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex}>
                    <input
                      type="radio"
                      id={`option-${index}-${optionIndex}`}
                      name={`question-${index}`}
                      value={option.value}
                      onChange={(e) => handleInputChange(question.stem, e.target.value)}
                    />
                    <label htmlFor={`option-${index}-${optionIndex}`}>{option.text}</label>
                  </li>
                ))}
              </ul>
            </>
          )}

          {question.type === 'cr' && (
            <>
              <p>{question.stem}</p>
              <textarea
                rows={question.lines || 3}
                cols={40}
                maxLength={question.charlimit || 250}
                onChange={(e) => handleInputChange(question.stem, e.target.value)}
              ></textarea>
            </>
          )}

        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
}

export default SurveyForm;
