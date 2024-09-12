import React, { useEffect, useState } from 'react'
import './List.css'
import { toast } from 'react-toastify';
import axios from 'axios';

const List = ({url}) => {
  const [list, setList] = useState([]);

  const fetchList = async ()  => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response.data);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Failed to fetch list");
      console.error(error);
    }
  }
 
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else {
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item) => (
          <div className="list-table-format" key={item._id}>
            <img src={`${url}/images/${item.image}`} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>₹{item.price}</p>
            <p onClick={() => removeFood(item._id)} className='cursor font-bold'>-Remove Item-</p>
          </div>
        ))}
      </div>
      <br></br>
    </div>
  )
}

export default List;
