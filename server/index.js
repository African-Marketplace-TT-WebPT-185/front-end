const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

let data=
[{"id":1,"item_name":"banana","location":"Ghana","description":"Yellow Fruit!","price":"$5","username":"Austin","user_id":1},{"id":2,"item_name":"plum","location":"Ghana","description":"Purple Fruit!","price":"$10","username":"Austin","user_id":1},{"id":3,"item_name":"apple","location":"Ghana","description":"Red Fruit!","price":"$7","username":"Austin","user_id":1}]

function getData(req, res) {
  console.log(`${req.originalUrl}`)
  res.json(data)
}

app.get('/*', getData)

app.listen(5000, () => console.log(
  'The makeshift API is listening on port 5000!',))
