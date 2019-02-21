const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const Users = require('./routes/Users');


const port = process.env.PORT || 3000

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', Users)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})