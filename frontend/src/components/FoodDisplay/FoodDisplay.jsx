import React, { useContext } from 'react'; // Import React and useContext hook
import './FoodDisplay.css'; // Import the CSS file for styling
import { StoreContext } from '../context/StoreContext'; // Import StoreContext
import FoodItem from '../FoodItem/FoodItem'; // Import FoodItem component

// Define the FoodDisplay component, which takes in category as a prop
const FoodDisplay = ({category}) => {

    // Destructure food_list from the StoreContext
    const {food_list} = useContext(StoreContext);

    // Return the JSX for the FoodDisplay component
    return (
        <div className='food-arrange'>
            <h2>Top Dishes Near You</h2> {/* Heading */}
        <div className='food-display' id='food-display'> {/* Container for the food display */}
            <div className="food-display-list"> {/* Container for the list of food items */}
                {food_list.map((item, index) => { // Iterate over food_list to create FoodItem components
                if (category==="All" || category==item.category) {
                    return <FoodItem 
                        key={index} // Unique key for each food item
                        id={item._id} // Pass id to FoodItem
                        name={item.name} // Pass name to FoodItem
                        description={item.description} // Pass description to FoodItem
                        price={item.price} // Pass price to FoodItem
                        image={item.image} // Pass image to FoodItem
                        rating={item.rating}
                    />
                }
                    
                })}
            </div>
            </div>
        </div>
    );
};

export default FoodDisplay; // Export the FoodDisplay component
