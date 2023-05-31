import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import NewsPage from '../pages/NewsPage';
import TodoPage from '../pages/TodoPage/TodoPage';
import Layout from './Layout/Layout';
import TodoDetails from '../pages/TodoPage/TodoDetails';
import ProductsPage from '../pages/products/ProductsPage';
import ProductsDetails from '../pages/products/ProductsDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        {/* <Route path='todo' element={<TodoPage />} />
				<Route path='todo/:todoId' element={<TodoDetails />} /> */}
        <Route path="todo" element={<TodoPage />}>
          <Route path=":todoId" element={<TodoDetails />} />
        </Route>
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductsDetails />} />
      </Route>
    </Routes>
  );
};

// const App = () => {
//   const [isShowModal, setIsShowModal] = useState(false);
//   const [searchText, setSearchText] = useState('');

//   const toggleModal = () => setIsShowModal(prev => !prev);

//   const handleSearch = searchText => setSearchText(searchText);

//   const createUser = data => {
//     const newUser = {
//       ...data,
//       id: nanoid(),
//       role: 'customer',
//     };
//     console.table(newUser);
//   };

//   return (
//     <div className="container">
//       <Header open={toggleModal} />
//       <TestUseMemo />
//       <Search handleSearch={handleSearch} />
//       <ContentInfo searchText={searchText} />
//       <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
//       {isShowModal && (
//         <Modal close={toggleModal}>
//           <FormLogin close={toggleModal} createUser={createUser} />
//         </Modal>
//       )}
//       <ToDoList />
//       <Counter initialValue={100} />
//       <Card />
//       <SignUpForm onSubmit={values => console.table(values)} />
//     </div>
//   );
// };

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
