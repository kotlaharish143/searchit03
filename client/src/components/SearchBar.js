import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function SearchBar() {
  const [text,setText]=useState('fuck')
  const [res,setRes]=useState({})
  const handleChange = e => setText(e.target.value)
  const searchFunction=async ()=>{
   
   var x=await axios.get("/search/"+text);
        
    
   if(x){
    //    console.log(x)
       setRes(x.data)
       console.log(res);
   }else{
       console.log("empty response")
   }}
  useEffect(() => {
searchFunction()
// console.log("executed")
  },[text])
    return (
        <div>
            <input type="search" onInput={handleChange} id="s"/>
            {/* <ul>{res.map(item =>(item.items.map((item2)=><li key={item2.id}> {item2.itemname} </li>))) }</ul> */}
{<ul>   { 
Object.keys(res).map(function(key, index) {
  
      return <li key={index}>Available in {res[key].numStores} near by store with avg price of ${res[key].avgPrice/res[key].numStores}</li>
})}</ul>}
         
          
        </div>
    )

            }