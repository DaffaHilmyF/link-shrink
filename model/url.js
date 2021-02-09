const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = Schema({
    longUrl: { 
        type: String,
        require: true
    },
    shortUrl: {
        type: String,
        require: true,
    },
    clicks: { 
      type: Number, 
      default: 0,
    }
});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;