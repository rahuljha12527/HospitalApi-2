const express=require('express');

const router=express.Router();

router.use('/doctor',require('./doctor'));

router.use('/patient',require('./pateint'));
module.exports=router;