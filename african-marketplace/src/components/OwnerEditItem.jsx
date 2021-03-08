import axios from "axios";
import React, { useEffect, useState } from "react";

const OwnerEditItem = () => {
  const [editForm, setEditForm] = useState({
    item_name: "",
    item_price: "",
    item_location: "",
    item_Description: "",
  });

  useEffect(() => {
    axios
      .get(
        `https://sheet.best/api/sheets/d5e6d2d3-eae1-4ee1-a059-b703d114d9b0/item_id/1`
      )
      .then((res) => {
        console.log(res);
        setEditForm(res.data[0]);
      });
  }, []);

  const changeHandler = (e) => {
    const newFormData = {
        ...editForm,
        [e.target.name]: e.target.value,
    }

    setEditForm(newFormData);
  }

  const submitHandler = e => {
      e.preventDefault();

  }

  return (
    <form action="" className="form">
      <h3>Edit Item</h3>
      <input type="text" name="itemName" value={editForm.item_name} onChange ={changeHandler} />
      <input type="text" name="itemPrice" value={editForm.item_price} onChange ={changeHandler}/>
      <select name="itemLocation" onChange ={changeHandler}>
        <option value="" disabled selected>
          Select Location
        </option>
        <option value="Botswana">Botswana</option>
        <option value="Kenya">Kenya</option>
        <option value="Sudan">Sudan</option>
      </select>
      <textarea
        name="itemDescription"
        cols="30"
        rows="10"
        value={editForm.item_Description}
        onChange ={changeHandler}
      ></textarea>
      <button>Update</button>
    </form>
  );
};

export default OwnerEditItem;
