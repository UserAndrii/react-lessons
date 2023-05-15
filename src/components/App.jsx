import { useState } from 'react';
import { nanoid } from 'nanoid';

import ToDoList from './ToDoList/ToDoList';
import Counter from './Counter/Counter';
import Header from './Header/Header';
import Modal from './Modal/Modal';
import FormLogin from './FormLogin/FormLogin';
import { Card } from './Card';
import { SignUpForm } from './SingUpForm/SingUpForm';
import Player from './Player/Player';
import ContentInfo from './ContentInfo/ContentInfo';
import Search from './Search/Search';

const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleModal = () => setIsShowModal(prev => !prev);

  const handleSearch = searchText => setSearchText(searchText);

  const createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
      role: 'customer',
    };
    console.table(newUser);
  };

  return (
    <div className="container">
      <Header open={toggleModal} />
      <Search handleSearch={handleSearch} />
      <ContentInfo searchText={searchText} />
      <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
      {isShowModal && (
        <Modal close={toggleModal}>
          <FormLogin close={toggleModal} createUser={createUser} />
        </Modal>
      )}
      <ToDoList />
      <Counter initialValue={100} />
      <Card />
      <SignUpForm onSubmit={values => console.table(values)} />
    </div>
  );
};

// class App extends Component {
//   state = { isShowModal: false, searchText: '' };

//   handleSearch = searchText => {
//     this.setState({ searchText });
//   };

//   toggleModal = () => {
//     this.setState(({ isShowModal }) => ({
//       isShowModal: !isShowModal,
//     }));
//   };

//   createUser = data => {
//     const newUser = {
//       ...data,
//       id: nanoid(),
//       role: 'customer',
//     };
//     console.table(newUser);
//   };

//   render() {
//     return (
//       <div className="container">
//         <Header open={this.toggleModal} />
//         <Search handleSearch={this.handleSearch} />
//         <ContentInfo searchText={this.state.searchText} />
//         <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
//         {this.state.isShowModal && (
//           <Modal close={this.toggleModal}>
//             <FormLogin close={this.toggleModal} createUser={this.createUser} />
//           </Modal>
//         )}
//         <ToDoList />
//         <Counter initialValue={100} />
//         <Card />
//         <SignUpForm onSubmit={values => console.table(values)} />
//       </div>
//     );
//   }
// }

export default App;
