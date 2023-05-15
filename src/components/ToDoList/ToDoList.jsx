import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import ToDo from './ToDo/ToDo';
import ToDoEditor from './ToDoEditor/ToDoEditor';
import ToDoFiter from './ToDoFilter/ToDoFilter';
import todo from '../../data/todo.json';

import React from 'react';

const ToDoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // console.log('Це виконується тільки вперший раз');
    const parsedTodos = JSON.parse(localStorage.getItem('todos'));

    if (parsedTodos !== null) {
      setTodoList(parsedTodos);
      return;
    }
    setTodoList(todo);
  }, []);

  useEffect(() => {
    // console.log('Це виконується вдруге');
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = title => {
    if (title.length <= 0) {
      return Notiflix.Notify.warning(
        'The task cannot be created without a name, enter a name, please!'
      );
    }

    const todo = {
      id: nanoid(),
      title,
      completed: false,
    };

    setTodoList(prev => [todo, ...prev]);
  };

  const handleCheck = id => {
    setTodoList(prev =>
      prev.map(el => (el.id === id ? { ...el, completed: !el.completed } : el))
    );
  };

  const deleteTodo = todoId => {
    setTodoList(prevState => prevState.filter(todo => todo.id !== todoId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleTodos = () => {
    return todoList.filter(todo =>
      todo.title.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const calculateCompletedTodos = () => {
    return todoList.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  const totalTodoCount = todoList.length;
  const completedTodoCount = calculateCompletedTodos();
  const visibleTodos = getVisibleTodos();

  return (
    <>
      <h1 style={{ marginTop: 30 }}>My To-Do list</h1>

      <ToDoEditor onSubmit={addTodo} />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <b>Загальна к-сть справ: {totalTodoCount}</b>
        <b>К-сть виконаних справ: {completedTodoCount}</b>
      </div>

      <ToDoFiter value={filter} onChange={changeFilter} />

      <ul className="list-group list-group-flush">
        {visibleTodos.map(todo => (
          <ToDo
            check={handleCheck}
            key={todo.id}
            todo={todo}
            onDeleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default ToDoList;

// class ToDoList extends Component {
//   state = { todoList: [], filter: '' };

//   componentDidMount() {
//     const todos = localStorage.getItem('todos');
//     const parsedTodos = JSON.parse(todos);

//     if (parsedTodos !== null) {
//       this.setState({ todoList: parsedTodos });
//       return;
//     }

//     this.setState({ todoList: todo });
//   }

//   componentDidUpdate(_, prevState) {
//     const nextTodos = this.state.todoList;
//     const prevTodos = prevState.todoList;

//     if (nextTodos !== prevTodos) {
//       localStorage.setItem('todos', JSON.stringify(nextTodos));
//     }
//   }

//   addTodo = title => {
//     if (title.length <= 0) {
//       return Notiflix.Notify.warning(
//         'The task cannot be created without a name, enter a name, please!'
//       );
//     }

//     const todo = {
//       id: nanoid(),
//       title,
//       completed: false,
//     };

//     this.setState(({ todoList }) => ({
//       todoList: [todo, ...todoList],
//     }));
//   };

//   handleCheck = id => {
//     this.setState(prev => {
//       return {
//         todoList: prev.todoList.map(el =>
//           el.id === id ? { ...el, completed: !el.completed } : el
//         ),
//       };
//     });
//   };

//   deleteTodo = todoId => {
//     this.setState(prevState => ({
//       todoList: prevState.todoList.filter(todo => todo.id !== todoId),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleTodos = () => {
//     const { filter, todoList } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return todoList.filter(todo =>
//       todo.title.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   calculateCompletedTodos = () => {
//     const { todoList } = this.state;

//     return todoList.reduce(
//       (total, todo) => (todo.completed ? total + 1 : total),
//       0
//     );
//   };

//   render() {
//     const { filter, todoList } = this.state;
//     const totalTodoCount = todoList.length;
//     const completedTodoCount = this.calculateCompletedTodos();
//     const visibleTodos = this.getVisibleTodos();

//     return (
//       <>
//         <h1>My To-Do list</h1>

//         <ToDoEditor onSubmit={this.addTodo} />

//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <b>Загальна к-сть справ: {totalTodoCount}</b>
//           <b>К-сть виконаних справ: {completedTodoCount}</b>
//         </div>

//         <ToDoFiter value={filter} onChange={this.changeFilter} />

//         <ul className="list-group list-group-flush">
//           {visibleTodos.map(todo => (
//             <ToDo
//               check={this.handleCheck}
//               key={todo.id}
//               todo={todo}
//               onDeleteTodo={this.deleteTodo}
//             />
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// export default ToDoList;
