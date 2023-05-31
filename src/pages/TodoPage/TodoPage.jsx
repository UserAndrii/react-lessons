import React from 'react';
import ToDoList from '../../components/ToDoList/ToDoList';
import { Outlet } from 'react-router-dom';

const TodoPage = () => {
  return (
    <>
      <ToDoList />
      <Outlet />
    </>
  );
};

export default TodoPage;
