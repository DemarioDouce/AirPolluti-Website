//Component
import FooterComponent from "../res/components/FooterComponent";
// CSS
import "../res/css/AppStyle.css";
//Load react-router-dom package
import { Link } from "react-router-dom";
// Load axios package
import axios from "axios";

function AirPollution() {
  function submission(e) {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/air_pollution?lat=43.653225&lon=-79.383186&appid=5c5d6e30ba72c04e9d014b3a7c6c57af"
      )
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  submission();
  return (
    <>
      {/* Main container */}
      <div className="container-fluid">
        {/* Top section */}
        <section className="container-top text-center">
          <h1 className="header-text-top fw-bold">AIR POLLUTION DATA</h1>
        </section>
        {/* User input section */}
        <section className="container-user-input text-center">
          <form>
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
            </div>
            <button type="submit" class="btn">
              SEARCH
            </button>
            <Link to="/" style={{ textDecoration: "none" }}>
              <button type="submit" class="btn">
                GO BACK
              </button>
            </Link>
          </form>
        </section>
        <FooterComponent />
      </div>
    </>
  );
}

export default AirPollution;
