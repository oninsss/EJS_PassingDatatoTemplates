const express = require('express');
const app = express()

app.use(express.urlencoded({ extended: true }));
app.listen(3000, console.log('Running on port 3000'));

app.get('/', (req, res) => {
    res.render('index.ejs', {
        title: 'Name Counter'
    });
});

app.post('/submit', (req, res) => {

    res.render('index.ejs', {
        title: 'Length of your name',
        name: req.body["fName"] + req.body["lName"]
    });
});

