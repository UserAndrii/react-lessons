const Modal = ({ children, close }) => {
  return (
    <div
      className="modal fade show"
      style={{ display: 'block', backdropFilter: 'blur(5px)' }}
    >
      <div
        className="modal-dialog position-absolute top-50 start-50 translate-middle"
        style={{ width: '100%' }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"> Modal</h5>
            <button
              onClick={close}
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
