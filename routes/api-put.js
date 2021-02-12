// Load library
const express = require('express');
const { ChangeShortURLName } = require('./function/url-create.js');
const {IsShortURLInDB} = require('./function/url-search.js')
const {IsURLValid, IsInputHasSpecialChar} = require('./function/url-check.js')

const route = express();

route.put('/change/:shortLink', async (req, res)=>{
    try {
        const {shortLink} = req.params
        const {newShortLink} = req.body;
        
        if(IsShortURLInDB(shortLink) == false){
            return res.sendStatus(404);
        }
        if(IsInputHasSpecialChar(newShortLink) == true || IsURLValid(newShortLink) == false){
            return res.sendStatus(400);
        }else{
            return ChangeShortURLName(shortLink, newShortLink, res);
        }

    } catch (error) {
        console.error(error);
    }
})

module.exports = route;