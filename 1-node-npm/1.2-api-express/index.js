// var colors = require('colors');
 
// console.log('hello'.green); // outputs green text

const express = require('express')
const app = express()
const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use(express.json());
app.post('/create', (request, response) => {
    const body = request.body;
    console.log('recibi', body)
    response.status(201).send();
});

app.listen(port, () =>{
    console.log('Rainbow');
})