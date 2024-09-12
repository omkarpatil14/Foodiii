import React, { useState, useEffect } from 'react';
import './Orders.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../../../../frontend/src/assets/frontend_assets/assets';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("Error fetching orders");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url+"/api/order/status",{orderId, status:event.target.value})
    if (response.data.success) {
      await fetchAllOrders(); 
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [url]);

  return (
    <div className='order add'>
      <div className="order-list space-y-6">
  {orders.map((order, index) => (
    <div
      key={index}
      className="order-item bg-white rounded-lg p-6 shadow-md flex items-start justify-between space-x-4"
    >
      <img
        src={assets.parcel_icon}
        alt="Parcel Icon"
        className="w-12 h-12 object-cover rounded-full"
      />
      <div className="flex-1">
        <p className="order-item-food font-medium text-gray-800">
          {order.items.map((item, index) => (
            <span key={index} className="text-sm text-gray-700">
              {item.name} x {item.quantity}
              {index < order.items.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
        <p className="order-item-name text-lg font-semibold text-indigo-600 mt-2">
          {order.address.firstName + " " + order.address.lastName}
        </p>
        <div className="order-item-address text-sm text-gray-500 mt-1">
          <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + " - " + order.address.pincode}</p>
        </div>
        <p className="order-item-phone text-sm text-gray-500 mt-1">
          {order.address.phone}
        </p>
      </div>
      <div className="flex flex-col items-end space-y-2">
        <p className="text-sm text-gray-600">Items: {order.items.length}</p>
        <p className="text-sm font-bold text-green-500">₹{order.amount}</p>
        <select
          onChange={(event) => statusHandler(event, order._id)}
          value={order.status}
          className="mt-2 bg-gray-100 border border-gray-300 text-sm text-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="Food Processing">Food Processing</option>
          <option value="Out For Delivery">Out For Delivery</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Orders;
