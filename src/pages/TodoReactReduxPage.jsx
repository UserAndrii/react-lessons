import { AppBar } from 'components/ReactReduxComponent/AppBar/AppBar';
import { TaskForm } from 'components/ReactReduxComponent/TaskForm/TaskForm';
import { TaskList } from 'components/ReactReduxComponent/TaskList/TaskList';

const TodoReactReduxPage = () => {
  return (
    <>
      <AppBar />
      <TaskForm />
      <TaskList />
    </>
  );
};

export default TodoReactReduxPage;
