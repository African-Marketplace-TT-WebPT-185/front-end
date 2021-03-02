import React from "react";

import editIcon from "../assets/edit-icon.png";
import deleteIcon from "../assets/delete-icon.png";
import profileIcon from "../assets/profile-icon.png";
import { Link } from "react-router-dom";


const Item = (props) => {

  
  return (
    <div className="item">
      <div classname="item-top">
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
        <img src={editIcon} alt="edit icon" className = "icon" />
        <img src={deleteIcon} alt="delete icon" className = 'icon'/> 
      </div>
    </div>
  );
};

export default Item;
