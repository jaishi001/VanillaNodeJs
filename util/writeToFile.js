const fs = require('fs');

function writeToFile(filepath,content){
    fs.writeFileSync(filepath,JSON.stringify(content),'utf8',function(err){
       if(err){
         console.log(err)
       }
    })
}
module.exports = writeToFile;