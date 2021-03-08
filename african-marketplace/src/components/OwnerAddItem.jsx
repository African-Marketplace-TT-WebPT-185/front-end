import axios from "axios";
import React, { useState } from "react";

const OwnerAddItem = () => {
  const [formData, setFormData] = useState({
    item_name: "",
    item_price: "",
    item_location: "",
    item_Description: "",
    item_id: Date.now(),
    user_id: 1,
  });

  const changeHandler = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
   axios.post("https://sheet.best/api/sheets/d5e6d2d3-eae1-4ee1-a059-b703d114d9b0",formData)
      .then(res => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form action="" className="form" onSubmit={submitHandler}>
      <h3>Create new item</h3>
      <input
        type="text"
        name="item_name"
        placeholder={`Add item's name`}
        onChange={changeHandler}
        value={formData.item_name}
      />
      <input
        type="text"
        name="item_price"
        placeholder={`Add item's price`}
        onChange={changeHandler}
        value={formData.item_price}
      />
      <select name="item_location" onChange={changeHandler}>
        <option value="" disabled selected>
          Select location
        </option>
        <option value="Botswana">Botswana</option>
        <option value="Kenya">Kenya</option>
        <option value="Sudan">Sudan</option>
      </select>
      <textarea
        name="item_Description"
        placeholder={`Add item's description`}
        cols="30"
        rows="10"
        onChange={changeHandler}
        value={formData.item_Description}
      />
      <button>Create</button>
    </form>
  );
};

export default OwnerAddItem;
