// Load library
const express = require('express');
const { ChangeShortURLName } = require('./function/url-create.js');
const {IsShortURLInDB} = require('./function/url-search.js')
const {IsURLValid} = require('./function/url-check.js')

const route = express();

route.put('/change/:shortLink', async (req, res)=>{
    try {
        const {shortLink} = req.params
        const {newShortLink} = req.body;

        const IsShortURLInDB = await IsShortURLInDB(shortLink);
        const IsURLValid = await IsURLValid(newShortLink);

 
        if(IsShortURLInDB == false){
            return res.sendStatus(404);
        }
        if(IsURLValid == false){
            return res.sendStatus(400);
        }else if (IsURLValid == true) {
            return ChangeShortURLName(shortLink, newShortLink, res);
        }

    } catch (error) {
        console.error(error);
    }
})

module.exports = route;