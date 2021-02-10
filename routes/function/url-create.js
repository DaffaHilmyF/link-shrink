const db = require('../../model/url.js');
const URLShrink = require('./url-shrink.js');


function createShortURL(longURL, res){
    try {
        const shortURL = URLShrink();
        db.create({longUrl: longURL, shortUrl: shortURL}).then(()=>{
            return res.status(200).json({message: "Success"})
        })
    } catch (error) {
        console.error(error)
    }
}

function ChangeShortURLName(shortURL, newShortLink, res){
    try {
        db.findOneAndUpdate({shortUrl: shortURL}, {shortUrl: newShortLink}).then(function () {
                res.status(200).json({ message: 'success' });
            });
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    createShortURL,
    ChangeShortURLName,
}