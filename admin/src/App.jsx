import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route} from 'react-router-dom'
import Add from "./pages/Add/Add.jsx"; // Ensure this import exists
import List from "./pages/List/List.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "https://foodfresh-backend.onrender.com";

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <Routes>
        <Route path='/add' element={<Add url={url} />}/>
        <Route path='/list' element={<List url={url} />}/>
        <Route path='/orders' element={<Orders url={url} />}/>
      </Routes>
    </div>
  )
}

export default App
