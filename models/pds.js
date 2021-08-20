const mongoose=require('mongoose')
const conn=require('./conn.js')

const Schema=mongoose.Schema


const ProdSchema = new Schema({
    name: String,
    stores:[{
            id:Number,
           name:String,
           cluster:String,
           city:String
    }]
  });
  ProdSchema.index({'productName':"text"});
  const prod=mongoose.model('prod',ProdSchema)
  
  module.exports={
      prod
  }




 