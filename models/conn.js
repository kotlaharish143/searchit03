const mongoose=require('mongoose')
const Schema=mongoose.Schema
const db= mongoose.connect("mongodb://localhost:27017/test",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
// Handling Initial connection Errors
mongoose.connection.on('connected', () => {
  console.log("mongoose is connected")
}).catch((err)=>{
console.log(err)
})
//Listening to errors
mongoose.connection.on('error', err => {
    logError(err);
  });
  //If mongoose disconnected from Mongodb
  mongoose.connection.on('disconnected', err => {
    logError(err);
  });

