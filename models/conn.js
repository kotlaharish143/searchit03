const mongoose=require('mongoose')
const Schema=mongoose.Schema
const db= mongoose.connect("mongodb+srv://harish143:12345678@@cluster0.5b5nr.mongodb.net/searchIt?retryWrites=true&w=majority",{
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

