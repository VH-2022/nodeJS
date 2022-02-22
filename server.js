const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Yogesh Rathod (Node Js Devloper)')
})


app.get('/usegetroute', (req, res) => {
  res.send('Use Get Route')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})