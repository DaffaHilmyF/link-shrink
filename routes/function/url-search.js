// Load libraries
const express = require('express');
const mongoose = require('mongoose');

// Load user model
const db = require('../../model/url.js');
const {IsURLValid} = require('./url-check.js')

function searchResult(url){
    if(!url){
        return false;
    }else if (url){
        return true;
    }
}


async function IsShortURLInDB(shortUrl){
    const url = await IsURLValid(shortUrl)
    if(url!= true){
        return false;
    }else{
        const result = await db.findOne({shortUrl: shortUrl})
        return searchResult(result);
    }
   
}

function showAllLinkInDB(res){
    db.find({}).then((url)=>{
        return res.status(200).json({data: url})
    })
}

function showSpecificShortLink(shortURL, res){
    db.findOne({shortUrl: shortURL}).then((url)=>{
        return res.status(200).json({data: url}) 
    })
}



module.exports = {
    IsShortURLInDB,
    showAllLinkInDB,
    showSpecificShortLink,
};