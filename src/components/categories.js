import React from 'react';
import { useSelector } from 'react-redux';

const Category = () => {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <div>
      <h2>Category</h2>
      <button type="button">check status</button>
      {categories.map((category) => (
        <p key={category.item_id}>{category.name}</p>
      ))}
    </div>
  );
};

export default Category;
