import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const DropFilter = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const categories = ['All Products', 'Wire', 'Pipe', 'Switch', 'Drill', 'Fan','Heater','Light','Other'];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All Products') {
      navigate('/pro');
    } else {
      navigate(`/search/${category}`);
    }
  };

  return (
    <Dropdown onSelect={handleCategoryChange}>
      <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
        {selectedCategory}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {categories.map((category) => (
          <Dropdown.Item key={category} eventKey={category}>
            {category}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropFilter;

