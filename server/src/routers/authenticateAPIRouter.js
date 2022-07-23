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



//checkJwt is an Express Middleware that will validate access tokens 
// const checkJwt = jwt({
//   secret:jwksRsa.expressJwtSecret({
//     cache:true,
//     rateLimit:true,
//     jwksRequestsPerMinute:5,
//     jwksUri:`https://dev-z71ownnb.us.auth0.com/.well-known/jwks.json`
//   }),
//   audience:'https://apiauth-aggie',
//   issue:`https://dev-z71ownnb.us.auth0.com/api/v2/`,
//   algorithms:['RS256']
// })
// app.use(checkJwt)
//the checkJwt middleware will intercept post requests only
router.post("/createitem", authenticationController.createItem)
router.post("/register",authenticationController.create)

module.exports = router;