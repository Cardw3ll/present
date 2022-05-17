require('dotenv').config()
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose'); 
const app = express();


app.use(express.json());
//configuring route
const allRoutes = require('./route/routes')
app.use(allRoutes)




mongoose.connect('mongodb://localhost:27017/restApi');  
const db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('we are connected')
})




app.listen(process.env.PORT, ()=>{
    console.log('listen on port'+ process.env.PORT);
}
)