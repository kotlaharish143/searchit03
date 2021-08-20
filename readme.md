## Installation
``` npm install``` in root directory
```npm install``` in client directory
  
 
 use ```npm start``` To run
 
There are three available functions in ```controllers/searchController.js```

## offlineLinearSearch: 
Fetches All products and does offline Linear searching 
- We dont make queries to database rather we do searches offline 
- Slow suppports partial searches useing regex matching
## textIndexSearch: 
uses Text index created on "productName" and do text search using mongoose
- Supports partial searches but works based on stem words
- Fast can use index efficiently
## textRegexSearch: 
uses Text index created on "productName" and do regex search using mongoose
- Supports only Prefix only searches 
- Slow cant use index efficiently

you can change these functions in ```server.js``` in ```get/search/```

## Database 
change database connection string in ```models\conn.js```
import ```controller\textData.json``` into your Database
