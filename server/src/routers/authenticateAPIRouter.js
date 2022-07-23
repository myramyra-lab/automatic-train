var express = require("express");
var router = express.Router();
const {expressjwt: jwt} = require("express-jwt");
const jwksRsa = require("jwks-rsa")
const app = express();
const API = require('../../middleware/apikeys')



let authenticationController = require("../controllers/authenticateAPIController")
let keyStore = require("../../resources/key-store")
let middleware = require("../../resources/middleware");
const { application } = require("express");


router.get("/", keyStore)
router.get("./", authenticationController.homePage)
router.get("/keys/:id",authenticationController.getById)
router.use(middleware)
router.get("/keys",authenticationController.getAll)
// router.get("/items", API.validateKey,authenticationController.getItems)
router.get("/items", authenticationController.getItems)

router.post("/createitem", authenticationController.createItem)
router.post("/register",authenticationController.create)

module.exports = router;
