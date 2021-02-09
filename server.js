require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const db = require('./config/db.js').mongoURI;
const cors = require('cors')

const IsShortURLInDB = require('./routes/function/url-search.js')


// IS: Auth mongoURI to mongoDB server
// FS: Connect to MongoDB
async function mongooseConnet (){
    await mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('MongoDB connected'))
    .catch(err => console.error(err))
//
}

mongooseConnet();

const app = express();

app.use(cors())

// Using controller from routes
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', require('./routes/url-post.js'))
// app.use('/', require('./routes/sign-up.js'))


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Apps listening on port ${PORT}`);
});