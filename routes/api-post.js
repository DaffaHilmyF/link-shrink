// Load library
const express = require('express');
const {createShortURL} = require('./function/url-create.js')
const {IsURLValid} = require('./function/url-check.js')

const route = express();

route.post('/create', (req, res)=>{
    const { longUrl } = req.body;

    if(IsURLValid(longUrl) != true){
        return res.sendStatus(400);
    }else{
        return createShortURL(longUrl, res);
    }
})

module.exports = route;