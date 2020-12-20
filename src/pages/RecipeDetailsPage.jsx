import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';

import recipes from '../data/recipes.json';

const RecipeDetailsPage = () => {
  const { id } = useParams();

  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="container">
        <p>No recipe found.</p>
        <Link to="/">Back</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>
        {recipe.name}{' '}
        <a href={recipe.link} target="_blank" style={{ fontSize: '0.8em' }}>
          <FiExternalLink />
        </a>
      </h2>
      <p className="text-muted">{recipe.description}</p>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {recipe.name}
          </li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-12 col-md-4">
          <h4>Ingredients</h4>
          {Object.keys(recipe.ingredients).map((key) => (
            <React.Fragment key={key}>
              <h5>{key}</h5>
              <div className={key.length !== 0 ? 'ps-4' : ''}>
                {recipe.ingredients[key].map((ingredients, i) => (
                  <p className="mb-1" key={`${key}-${i}`}>
                    {ingredients.qty} {ingredients.unit} of {ingredients.name}
                  </p>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="col-12 col-md-8">
          <h4>Instructions</h4>
          {Object.keys(recipe.instructions).map((key) => (
            <React.Fragment key={key}>
              {key.length !== 0 && <h5>{key}</h5>}
              {recipe.instructions[key].map((instruction, i) => (
                <p key={`${key}-${i}`}>
                  <span className="badge bg-primary">{i + 1}</span>
                  <span className="ps-3">{instruction}</span>
                </p>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RecipeDetailsPage;
