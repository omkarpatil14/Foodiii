import React, { useContext, useState } from "react"; // Import React and useState hook
import "./Navbar.css"; // Import the CSS file for styling
import { assets } from "../../assets/frontend_assets/assets"; // Import assets
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

// Define the Navbar component
const Navbar = ({ setShowLogin }) => {
  // Initialize the menu state with "home"
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("")
    navigate("/")
  }

  // Return the JSX for the Navbar component
  return (
    <div className="navbar">
      {" "}
      {/* Container for the navbar */}
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>{" "}
      {/* Logo image */}
      <ul className="navbar-menu">
        {" "}
        {/* Container for the navbar menu */}
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>{" "}
        {/* Home menu item */}
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          <a href="#explore-menu">Menu</a>
        </li>
        {/* Menu menu item */}
        {/* <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </li>{" "} */}
        {/* Mobile App menu item */}
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          <a href="#container">Contact Us</a>
        </li>{" "}
        {/* Contact Us menu item */}
      </ul>
      <div className="navbar-right">
        {" "}
        {/* Container for the right side of the navbar */}
         
        <div className="navbar-search-icon">
          {" "}
          {/* Container for the basket icon */}
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>{" "}
          {/* Basket icon */}
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>{" "}
          {/* Notification dot */}
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}{" "}
        {/* Sign In button */}
      </div>
    </div>
    
   

    
  );
};

export default Navbar; // Export the Navbar component
