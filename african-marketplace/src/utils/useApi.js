import React, { useState, useEffect } from "react";
import { axiosWithAuth as axios } from `./axiosWithAuth`


export const getItems = () => {
    axios()
        .get(`/items`)
        .then(res => {return(res.data)})
        .catch(err => {console.log(`error fetching items:`, err)})
}

export const getUsers = () => {
    axios()
        .get(`/users`)
        .then(res => {return(res.data)})
        .catch(err => {console.log(`error fetching users: `, err))

}

export const getUser = ({ user.id }) => {
    axios()
        .get(`/users/{user.id}`)
        .then(res => {return(res.data)})
        .catch(err => {console.log(`error fetching user: `, err))
}

export const deleteUser = ({ user.id }) => {
    axios()
        .delete(`/users/${ user.id }`)
        .then(res => {console.log(`user deleted: `, res)})
        .catch(err => {console.log(error deleting user: `, err`)})
}

export const getUserItems = ({ user.id }) => {
    axios()
        .get(`/users/${user.id}/items`)
        .then(res => {return(res.data)})
        .catch(err => {console.log(`error getting user items: `, err)})

} 

export const getItem = ({ item.id }) => {
    axios()
        .get(`/items/${item.id}`)
        .then(res => {return(res.data)})
        .catch(err => {console.log(`error fetching item: `, err)})
}

export const addItem = (user, item) => {
    axios()
        .post(`/items/additem`, { user_id }, item)
        .then(res => {console.log(`item successfully added: `, res)})
        .catch(err => {console.log(`error adding item: `, err)})
    }

export const editItem = (user.id, item) => {
    axios()
        .put(`/items/${ item.id }`)
        .then(res(`item edited successfully: `,res))
        .catch(err => {console.log(`error editing item: `, err)})
}

export const deleteItem = (item.id) => {
    axios()
        .delete(`items/${$item.id}`)
        .then(res => {console.log(item deleted successfully: `, res`)})
        .catch(err => {console.log( `error deleting item`)})
} 

export const getCategory = (cat) => {
    axios()
        .get(`/items/${cat}`)
        .then(res => {return(res.data)})
        .catch(err => {console.log(`error getting category: `err)})

}