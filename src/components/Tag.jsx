import React, { useState } from 'react';

const Tag = ({ name, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    onClick();
    setIsActive((state) => !state);
  };

  return (
    <span
      className={`badge rounded-pill ${
        isActive ? 'bg-secondary' : 'bg-light'
      } me-2`}
      style={{ cursor: 'pointer' }}
      onClick={handleOnClick}
    >
      {name}
    </span>
  );
};

export default Tag;
