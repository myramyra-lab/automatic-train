const { users } = require('../database/data')
const API = require('../../middleware/apikeys')
const DB = require('../database/db.json');
const { saveItemsToDatabase } = require('../database/utils');

module.exports = {

    create: function (req, res) {
        let email = req.body.email; 
        let user = API.createUser(email, req)  // TODO
        res.status(201).send({data:user});
    },

    getAll: function (req, res) {
        res.json({data:users});
    },

    getById: function (req, res) {
        res.json({id: 1, name: 'QA Test s'});
    },

    homePage: function(req,res,next){
        res.send('<p>HTML Data</>')
    },
    createItem:function(req,res,next){
        const {body} = req;
        let cheese ={
            name:body.name
        }    
        DB.push(cheese);
        saveItemsToDatabase(DB)
        res.send({status:'OK', data:cheese})
    },
    getItems:function (req,res){    
        res.send({data:DB})
    } 
};