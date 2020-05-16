const mongoose=require('mongoose');

const reportSchema=new mongoose.Schema({
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    },

    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'doctorS'
    },
    status:{
        type:String,
        enum:["Negative","Travelled-Quarantine","Symptoms-Quanrantine","Positive-Admit"],
        required:true,
    }
},{
    timestamps:true
 });


 const Report=mongoose.model('Report',reportSchema);
 module.exports=Report;