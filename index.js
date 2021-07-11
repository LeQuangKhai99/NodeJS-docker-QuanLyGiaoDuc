const express = require('express')
const app = express()
const port = 3000
const mongose = require('mongoose')

//connect mongodb
mongose.connect(
  'mongodb://mongo:27017/node_app',
  { useNewUrlParser: true}
)
.then(() => console.log('connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('  dsa  s!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})