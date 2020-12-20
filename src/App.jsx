import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import RecipesPage from './pages/RecipesPage';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import { MealsProvider } from './context/MealsContext';
import './App.scss';

const App = () => (
  <MealsProvider>
    <Router>
      <Route exact path="/" component={RecipesPage} />
      <Route path="/details/:id" component={RecipeDetailsPage} />
    </Router>
  </MealsProvider>
);

export default App;
