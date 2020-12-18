import React from 'react';

const IngredientGroup = ({ name, values }) => {
  return (
    <div>
      <h3>{name}</h3>
      {Object.keys(values).map((key) => (
        <div className="" key={key}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label h3" for="flexCheckDefault">
              {key}
            </label>
          </div>
          {values[key].map((ingredient, i) => (
            <p key={i}>
              {ingredient.qty} {ingredient.unit} for {ingredient.recipe}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default IngredientGroup;
