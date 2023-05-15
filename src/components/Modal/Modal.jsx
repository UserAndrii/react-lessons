import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#root-modal');

const Modal = ({ children, close }) => {
  useEffect(() => {
    const handleESC = e => {
      if (e.code === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', handleESC);

    return () => document.removeEventListener('keydown', handleESC);
  }, [close]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      close();
    }
  };

  return createPortal(
    <div
      onClick={handleBackdropClick}
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
    </div>,
    modalRoot
  );
};

// class Modal extends Component {
//   componentDidMount() {
//     document.addEventListener('keydown', this.handleESC);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.handleESC);
//   }

//   handleESC = e => {
//     if (e.code === 'Escape') {
//       this.props.close();
//     }
//   };

//   handleBackdropClick = event => {
//     // console.log(event.currentTarget);
//     // console.log(event.target);
//     if (event.currentTarget === event.target) {
//       this.props.close();
//     }
//   };

//   render() {
//     const { children, close } = this.props;
//     return createPortal(
//       <div
//         onClick={this.handleBackdropClick}
//         className="modal fade show"
//         style={{ display: 'block', backdropFilter: 'blur(5px)' }}
//       >
//         <div
//           className="modal-dialog position-absolute top-50 start-50 translate-middle"
//           style={{ width: '100%' }}
//         >
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title"> Modal</h5>
//               <button
//                 onClick={close}
//                 type="button"
//                 className="btn-close"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">{children}</div>
//           </div>
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }

export default Modal;

// const Modal = ({ children, close }) => {
//   return (
//     <div
//       className="modal fade show"
//       style={{ display: 'block', backdropFilter: 'blur(5px)' }}
//     >
//       <div
//         className="modal-dialog position-absolute top-50 start-50 translate-middle"
//         style={{ width: '100%' }}
//       >
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title"> Modal</h5>
//             <button
//               onClick={close}
//               type="button"
//               className="btn-close"
//               aria-label="Close"
//             ></button>
//           </div>
//           <div className="modal-body">{children}</div>
//         </div>
//       </div>
//     </div>
//   );
// };
