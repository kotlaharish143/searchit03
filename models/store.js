
const mongoose=require('mongoose')
const conn=require('./conn.js')
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');
const Schema=mongoose.Schema

const storeSchema=new Schema({
   
   name:{
      type:String,
    
    },
    location:{
        type:String,
    },
   items:[{id:Number,itemname:String,price:Number}]
   
  
  }) 
  // storeSchema.plugin(mongoose_fuzzy_searching, { fields: [ {
  //   name: 'items',
  //   keys:['itemname'],
  //   minSize: 1,
  //   weight: 5,
  //   prefixOnly: true,
  //   exact:true
  // },
  // {
  //   name: 'location',
  //   minSize: 3,
  //   weight:1,
  //   prefixOnly: true
  // },] });

 storeSchema.index({'items.itemname':"text"})
const store=mongoose.model('store',storeSchema)

module.exports={
    store
}