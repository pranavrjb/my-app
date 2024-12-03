const mongoose=require('mongoose')

const AppointmentBookingSchema= new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    date:Date,
    time:TimeRanges,
    doctor:String,
});
 const AppointmentBookingModel=mongoose.model("appointmentbooking",AppointmentBookingSchema);
 module.exports=AppointmentBookingModel;