//React
import React, { useState } from "react";
//Component
import FooterComponent from "../res/components/FooterComponent";
import CardComponent from "../res/components/CardComponent";
//CSS
import "../res/css/AppStyle.css";
//Load react-router-dom package
import { Link } from "react-router-dom";
//Load axios package
import axios from "axios";

function AirPollution() {
  //States
  const [latitude, setlatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [airQuality, setAirQuality] = useState("");
  const [carbonMonoxide, setCarbonMonoxide] = useState("");
  const [nitrogenMonoxide, setNitrogenMonoxide] = useState("");
  const [nitrogenDioxide, setNitrogenDioxide] = useState("");
  const [ozone, setOzone] = useState("");
  const [sulphurDioxide, setSulphurDioxide] = useState("");
  const [fineParticlesMatter, setFineParticlesMatter] = useState("");
  const [coarseParticulateMatter, setCoarseParticulateMatter] = useState("");
  const [ammonia, setAmmonia] = useState("");

  //API call
  function submission(e) {
    e.preventDefault();
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/air_pollution?lat=" +
          latitude +
          "&lon=" +
          longitude +
          "&appid=5c5d6e30ba72c04e9d014b3a7c6c57af"
      )
      .then((result) => {
        if (result.data.list[0].main.aqi === 1) {
          setAirQuality("The air quality is good.");
        } else if (result.data.list[0].main.aqi === 2) {
          setAirQuality("The air quality is fair.");
        } else if (result.data.list[0].main.aqi === 3) {
          setAirQuality("The air quality is moderate.");
        } else if (result.data.list[0].main.aqi === 4) {
          setAirQuality("The air quality is poor.");
        } else {
          setAirQuality("The air quality is very poor.");
        }

        setCarbonMonoxide(result.data.list[0].components.co);
        setNitrogenMonoxide(result.data.list[0].components.no);
        setNitrogenDioxide(result.data.list[0].components.no2);
        setOzone(result.data.list[0].components.o3);
        setSulphurDioxide(result.data.list[0].components.so2);
        setFineParticlesMatter(result.data.list[0].components.pm2_5);
        setCoarseParticulateMatter(result.data.list[0].components.pm10);
        setAmmonia(result.data.list[0].components.nh3);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
          <form onSubmit={submission}>
            <div className="row">
              <div className="col">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Latitude"
                  aria-label="Latitude"
                  onChange={(e) => setlatitude(e.target.value)}
                  value={latitude}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Longitude"
                  aria-label="Longitude"
                  onChange={(e) => setLongitude(e.target.value)}
                  value={longitude}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn">
              SEARCH
            </button>
            <Link to="/" style={{ textDecoration: "none" }}>
              <button type="button" className="btn">
                GO BACK
              </button>
            </Link>
          </form>
        </section>
        {/* Middle section */}
        <section className="container-middle text-center">
          <div className="d-flex justify-content-center">
            <CardComponent
              icon="fas fa-cloud fa-5x"
              color="#b2b2b2"
              title="AIR QUALITY"
              description={airQuality}
            />
          </div>
          <p>
            {carbonMonoxide} μg/m
            <sup>3</sup>
          </p>
          <p>
            {nitrogenMonoxide} μg/m
            <sup>3</sup>
          </p>
          <p>
            {nitrogenDioxide} μg/m
            <sup>3</sup>
          </p>
          <p>
            {ozone} μg/m
            <sup>3</sup>
          </p>
          <p>
            {sulphurDioxide} μg/m
            <sup>3</sup>
          </p>
          <p>
            {fineParticlesMatter} μg/m
            <sup>3</sup>
          </p>
          <p>
            {coarseParticulateMatter} μg/m
            <sup>3</sup>
          </p>
          <p>
            {ammonia} μg/m
            <sup>3</sup>
          </p>
        </section>
        <FooterComponent />
      </div>
    </>
  );
}

export default AirPollution;
