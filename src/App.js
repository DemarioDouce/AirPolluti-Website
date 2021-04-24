// CSS
import "./res/css/AppStyle.css";
// Image
import EarthImage from "./res/images/EarthImage.png";
function App() {
  return (
    <>
      {/* Main container */}
      <div className="container-fluid">
        {/* Top section */}
        <section className="container-top text-center">
          <div className="row">
            {/* Header text */}
            <div className="col-lg-6">
              <h1 className="header-text-top">SAVE THE EARTH GOT DAMMIT</h1>
            </div>
            {/* Image */}
            <div className="col-lg-6">
              <img className="image-top" src={EarthImage} alt="Earth" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
