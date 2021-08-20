const mongoose=require('mongoose')
let connectionString="mongodb://localhost:27017/test";
const db= mongoose.connect(connectionString,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

mongoose.connection.on('connected', () => {
  console.log("mongoose is connected")
}).catch((err)=>{
console.log(err)
})

//Listening to errors
mongoose.connection.on('error', err => {
    console.log(err);
  });

//If mongoose disconnected from Mongodb
mongoose.connection.on('disconnected', err => {
    console.log(err);
  });

