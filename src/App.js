// CSS
import "./res/css/AppStyle.css";
// Image
import EarthImage from "./res/images/EarthImage.png";
function App() {
  // Store current year
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* Main container */}
      <div className="container-fluid">
        {/* Top section */}
        <section className="container-top text-center">
          <div className="row">
            {/* Header text */}
            <div className="col-lg-6">
              <h1 className="header-text-top">SAVE THE EARTH</h1>
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
            <div className="col-lg-4 col-sm-6">
              <div className="card">
                <div className="px-4 py-5">
                  <i
                    className="fas fa-seedling fa-5x"
                    style={{ color: "#238636" }}
                  ></i>
                </div>
                <div className="px-4 pb-5">
                  <h5>PLANT</h5>
                  <p className="text-muted">Plant a tree.</p>
                </div>
              </div>
            </div>
            {/* Second card */}
            <div className="col-lg-4 col-sm-6">
              <div className="card">
                <div className="px-4 py-5">
                  <i
                    class="fas fa-recycle fa-5x"
                    style={{ color: "#1E88E5" }}
                  ></i>
                </div>
                <div className="px-4 pb-5">
                  <h5>RECYCLE</h5>
                  <p className="text-muted">Reduce, reuse, and recycle.</p>
                </div>
              </div>
            </div>
            {/* Third card */}
            <div className="col-lg-4 col-sm-6">
              <div className="card">
                <div className="px-4 py-5">
                  <i
                    class="fas fa-lightbulb fa-5x"
                    style={{ color: "#FDD835" }}
                  ></i>
                </div>
                <div className="px-4 pb-5">
                  <h5>ENERGY</h5>
                  <p className="text-muted">Use long-lasting light bulbs.</p>
                </div>
              </div>
            </div>
            {/* Fourth card */}
            <div className="col-lg-4 col-sm-6">
              <div className="card">
                <div className="px-4 py-5">
                  <i
                    class="fas fa-shopping-basket fa-5x"
                    style={{ color: "#00ACC1" }}
                  ></i>
                </div>
                <div className="px-4 pb-5">
                  <h5>SHOP</h5>
                  <p className="text-muted">Shop wisely.</p>
                </div>
              </div>
            </div>
            {/* Fifth card */}
            <div className="col-lg-4 col-sm-6">
              <div className="card">
                <div className="px-4 py-5">
                  <i class="fas fa-book fa-5x" style={{ color: "#6D4C41" }}></i>
                </div>
                <div className="px-4 pb-5">
                  <h5>EDUCATE</h5>
                  <p className="text-muted">Learn more.</p>
                </div>
              </div>
            </div>
            {/* Sixth card */}
            <div className="col-lg-4 col-sm-6">
              <div className="card">
                <div className="px-4 py-5">
                  <i
                    class="fas fa-bicycle fa-5x"
                    style={{ color: "#E53935" }}
                  ></i>
                </div>
                <div className="px-4 pb-5">
                  <h5>BIKE</h5>
                  <p className="text-muted">Bike more. Drive less.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer section */}
        <section className="container-footer text-center">
          <footer>
            <p>Copyright© {currentYear} Demario Douce. All rights reserved.</p>
          </footer>
        </section>
      </div>
    </>
  );
}

export default App;
