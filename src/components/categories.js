import React from 'react';
import { useSelector } from 'react-redux';

const Category = () => {
  const category = useSelector((state) => state.categories);
  return (
    <div>
      <h2>Category</h2>
      <p>{category}</p>
    </div>
  );
};

export default Category;
