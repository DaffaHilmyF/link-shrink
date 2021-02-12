// Load library
const express = require('express');
const {showAllLinkInDB, showSpecificShortLink, redirectToLink} = require('./function/url-search.js')

const route = express();

route.get('/get', (req, res)=>{
    try {
        showAllLinkInDB(res);
    } catch (error) {
        console.error(error);
    }
})

route.get('/get/:shortLink', (req, res)=>{
    try {
        const {shortLink} = req.params;
        showSpecificShortLink(shortLink, res);
    } catch (error) {
        console.error(error)
    }
})

route.get('/:shortLink', (req, res)=>{
    try {
        const {shortLink} = req.params;
        redirectToLink(shortLink, res)
    } catch (error) {
        console.error(error)
    }
})

module.exports = route;