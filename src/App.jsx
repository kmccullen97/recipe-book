import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import RecipesPage from './pages/RecipesPage';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import { MealsProvider } from './context/MealsContext';
import './App.scss';

const App = () => (
  <MealsProvider>
    <Router>
      <Route
        exact
        path={process.env.PUBLIC_URL + '/'}
        component={RecipesPage}
      />
      <Route
        path={process.env.PUBLIC_URL + '/details/:id'}
        component={RecipeDetailsPage}
      />
    </Router>
  </MealsProvider>
);

export default App;
