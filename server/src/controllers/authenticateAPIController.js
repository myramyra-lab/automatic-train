const { users } = require('../database/data')
const API = require('../../middleware/apikeys')

module.exports = {

    create: function (req, res) {
        let email = req.body.email; 
        let user = API.createUser(email, req)  // TODO
        res.status(201).send({data:user});
    },

    getAll: function (req, res) {
        res.json([{id: 1, name: 'QA Test App'}]);
    },

    getById: function (req, res) {
        res.json({id: 1, name: 'QA Test App'});
    },

    homePage: function(req,res,next){
        res.send('<p>HTML Data</>')
    }
};