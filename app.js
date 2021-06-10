const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

app.use(cors())
app.use(bodyParser.json())

//Import Routes
const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');

//creating Routes
app.use('/posts', postsRoute);
app.use('/user', userRoute);

//Route
app.get('/', (req, res) => {
    res.send('Esta es la pagina principal')
});

// Connect MongoDB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true}, () => {
    console.log("Conectado a la base de datos")
});

//start local server on port 3000
app.listen(3000, () => {
	console.log("Running RESTful API on port http://localhost:3000");
});
