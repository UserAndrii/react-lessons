import { forwardRef } from 'react';
// import { useEffect } from 'react';

const Buttons = forwardRef((props, ref) => {
  const { play, pause } = props;

  //   useEffect(() => console.log(ref.current.getBoundingClientRect()));

  return (
    <div>
      <button
        onClick={play}
        className="btn btn-outline-success me-5"
        style={{ width: 80 }}
      >
        Play
      </button>
      <button
        onClick={pause}
        className="btn  btn-outline-danger ms-5"
        style={{ width: 80 }}
      >
        Pause
      </button>
    </div>
  );
});

export default Buttons;
