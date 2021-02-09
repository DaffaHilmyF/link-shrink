// Load libraries
const express = require('express');
const mongoose = require('mongoose');

// Load user model
const db = require('../../model/url.js');


function IsInputHasNull(url){
    if(url == null){
        return true;
    }else{
        return false;
    }
}


function IsInputHasValue(url){
    if(!url){
        return false;
    }else if(url){
        return true;
    }
}

async function IsShortURLInDB(shortUrl){

    if(IsInputHasNull(shortUrl)== true){
        return false;
    }else{
        const result = await db.findOne({shortUrl: shortUrl}).then(IsInputHasValue(url));
        return result;
    }
   
}

module.exports = IsShortURLInDB;