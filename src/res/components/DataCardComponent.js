function DataCardComponent({ color, title, text }) {
  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-body" style={{ backgroundColor: color }}>
            <h6 className="card-subtitle mb-2 data-text-color text-uppercase">
              {title}
            </h6>
            <p className="card-text">
              {text} μg/m
              <sup>3</sup>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataCardComponent;
