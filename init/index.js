const mongoose = require("mongoose");
const initdata = require ("./data.js");

const Listing = require ("../models/listing.js");
const MONGO_URL= "mongodb://127.0.0.1:27017/wanderlust";


main()
 .then(()=>{
    console.log("connected to db");
 })
.catch((err) =>{
    console.log(err);
});


async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async() =>{
    await Listing.deleteMany({});

    initdata.data=initdata.data.map((obj)=>({...obj, owner: "666d45959d3bfc63ebdc59b5"}));   //adding owner in all listings objects
    
    await Listing.insertMany(initdata.data);
   
   console.log("data was initialized");

   // Calculate the number of listings inserted
   const count = await Listing.countDocuments();
   console.log(`Number of listings inserted: ${count}`);

};

 initDB();
