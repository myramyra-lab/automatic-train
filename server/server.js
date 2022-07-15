const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require ("helmet");
const morgan = require("morgan")
// const connectDB = require("./src/database/movieDatabase");
const port = process.env.API_PORT || 8000;

const authenticateAPIRouter = require("./src/routers/authenticateAPIRouter")



app.use(express.json({limit:"50mb"}));
app.use(express.json({limit:"50mb",extended:true,parameterLimit:50000}));
app.use(cors({ origin: true, credentials: true }));
//helmet enhances API security
app.use(helmet());
//morgan logs HTTP requests
app.use(morgan('combined'))

app.use('/api', authenticateAPIRouter)


// connectDB()
app.listen(port,()=>{
      console.log(`We are cruising nicely on port ${port}`)
})


