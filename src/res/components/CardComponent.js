function CardComponent({ icon, color, title, description }) {
  return (
    <>
      <div className="col-lg-4 col-sm-6">
        <div className="card">
          <div className="px-4 py-5">
            <i className={icon} style={{ color: color }}></i>
          </div>
          <div className="px-4 pb-5">
            <h5 className="fw-bold">{title}</h5>
            <p className="text-muted">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardComponent;
