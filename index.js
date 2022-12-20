const express = require('express') // /node_modules
const app = express()
const port = 3000

app.get('/blog', (req, res) => {
    var a = 1;
    var b = 2;
    var c = b + a;
  res.send('Hello Wodrld!')
})

app.listen(port, () => {
  console.log(`Example app listening at localhost:${port}`)
})