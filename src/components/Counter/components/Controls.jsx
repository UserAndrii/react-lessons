const Controls = ({ onIncrement, onDecrement }) => (
  <div className="d-flex justify-content-center px-5">
    <button onClick={onIncrement} className="btn btn-outline-success me-5">
      <i className="bi bi-plus-circle fs-1"></i>
    </button>

    <button className="btn  btn-outline-danger ms-5" onClick={onDecrement}>
      <i className="bi bi-dash-circle fs-1"></i>
    </button>
  </div>
);

export default Controls;
