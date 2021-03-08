import React, { useState } from "react";

import editIcon from "../assets/edit-icon.png";
import deleteIcon from "../assets/delete-icon.png";
import profileIcon from "../assets/profile-icon.png";
import { Link, useHistory } from "react-router-dom";



const OwnerItem = (props) => {


  const url = useHistory();
  
  const goItemDetails = () => {
    url.push(`/item/${props.itemDetails.itemId}/details`)
  }

  const goEditItem = () => {
    url.push(`/item/${props.itemDetails.itemId}/edit`)
  }

  const deleteItem = () => {

  }

  return (
      <div className="item" >
        <div classname="item-top" onClick={goItemDetails}>
          <img
            className="item-img"
            src={props.itemDetails.itemImgUrl}
            alt="item image"
          />
          <h3>{props.itemDetails.itemName}</h3>
          <h5>{props.itemDetails.itemLocation}</h5>
          <h5>${props.itemDetails.itemPrice}</h5>
        </div>
        <div className="icons">
          <img src={editIcon} alt="edit icon" className="icon" onClick = {goEditItem}/>
          <img src={deleteIcon} alt="delete icon" className="icon" onClick = {deleteItem}/>
        </div>
      </div>
  );
};

export default OwnerItem;
