require('dotenv').config({path:'D:/PROJECT/link-shortener/.env'})



module.exports = {
    mongoURI: `mongodb+srv://admin:${process.env.MONGOURI}@cluster0.yqhyc.mongodb.net/dbURL?retryWrites=true&w=majority`
}
