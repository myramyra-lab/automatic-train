const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const { generate } = require('shortid');
const shortid = require('shortid');
const LINE_ENDING = require('os').EOL;
const os= require('os');
// const { random } = require('lodash');


module.exports = function (req, res) {
    const API_KEY = shortid.generate();
    res.setHeader('Content-Type', 'application/json');

    try{  
      fs.open(VALID_KEYS_PATH,'a',666,(e,id)=>{
        fs.write(id,`${API_KEY}${LINE_ENDING}`,null,'utf-8',()=>{
            fs.close(id,()=>{
              res.status(201).send(JSON.stringify({"apiKey":API_KEY}));
            })
        })
      })
    }catch(err){
      console.log(err)
    }
   
};

