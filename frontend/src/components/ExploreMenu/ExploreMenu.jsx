import React from 'react'; // Import React
import './ExploreMenu.css'; // Import the CSS file for styling
import { menu_list } from '../../assets/frontend_assets/assets'; // Import menu_list from assets

// Define the ExploreMenu component, which takes in category and setCategory as props
const ExploreMenu = ({category, setCategory}) => {
  return (
    
    <div className='explore-menu' id='explore-menu'> {/* Container for the explore menu */}
        <h1>Craving something special?</h1> {/* Heading */}
        <p className='explore-menu-text'> Explore our diverse menu!</p> {/* Subheading */}
        <div className="explore-menu-list"> {/* Container for the menu list */}
            {menu_list.map((item, index) => { // Iterate over menu_list to create menu items
                return (
                    <div 
                    key={index} // Unique key for each menu item
                    className="explore-menu-list-item" // Class name for menu item
                    onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}> {/* Update category on click */}
                        <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" /> {/* Menu item image */}
                        <p>{item.menu_name}</p> {/* Menu item name */}
                    </div>
                );
            })}
        </div>
        <hr /> {/* Horizontal line */}
    </div>
  );
};

export default ExploreMenu; // Export the ExploreMenu component
