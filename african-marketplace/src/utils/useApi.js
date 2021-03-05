import { axiosWithAuth as axios } from './axiosWithAuth'


export const getItems = () => {
    axios()
        .get('/items')
        .then(res => {return(res.data)})
        .catch(err => {console.log('error fetching items:', err)})
}

export const getUsers = () => {
    axios()
        .get('/users')
        .then(res => {return(res.data)})
        .catch(err => {console.log('error fetching users: ', err)})
}

export const getUser = ({ id }) => {
    axios()
        .get('/users/{user.id}')
        .then(res => {return(res.data)})
        .catch(err => {console.log('error fetching user: ', err)})
}

export const deleteUser = ({ id }) => {
    axios()
        .delete(`/users/${id}`)
        .then(res => {console.log('user deleted: ', res)})
        .catch(err => {console.log('error deleting user: ', err)})
}

export const getUserItems = ({ id }) => {
    axios()
        .get(`/users/${id}/items`)
        .then(res => {return(res.data)})
        .catch(err => {console.log('error getting user items: ', err)})

} 

export const getItem = ({ id }) => {
    axios()
        .get(`/items/${id}`)
        .then(res => {return(res.data)})
        .catch(err => {console.log('error fetching item: ', err)})
}

export const addItem = (user, item) => {
    axios()
        .post('/items/additem', user.id, item)
        .then(res => {console.log('item successfully added: ', res)})
        .catch(err => {console.log('error adding item: ', err)})
    }

export const editItem = (user, item) => {
    axios()
        .put(`/items/${ item.id }`)
        .then(res => ('item edited successfully: ',res))
        .catch(err => {console.log('error editing item: ', err)})
}

export const deleteItem = (item) => {
    axios()
        .delete(`items/${item.id}`)
        .then(res => {console.log('item deleted successfully: ', res)})
        .catch(err => {console.log( 'error deleting item: ', err)})
} 

export const getCategory = (cat) => {
    axios()
        .get(`/items/${cat}`)
        .then(res => {return(res.data)})
        .catch(err => {console.log('error fetching category: ', err)})

}