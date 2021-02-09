// Load library
const express = require('express');
// Load user model
const db = require('../model/url.js');
const createShortURL = require('./function/url-create.js')
const IsURLValid = require('./function/url-check.js')

const route = express();



route.post('/create', async(req, res)=>{
    const { longUrl } = req.body;
    
    if(IsURLValid == false){
        return res.sendStatus(400)
    }else{
        return createShortURL(longUrl, res);
    }
    
        
        
    
})

module.exports = route;