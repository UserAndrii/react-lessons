import { Component } from 'react';
import { nanoid } from 'nanoid';

import ToDoList from './ToDoList/ToDoList';
import Counter from './Counter/Counter';
import Header from './Header/Header';
import Modal from './Modal/Modal';
import FormLogin from './FormLogin/FormLogin';
import { Card } from './Card';
import { SignUpForm } from './SingUpForm/SingUpForm';

class App extends Component {
  state = { isShowModal: false };

  toggleModal = () => {
    this.setState(({ isShowModal }) => ({
      isShowModal: !isShowModal,
    }));
  };

  createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
      role: 'customer',
    };
    console.table(newUser);
  };

  render() {
    return (
      <div className="container">
        <Header open={this.toggleModal} />
        {this.state.isShowModal && (
          <Modal close={this.toggleModal}>
            <FormLogin close={this.toggleModal} createUser={this.createUser} />
          </Modal>
        )}
        <ToDoList />
        <Counter initialValue={100} />
        <Card />
        <SignUpForm onSubmit={values => console.table(values)} />
      </div>
    );
  }
}

export default App;
