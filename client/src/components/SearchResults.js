import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './search.css'
import loc from "../Images/loc.png"
import down from "../Images/down.png"
import search from "../Images/search.png"
export default function SearchBar() {
  const [text,setText]=useState('init')
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

  },[text])
    return (
        <div class="container">
          <div class="row">
          <div class="offset-md-3 my-2 col-md-9  card shadow search-container p-3 d-flex md-flex-row align-items-center">
            <div class="d-flex col-md-12 flex-row p-2">
            <div class=" col-md-4  d-flex flex-row mx-2 align-items-center">
         <img class="mx-1" src={loc}/>
         <span class="mx-3 boldText">IIT BHU</span>
         <img class="mx-3 ms-auto down" src={down}/>
            </div>
            
            <div class=" col-md-7 d-flex seconddiv flex-row align-items-center">
            <img class="mx-3" src={search}/>
            <input type="search" class="searchbox"  onInput={handleChange} id="s"/>
            </div>
            </div>
            </div>
            </div>
           
         
            <div class="row d-flex justify-content-end">          
           <div class="col-md-6"></div>
          
<div  class={(res!={})?" col-md-6 card shadow col-md-6 mt-2 d-flex  searchResults":""} id="result">
{
Object.keys(res).map(function(key, index) {
  
      return <div class="item-container  "><div class="resitem d-flex flex-column justify-content-center"><h5 class="gil">{key}</h5><span key={index}>Available in {res[key].numStores} near by store with avg cost of ${res[key].avgPrice/res[key].numStores}</span></div></div>
})}
         
          </div>
       </div>
       </div>
    )

            }