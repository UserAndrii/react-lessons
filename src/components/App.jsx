import { Component } from 'react';

import ToDoList from './ToDoList/ToDoList';
import Counter from './Counter/Counter';
import Header from './Header/Header';
import Parent from './Parent/Parent';
import { Card } from './Card';

// const App = () => {
//   return <Card />;
// };

class App extends Component {
  state = { isShowModal: false };

  openModal = () => {
    this.setState({ isShowModal: true });
  };
  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    return (
      <div className="container">
        <Header open={this.openModal} />
        <ToDoList />
        <Parent close={this.closeModal} isOpen={this.state.isShowModal}>
          Some
        </Parent>
        <Counter />
        <Card />
      </div>
    );
  }
}

export default App;
