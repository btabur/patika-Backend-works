const express = require('express')
const app = express()

app.get('/',(req, res)=>  {
  res.status(200).send('Ana Sayfa')
})

app.get('/about', function (req, res) {
    res.status(200).send('Ana Sayfa')
  })

app.listen(3000)