import image from "../_assets/logo.png";
import '../index.css'

function Home() {
  return (
    <>
    <div>Home Page</div>
      <div className="image-wrapper">
        <img src={image} />
      </div>
    </>
  );
}

export default Home;
