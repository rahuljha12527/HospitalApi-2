const express=require('express');
const passport=require('passport');
const router=express.Router();

const patientApi=require('../../../controllers/api/v1/Patient_api');

router.post('/:id/create_report',passport.authenticate("jwt",{session:false}),patientApi.createReport);

router.get('/:id/all_reports',patientApi.AllReport);

router.post('/register',passport.authenticate("jwt",{session:false}),patientApi.registerPatient);

module.exports=router;