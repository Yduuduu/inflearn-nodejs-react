const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yunju:dzxcnw7370!@boilerplate.967dz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    /*useNewUrlParser: true, useUnifiendTopology: true, useCreateIndex: true, useFindAndModify: false*/
}).then(()=>console.log('MongoDB Connected...'))
  .catch(err=>console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})