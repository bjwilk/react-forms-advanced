import image from "../_assets/logo.png";
import '../index.css'
import SurveyForm from "./SurveyForm";

function Survey() {
  return (
    <>
    <div>Survey Page</div>
      <div className="image-wrapper">
        <img src={image} />
      </div>
      <div className="form-wrapper">
        <SurveyForm />
      </div>
    </>
  );
}

export default Survey;
