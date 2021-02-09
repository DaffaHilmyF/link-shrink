const express = require('express');
const mongoose = require('mongoose');
// Load user model
const db = require('../model/url.js');
const randomstring = require('randomstring')

const route = express();


function shortener(){
    return randomstring.generate({
        length: 6,
        charset: 'alphabetic'
    })
}


route.post('/', async(req, res)=>{
    const { longUrl } = req.body;
    try {
        if(longUrl == null){
            return res.sendStatus(404);
        }
        
        const shortUrl = shortener();
        db.create({longUrl: longUrl, shortUrl: shortUrl}).then(url =>{
            return res.json({data: url})
        })
    } catch (error) {
        console.error(error)
    }

})

route.get('/:shortUrl', async (req, res)=>{
    const {shortUrl} = req.params
    try {
        if(shortUrl == null){
            res.sendStatus(404)
        }

        db.findOne({shortUrl: shortUrl}, (err, url)=>{
            if (err) return err;
            if(!url){
                return res.sendStatus(404)
            }else if(url){
                return res.redirect(url.longUrl)
            }
        })

    } catch (error) {
        console.error(error)
    }
})

route.get('/', (req, res)=>{
    db.find({}).then((url)=>{
        return res.json({data: url})
    })
        
})

route.put('/', async(req, res)=>{
    const {userInput, shortUrl} = req.body
    try {
        if(shortUrl == null){
            return res.sendStatus(404)
        }

        db.findOne({shortUrl: shortUrl}, (err, url)=>{
            if (err) return err;
            if(!url){
                return res.sendStatus(404)
            }else if(url){
                url.shortUrl = userInput;
                url.save();
                return res.status(200).json({data: url.shortUrl})
            }
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = route; 