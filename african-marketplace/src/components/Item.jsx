import React from 'react'

export default function Item(props) {

    const { item_name, location, description, price, username } = props.item

    return (
        <div>
            <h2>Item Name: {item_name}</h2>
            <h3>Location: {location} Price: {price}</h3>
            <h3>Sold By: {username}</h3>
            <h4>Description: {description}</h4>
        </div>
    )
}
