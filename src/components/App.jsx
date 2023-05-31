import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NewsPage from '../pages/NewsPage';
import Layout from './Layout/Layout';

const ProductsDetails = lazy(() => import('../pages/products/ProductsDetails'));
const ProductsPage = lazy(() => import('../pages/products/ProductsPage'));
const TodoDetails = lazy(() => import('../pages/TodoPage/TodoDetails'));
const TodoPage = lazy(() => import('../pages/TodoPage/TodoPage'));
const TodoReactReduxPage = lazy(() => import('../pages/TodoReactReduxPage'));
const PlayerPage = lazy(() => import('../pages/PlayerPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="todo-react-redux" element={<TodoReactReduxPage />} />
        <Route path="todo/:todoId" element={<TodoDetails />} />
        <Route path="products" element={<ProductsPage />} />
        <Route
          path="products/:id"
          element={
            <Suspense>
              <ProductsDetails />
            </Suspense>
          }
        />
        <Route path="player" element={<PlayerPage />} />
      </Route>
    </Routes>
  );
};

export default App;
