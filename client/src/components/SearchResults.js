import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './search.css'
import loc from "../Images/loc.png"
import down from "../Images/down.png"
import search from "../Images/search.png"
export default function SearchBar() {
  const [text,setText]=useState("")
  const [res,setRes]=useState([])
  const [loc,setLoc]=useState("Select a location")
  const handleChange = e => setText(e.target.value)
  const searchFunction=async ()=>{
   
   var x=await axios.get("/search/"+text);
   if(x){
       setRes(x.data)
   }else{
       console.log("empty response")
   }}
  useEffect(() => {
searchFunction()

  },[text])
    return (
        <div class="container">
          <div class="row">
          <div class="offset-md-3 my-2 col-md-9 col-xs-12 p-2 card shadow search-container  d-flex md-flex-row align-items-center">
            <div class="d-flex col-md-12 md-flex-row xs-flex-column ">
            <div class=" col-md-4  d-flex flex-row mx-2 align-items-center">
         <img class="mx-1" src={loc}/>
         <div class="dropdown  ms-auto">
  <button class="btn dropdown-button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <img class="mx-3  down " src={down}/>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
   {
     
   }
  </ul>
</div>
         
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
          res.map((product)=> {
  
      return <div class="item-container  ">
        <div class="resitem d-flex flex-column justify-content-center">
          <h5 class="gil">{product.productName}</h5>
          </div>
          </div>
  })}
         
          </div>
       </div>
       </div>
    )}