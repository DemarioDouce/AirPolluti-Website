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
        "http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=5c5d6e30ba72c04e9d014b3a7c6c57af"
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
        <h1>Hello World</h1>
        <FooterComponent />
      </div>
    </>
  );
}

export default AirPollution;
