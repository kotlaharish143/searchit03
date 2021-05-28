const express=require('express');
const app=express()
const cors=require('cors')
const path=require('path')
const conn=require('./models/conn')
const {store}=require('./models/store')
app.use(express.static(path.join(__dirname,"client","build")))
const store_init= new store({
    name:"rm general store",
    location:"IIT BHU",
    items:[{id:1,itemname:"dmata",price:30},{id:2,itemname:"daling",price:80},{id:3,itemname:"cerlac",price:50}]
})   
async function fun(str){
    try {
       await  store_init.save();
        console.log(str) 
     // mongodb: { ..., firstName_fuzzy: [String], lastName_fuzzy: [String] }
     const results=await store.find({"items.itemname":
     {
       $regex:new RegExp(String(str)),
 
     }},);
     const entries=await store.find({"items.itemname":
        {
          $regex:new RegExp(String(str)),
    
        }},{
           
                "items":1,"_id":0
            });
     
    //    console.log(results)
    //    console.log(entries)
       var objectMap=new Map()
       
       entries.map((itemx)=>(itemx.items.map((item)=>{
          
         
        if(objectMap[item.itemname]!=null){
            objectMap[item.itemname].numStores+=1;
            objectMap[item.itemname].avgPrice+=item.price;
           }
           else{
            var obj={
                numStores:1,
                avgPrice:item.price
            }
            objectMap[item.itemname]=obj;
           }
        })))
      
       console.log(objectMap)
       return objectMap
        
        // each user object will not contain the fuzzy keys:
        // Eg.
        // {
        //   "firstName": "Joe",
        //   "lastName": "Doe",
        //   "email": "joe.doe@mail.com",
        //   "age": 30,
        //   "confidenceScore": 34.3 ($text meta score)
        // }
      } catch (e) {
        console.error(e);
      }}
  
app.get('/search/:str',async (req,res)=>{
    const s=req.params.str
    console.log(s)
   const sallu=await fun(s)
//    console.log(sallu)
   res.send(sallu) 
})



app.get("/",(req,res)=>{
    console.log(path.join(__dirname,"client","build","index.html"))
    res.sendFile(path.join(__dirname,"client","build","index.html"))
})
app.listen(process.env.PORT || 8000,()=>{
    console.log("server started on http://localhost:8000")
})