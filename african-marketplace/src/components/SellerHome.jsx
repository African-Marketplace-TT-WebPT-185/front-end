import React, { Component } from "react";
 // eslint-disable-next-line
import SellerItem from "./SellerItem";
 // eslint-disable-next-line
import profileIcon from "../assets/profile-icon.png";
 // eslint-disable-next-line
import { Button } from "reactstrap";

import { getItems, getUsers } from './../utils/useApi';

//!  Main Function and components renamed, state objects still need attention  //

class SellerHome extends Component {

    state = {
      items:  getItems(),
      users:  getUsers()
    }
   

  render() {
    return (
      <div className="owner">
        {/* <Button color="primary" size="lg">
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
        </section> */}
      </div>
    );
  }
}

export default SellerHome;
