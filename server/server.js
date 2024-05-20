const express = require ("express")
const app = express ()

require("dotenv").config()
app.use(express.json());
const cors = require ('cors');

const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));


app.use(express.urlencoded({ extended:true}));
require("dotenv").config()
require ('./config/mongoose')
require ('./routes/user.routes')(app);
require ('./routes/Routes')(app);


const port = process.env.PORT

app.listen(port, () => {
    console.log("Listening at Port dotenv")
})