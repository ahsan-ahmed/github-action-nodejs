const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
const port = process.env.port || 3333;
app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
