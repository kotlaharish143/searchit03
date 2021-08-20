const {prod}=require('../models/pds')

function resultsMatched(product,searchString){
    const query=new RegExp(searchString)
    return query.test(product.productName.toLowerCase());
}
 // Slow but matches our requirements
async function offlineLinearSearch(searchString){
    if(searchString.length==0) return []
   let products=[]
   let entries=await prod.find({});
  entries.map((r) => products.push(r.toObject()));
  const results=products.filter((product)=>resultsMatched(product,searchString));
  return results;
}


// Text index + full search : Its fast but doesnt suit us at all it uses stem words to search
async function textIndexSearch(searchString){
    if(searchString.length==0) return []
    let products=[]
   let entries=await prod.find(
       {$text:
            {$search:searchString

   }
});
  entries.map((r) => products.push(r.toObject()));
  return products;
}

// Works as expected works fast enough on 25k dataset working slow on 150k dataset
async function textRegexSearch(searchString){
    if(searchString.length==0) return []
    let products=[]
    let entries=await prod.find(
        {"productName": new RegExp('^'+searchString,'i')}

);
  entries.map((r) => products.push(r.toObject()));
  return products;
}


module.exports={
  offlineLinearSearch,textIndexSearch,textRegexSearch
}

