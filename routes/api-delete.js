// Load library
const express = require('express');
const deleteAllData = require('./function/url-delete.js')
const route = express();

route.delete('/delete', (req, res)=>{
    return deleteAllData(res);
})

module.exports = route;