import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Tag from '../components/Tag';
import MealsModal from '../components/MealsModal';
import { MealsContext } from '../context/MealsContext';
import recipes from '../data/recipes.json';

const tags = recipes
  .map((recipe) => recipe.tags)
  .flat(1)
  .filter((v, i, a) => a.indexOf(v) === i);

const RecipesPage = () => {
  const { addMeal, removeMeal, containsRecipe } = useContext(MealsContext);
  const [tagFilters, setTagFilters] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleToggleTagFilter = (name) => {
    setTagFilters((state) => {
      if (state.includes(name)) {
        return state.filter((tag) => tag !== name);
      } else {
        return [...state, name];
      }
    });
  };

  const displayRecipes = recipes
    .filter((recipe) => {
      let show = true;
      tagFilters.forEach((tag) => {
        if (!recipe.tags.includes(tag)) {
          show = false;
        }
      });

      return show;
    })
    .filter((recipe) => {
      if (recipe.name.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      return false;
    });
  return (
    <>
      <MealsModal />
      <div className="container my-3 flex-fill d-flex flex-column">
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="pb-2">
          {tags.map((tag) => (
            <Tag
              name={tag}
              onClick={() => handleToggleTagFilter(tag)}
              key={tag}
            />
          ))}
        </div>
        <div className="row overflow-auto">
          {displayRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3"
            >
              <div className="card h-100">
                <img
                  src={`/recipe-book/images/${recipe.thumbnail}`}
                  className="card-img-top"
                  alt={recipe.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    <Link to={`/details/${recipe.id}`}>{recipe.name}</Link>
                  </h5>
                  <div>
                    {recipe.tags.map((tag) => (
                      <span
                        className="badge rounded -pill bg-light me-2"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted flex-fill">{recipe.description}</p>
                  <div>
                    {!containsRecipe(recipe.id) ? (
                      <button
                        className="btn btn-primary"
                        onClick={() => addMeal(recipe)}
                      >
                        Add
                      </button>
                    ) : (
                      <button
                        className="btn btn-light"
                        onClick={() => removeMeal(recipe.id)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecipesPage;
