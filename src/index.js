import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom/client';

// class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//   };
//   state = { value: 0 };

//   handleIncrement = () => {
//     this.setState((state, props) => ({
//       value: state.value + props.step,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState((state, props) => ({
//       value: state.value - props.step,
//     }));
//   };

//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>{this.state.value}</span>
//         <button type="button" onClick={this.handleIncrement}>
//           Increment by {step}
//         </button>
//         <button type="button" onClick={this.handleDecrement}>
//           Decrement by {step}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Counter step={5} />
// );
