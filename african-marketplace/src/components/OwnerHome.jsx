import React, { Component } from "react";
import {Link, Route } from "react-router-dom";
import OwnerItem from "./OwnerItem";
import profileIcon from "../assets/profile-icon.png";
import { Button } from "reactstrap";

const dummyData = {
  userName: "Some name",
  userLocation: "Some location",
  userRole: "owner",
  userId: 1,
  userItems: [
    {
      itemName: "Beans",
      itemId: 1,
      itemPrice: "5.99",
      itemLocation: "Kenya",
      itemImgUrl:
        "https://food.unl.edu/newsletters/images/assorted-dry-beans.png",
      itemDescription: "",
    },
    {
      itemName: "Tomatoes",
      itemId: 2,
      itemPrice: "2.99",
      itemLocation: "Zimbabwe",
      itemImgUrl:
        "https://cdn.shopify.com/s/files/1/1698/1675/products/Tomato_Thessaloniki.jpg?v=1537070112",
      itemDescription: "",
    },
  ],
};

class OwnerHome extends Component {

  logOut = () => {
      this.props.history.push('/')
  }

  render() {
    return (
      <div className="owner">
        <Button color="primary" size="lg" onClick={this.logOut}>
          Log out
        </Button>
        
        <section className=" owner-top">
          <img src={profileIcon} alt="profile photo" className="user-img" />
          <h2>Welcome, {dummyData.userName}</h2>
          <h3>{dummyData.userLocation}</h3>
        </section>
        <section className="owner-bottom">
          {dummyData.userItems.map((item) => {
            return <OwnerItem itemDetails={item} />;
          })}
        </section>
      </div>
    );
  }
}

export default OwnerHome;
