const fs = require('fs');

const saveToDatabase = (users)=>{
  fs.writeFileSync("./data.js",JSON.stringify(users),{
    encoding:"utf-8",
  })
}
const saveItemsToDatabase=(items)=>{
  fs.writeFileSync("./db.json", JSON.stringify(items, null,2),(err)=>{console.log(err)})
}
module.exports={saveToDatabase, saveItemsToDatabase}