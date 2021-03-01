import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Item from './Item'

export default function UserHome() {
    const [items, setItems] = useState([])

    function getItems() {
        axios
            .get('http://localhost:5000')
            .then(res => {
                console.log('res: ', res)
                setItems(res.data)
            })
            .catch(err => {
               alert(`problem fetching data ${err}`)
            })
    }

    useEffect(() => {
        getItems()
        }, [])

    return (
        <div>
            <h1>Welcome to African Marketplace</h1>
            {
                items.map(item => {
                    return(
                        <Item 
                            item={item}
                            key={item.id}
                            />
                    )
                })
            }  
        </div>
    )
}
