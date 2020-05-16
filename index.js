const express=require('express');

const app=express();

const port=8000;
const passport=require('passport');
const passportJwt=require('passport-jwt');
const bodyParser=require('body-parser');
// connect to mongodb
const db=require('./config/mongoose');

app.use(passport.initialize());

app.use(bodyParser.urlencoded({extended:false}));

// app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server ${err}`);

    }

    console.log(`Server is running on port: ${port}`);
});