import mongoose from "mongoose";

const incomeSchema=new mongoose.Schema({
    userId:{type:String,required:true},
    icon:{type:String,required:true},
    source:{type:String,required:true},
    amount:{type:Number,required:true},
    date:{type:Date,default:Date.now},

},{timestamps:true })
const Income= mongoose.model("Income",incomeSchema)
export default Income;