import React, { Component } from "react";
import SellerItem from "./SellerItem";
import profileIcon from "../assets/profile-icon.png";
import { Button } from "reactstrap";



//!  Main Function and components renamed, state objects still need attention  //


class SellerHome extends Component {

  render() {
    return (
      <div className="owner">
        <Button color="primary" size="lg">
          Log out
        </Button>
        <section className=" owner-top">
          <img src={profileIcon} alt="profile" className="user-img" />
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
