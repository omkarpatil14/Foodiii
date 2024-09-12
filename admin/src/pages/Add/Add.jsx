import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/admin_assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  // State to handle image upload
  const [image, setImage] = useState(false);

  // State to handle form data
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    rating: "",
  });

  // Handler for input changes
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("rating", data.rating);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "",
        rating: "",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  // Effect to log data changes
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    // <div className="add">
    //   <form action="" className="flex-col" onSubmit={onSubmitHandler}>
    //     <div className="add-img-upload flex-col">
    //       <p>Upload Image</p>
    //       <label htmlFor="image">
    //         <img
    //           src={image ? URL.createObjectURL(image) : assets.upload_area}
    //           alt=""
    //         />
    //       </label>
    //       <input
    //         onChange={(e) => setImage(e.target.files[0])}
    //         type="file"
    //         id="image"
    //         hidden
    //         required
    //       />
    //     </div>
    //     <div className="add-product-name flex-col">
    //       <p>Product Name</p>
    //       <input
    //         onChange={onChangeHandler}
    //         value={data.name}
    //         type="text"
    //         name="name"
    //         placeholder="Product name"
    //       />
    //     </div>
    //     <div className="add-product-description flex-col">
    //       <p>Product Description</p>
    //       <textarea
    //         onChange={onChangeHandler}
    //         value={data.description}
    //         name="description"
    //         id=""
    //         rows="6"
    //         placeholder="Write content here"
    //       />
    //     </div>
    //     <div className="add-category-price">
    //       <div className="add-category flex-col">
    //         <p>Product Category</p>
    //         <select
    //           onChange={onChangeHandler}
    //           value={data.category}
    //           name="category"
    //         >
    //           <option value="" disabled>
    //             Select a category
    //           </option>
    //           <option value="Salad">Salad</option>
    //           <option value="Rolls">Rolls</option>
    //           <option value="Deserts">Deserts</option>
    //           <option value="Sandwich">Sandwich</option>
    //           <option value="Cake">Cake</option>
    //           <option value="Pure Veg">Pure Veg</option>
    //           <option value="Pasta">Pasta</option>
    //           <option value="Noodles">Noodles</option>
    //         </select>
    //       </div>
    //       <div className="add-rating flex-col">
    //         <p>Product Rating</p>
    //         <input
    //           onChange={onChangeHandler}
    //           value={data.rating}
    //           type="number"
    //           name="rating"
    //           placeholder="4.5 out of 5"
    //         />
    //       </div>
    //       <div className="add-price flex-col">
    //         <p>Product Price</p>
    //         <input
    //           onChange={onChangeHandler}
    //           value={data.price}
    //           type="number"
    //           name="price"
    //           placeholder="Rs.200"
    //         />
    //       </div>
    //     </div>

    //     <div className="add-btn-container flex-col">
    //       <button type="submit" className="add-btn">
    //         ADD
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <>
   <div className="max-w-lg mx-auto mt-8 bg-gradient-to-br from-white to-gray-100 p-6 rounded-lg shadow-md">
  <form action="" className="space-y-6" onSubmit={onSubmitHandler}>
    <div className="flex flex-col items-center space-y-2">
      <p className="text-base font-semibold text-gray-700">Upload Product Image</p>
      <label htmlFor="image" className="cursor-pointer transition-transform hover:scale-105">
        <img
          src={image ? URL.createObjectURL(image) : assets.upload_area}
          alt="Upload"
          className="w-24 h-24 object-cover rounded-full border-2 border-dashed border-indigo-300 hover:border-indigo-500 transition-colors"
        />
      </label>
      <input
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        id="image"
        hidden
        required
      />
    </div>

    <div className="flex flex-col">
      <p className="text-sm font-semibold text-gray-700">Product Name</p>
      <input
        onChange={onChangeHandler}
        value={data.name}
        type="text"
        name="name"
        placeholder="Enter product name"
        className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
      />
    </div>

    <div className="flex flex-col">
      <p className="text-sm font-semibold text-gray-700">Product Description</p>
      <textarea
        onChange={onChangeHandler}
        value={data.description}
        name="description"
        rows="4"
        placeholder="Enter product description"
        className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
      />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-gray-700">Product Category</p>
        <select
          onChange={onChangeHandler}
          value={data.category}
          name="category"
          className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="Salad">Salad</option>
          <option value="Rolls">Rolls</option>
          <option value="Deserts">Deserts</option>
          <option value="Sandwich">Sandwich</option>
          <option value="Cake">Cake</option>
          <option value="Pure Veg">Pure Veg</option>
          <option value="Pasta">Pasta</option>
          <option value="Noodles">Noodles</option>
        </select>
      </div>

      <div className="flex flex-col">
        <p className="text-sm font-semibold text-gray-700">Product Rating</p>
        <input
          onChange={onChangeHandler}
          value={data.rating}
          type="number"
          name="rating"
          placeholder="e.g., 4.5"
          className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
        />
      </div>

      <div className="flex flex-col">
        <p className="text-sm font-semibold text-gray-700">Product Price</p>
        <input
          onChange={onChangeHandler}
          value={data.price}
          type="number"
          name="price"
          placeholder="e.g., Rs.200"
          className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
        />
      </div>
    </div>

    <div className="flex justify-center">
      <button
        type="submit"
        className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
      >
        ADD PRODUCT
      </button>
    </div>
  </form>
</div>
<br></br>


    </>
  );
};

export default Add;
