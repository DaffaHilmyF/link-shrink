const db = require('../../model/url.js');

function deleteAllData(res){
    db.deleteMany({}).then(()=>{
        return res.status(200).json({message: "success"})
    })
}


module.exports = deleteAllData;