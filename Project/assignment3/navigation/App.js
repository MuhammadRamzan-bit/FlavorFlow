import React, { useState } from 'react';
import HomeScreen from './Screens/HomeScreen';
import AddRecipeScreen from './Screens/AddRecipeScreen';
import ExploreScreen from './Screens/ExploreScreen';

export default function App() {
  const [screen, setScreen] = useState("Login");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const navigate = (page, params = {}) => {
    if (params.recipe) {
      setSelectedRecipe(params.recipe);
    }
    setScreen(page);
  };

  return (
    <>
      
      {screen === "Home" && <HomeScreen onNavigate={navigate} />}
      {screen === "AddRecipe" && <AddRecipeScreen onNavigate={navigate} />}
      {screen === "Explore" && <ExploreScreen onNavigate={navigate} />}
    </>
  );
}