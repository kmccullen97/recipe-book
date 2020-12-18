import React, { useContext } from 'react';

import IngredientGroup from './IngredientGroup';
import { MealsContext } from '../context/MealsContext';

const MealsAndIngredients = () => {
  const { meals, getIngredients } = useContext(MealsContext);

  const ingredients = getIngredients();
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Meals
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Ingredients
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          {meals.map((recipe) => (
            <div className="d-flex mb-3" key={recipe.id}>
              <div className="pe-2">
                <img
                  src={`/recipe-book/images/${recipe.thumbnail}`}
                  alt={recipe.name}
                  style={{ width: 100 }}
                />
              </div>
              <div className="flex-fill">
                <h5>{recipe.name}</h5>
                <p className="text-muted">{recipe.description}</p>
              </div>
            </div>
          ))}
          {meals.length === 0 && (
            <p className="text-muted">No meals added yet</p>
          )}
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="row">
            <div className="col-12 col-md-6">
              <IngredientGroup name="Uncommon" values={ingredients.uncommon} />
            </div>
            <div className="col-12 col-md-6">
              <IngredientGroup name="Common" values={ingredients.common} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealsAndIngredients;
