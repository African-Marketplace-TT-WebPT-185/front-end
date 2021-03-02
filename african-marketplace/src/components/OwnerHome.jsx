import React, { Component } from "react";
import { Link } from "react-router-dom";
import OwnerItem from "./OwnerItem";
import profileIcon from "../assets/profile-icon.png";
import { Button } from "reactstrap";

const dummyData = {
  ownerName: "Some name",
  ownerLocation: "Some location",
  ownerItems: [
    {
      itemName: "Beans",
      itemId: 1,
      itemPrice: "5.99",
      itemLocation: "Kenya",
      itemImgUrl:
        "https://food.unl.edu/newsletters/images/assorted-dry-beans.png",
    },
    {
      itemName: "Tomatoes",
      itemId: 2,
      itemPrice: "2.99",
      itemLocation: "Zimbabwe",
      itemImgUrl:
        "https://cdn.shopify.com/s/files/1/1698/1675/products/Tomato_Thessaloniki.jpg?v=1537070112",
    },
  ],
};


class OwnerHome extends Component {

 


  render() {
    return (
      <div className="owner">
        <Button color="primary" size="lg">
          Log out
        </Button>
        <section className=" owner-top">
          <img src={profileIcon} alt="profile photo" className="user-img" />
          <h2>Welcome, {dummyData.ownerName}</h2>
          <h3>{dummyData.ownerLocation}</h3>
        </section>
        <section className="owner-bottom">
          {dummyData.ownerItems.map(item => {
              return (
                    <OwnerItem itemDetails = {item}/>  
              )
          })}
        </section>
      </div>
    );
  }
}

export default OwnerHome;
