const express=require('express');
const passport=require('passport');
const router=express.Router();
const reportApi=require('../../../controllers/api/v1/reports');


router.get('/:status',passport.authenticate("jwt",{session:false}),reportApi.statusReport);

module.exports=router;