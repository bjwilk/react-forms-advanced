import image from "../_assets/logo.png";
import '../index.css'
import FormData from "./FormData";

function Form() {
  return (
    <>
    <div>Form Page</div>
      <div className="image-wrapper">
        <img src={image} />
      </div>
      <div className="form-wrapper">
        <FormData />
      </div>
    </>
  );
}

export default Form;