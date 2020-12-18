import React, { createContext, useState } from 'react';

import common from '../data/common.json';

export const MealsContext = createContext();

const getIsIngredientCommon = (name) => {
  for (let i = 0; i < common.length; i++) {
    if (name.toLowerCase().includes(common[i].toLowerCase())) {
      return true;
    }
  }
  return false;
};

export const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);

  const addMeal = (recipe) => {
    setMeals((state) => [...state, recipe]);
  };

  const removeMeal = (recipeId) => {
    setMeals((state) => state.filter((recipe) => recipe.id !== recipeId));
  };

  const containsRecipe = (recipeId) => {
    for (let i = 0; i < meals.length; i++) {
      if (recipeId == meals[i].id) {
        return true;
      }
    }

    return false;
  };

  const getIngredients = () => {
    let ingredients = {
      common: {},
      uncommon: {},
    };
    meals.forEach((recipe) => {
      Object.keys(recipe.ingredients).forEach((section) => {
        recipe.ingredients[section].forEach((ingredient) => {
          const name = ingredient.name.replace(/\(.*\)/, '').trim();
          let location = ingredients.uncommon;
          if (getIsIngredientCommon(name)) {
            location = ingredients.common;
          }
          if (location[name] !== undefined) {
            location[name] = [
              ...location[name],
              { ...ingredient, recipe: recipe.name },
            ];
          } else {
            location[name] = [{ ...ingredient, recipe: recipe.name }];
          }
        });
      });
    });

    return ingredients;
  };

  return (
    <MealsContext.Provider
      value={{ meals, addMeal, removeMeal, containsRecipe, getIngredients }}
    >
      {children}
    </MealsContext.Provider>
  );
};
