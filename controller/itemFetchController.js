
const {store}=require('../models/store')

async function fetchItems(str){

    try {
     
     const entries=await store.find({"items.itemname":
        {
          $regex:new RegExp(String(str)),
    
        }},{
           
                "items":1,"_id":0
            });
       var objectMap=new Map()
       
       entries.map((itemx)=>(itemx.items.map((item)=>{
          
         if(RegExp(str).test(item.itemname)){
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
         }
       
        })))
      
       console.log(objectMap)
       return objectMap
     
      } catch (e) {
        console.error(e);
      }}
      module.exports={fetchItems}