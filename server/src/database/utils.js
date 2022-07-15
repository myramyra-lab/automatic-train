const fs = require('fs');

const saveToDatabase = (users)=>{
  fs.writeFileSync("./data.js",JSON.stringify(users),{
    encoding:"utf-8",
  })
}
module.exports={saveToDatabase}