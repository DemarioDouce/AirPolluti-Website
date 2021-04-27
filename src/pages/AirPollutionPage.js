//Component
import FooterComponent from "../res/components/FooterComponent";
// CSS
import "../res/css/AppStyle.css";
//Load react-router-dom package
import { Link } from "react-router-dom";

function AirPollution() {
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
