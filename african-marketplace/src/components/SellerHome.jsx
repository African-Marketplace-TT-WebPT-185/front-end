import React, { Component } from "react";
import { Link } from "react-router-dom";
import SellerItem from "./SellerItem";
import profileIcon from "../assets/profile-icon.png";
import { Button } from "reactstrap";

const dummyData = {
  sellerrName: "Some name",
  sellerLocation: "Some location",
  sellerItems: [
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


//!  Main Function and components renamed, state objects still need attention  //


class SellerHome extends Component {

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
                    <SellerItem itemDetails = {item}/>  
              )
          })}
        </section>
      </div>
    );
  }
}

export default SellerHome;
