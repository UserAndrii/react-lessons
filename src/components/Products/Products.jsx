import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getProducts } from '../../API/getProducts';
import Loader from '../ContentInfo/Loader';

const Products = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getProducts();
        console.log('data :>> ', data);
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.log('error :>> ', error);
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <ul>
        {products &&
          products.map(({ id, title }) => (
            <li key={id}>
              <Link to={id.toString()}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Products;
