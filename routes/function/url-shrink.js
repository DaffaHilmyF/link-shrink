const randomstring = require('randomstring');

function URLShrink(){
    return randomstring.generate({
        length: 6,
        charset: 'alphabetic'
    })
}


module.exports = URLShrink;