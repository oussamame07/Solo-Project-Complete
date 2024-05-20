const mongoose = require ("mongoose");
const dbName = process.env.PORT ;
mongoose.connect (`mongodb://127.0.0.1/${dbName}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then (()=>console.log(`Connected to ${dbName} database!`))
.catch ((err)=>console.log(err))