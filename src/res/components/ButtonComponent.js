function ButtonComponent({ text, type }) {
  return (
    <>
      <button type={type} className="btn fw-bold">
        {text}
      </button>
    </>
  );
}

export default ButtonComponent;
