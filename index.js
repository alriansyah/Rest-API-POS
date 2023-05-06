const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./config/connection')
const port = 3000

// db.connect();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log(process.env.HOSTNAME);
    res.send('Hello Al Riansyah!')
})

app.post('/product', (req, res) => {
    console.log(req.body);
    res.send('testing');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})