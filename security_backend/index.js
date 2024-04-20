const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const bodyParser = require("body-parser");
const route = require("./routes/users")

app.use((req, res, next) => {
    // res.setHeader('Access-Control-Allow-Origin', 'https://waaneat-frontend-blond.vercel.app');
    res.setHeader('Access-Control-Allow-Origin', `http://localhost:51406`);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Custom-Header, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // Autoriser les cookies
    res.setHeader('Access-Control-Expose-Headers', 'Access-Token, Uid');
    if (req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Custom-Header, Authorization, Credentials');
      res.status(200).end();
    } else {
      next();
    }
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(route)


app.get('/', (req,res)=>{ 
    res.send("Welcome to the security backend")
})

app.listen(2500,async()=>{
    console.log("running")
})