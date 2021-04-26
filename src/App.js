//Component
import CardComponent from "./res/components/CardComponent";
import FooterComponent from "./res/components/FooterComponent";
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
              <h1 className="header-text-top text-break">SAVE THE EARTH</h1>
              <h1 className="sub-text-top">GOD DAMMIT!</h1>
              <button type="button" className="btn">
                VIEW AIR POLLUTION
              </button>
            </div>
            {/* Image */}
            <div className="col-lg-6">
              <img className="image-top" src={EarthImage} alt="Earth" />
            </div>
          </div>
        </section>
        {/* Middle section */}
        <section className="container-middle text-center">
          <h1 className="px-4">PROTECTING OUR PLANET</h1>
          <h1 className="px-4 pb-5">STARTS WITH YOU</h1>
          <div className="row">
            {/* First card */}
            <CardComponent
              icon="fas fa-seedling fa-5x"
              color="#238636"
              title="PLANT"
              description="Plant a tree."
            />
            {/* Second card */}
            <CardComponent
              icon="fas fa-recycle fa-5x"
              color="#1E88E5"
              title="RECYCLE"
              description="Reduce, reuse, and recycle."
            />
            {/* Third card */}
            <CardComponent
              icon="fas fa-lightbulb fa-5x"
              color="#FDD835"
              title="ENERGY"
              description="Use long-lasting light bulbs."
            />
            {/* Fourth card */}
            <CardComponent
              icon="fas fa-shopping-basket fa-5x"
              color="#00ACC1"
              title="SHOP"
              description="Shop wisely."
            />
            {/* Fifth card */}
            <CardComponent
              icon="fas fa-book fa-5x"
              color="#6D4C41"
              title="EDUCATE"
              description="Learn more."
            />
            {/* Sixth card */}
            <CardComponent
              icon="fas fa-bicycle fa-5x"
              color="#E53935"
              title="BIKE"
              description="Bike more. Drive less."
            />
          </div>
        </section>
        {/* Footer section */}
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
