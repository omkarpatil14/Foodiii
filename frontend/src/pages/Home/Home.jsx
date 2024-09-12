import React, { useState } from 'react'; // Import React and useState hook
import './Home.css'; // Import the CSS file for styling
import Header from '../../components/Header/Header'; // Import the Header component
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'; // Import the ExploreMenu component
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay' // Import the FoodDisplay component

// Define the Home component
const Home = () => {

  // Initialize the category state with "All"
  const [category, setCategory] = useState("All");

  // Return the JSX for the Home component
  return (
    <div>
        <Header /> {/* Header component */}
        <div className="arrange">
        <ExploreMenu category={category} setCategory={setCategory} /> {/* ExploreMenu component with category and setCategory props */}
        <FoodDisplay category={category} /> {/* FoodDisplay component with category prop */}
        </div>
    </div>
  );
}

export default Home; // Export the Home component
