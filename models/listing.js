const mongoose= require("mongoose");

const Schema= mongoose.Schema;
const Review = require("./review.js");     //  require for post mongoose middleware
const { required } = require("joi");

const listingSchema= new Schema({
    title:{
        type:String,
        required:true,
    },
    
    description:String,

    image:{
       url:String,
       filename:String,  
    },

    price:Number,
    location:String,
    country:String,


   reviews: [{
     type: Schema.Types.ObjectId,
     ref:"Review",                              // array for object_id as they can be too many & for refernce model name

   }],

   owner: {
    type: Schema.Types.ObjectId,
     ref:"User",
   },

   category: {
    type: String,
    enum: [
      "trending",
      "rooms",
      "beach",
      "mountain",
      "castle",
      "pool",
      "camping",
      "treehouse",
      "arctic",
      "boat",
    ], // Define all possible categories
},


   geometry: {
     type:{
        type:String,
        enum: ['Point'],      //location.type must be "point"
        
    },

     coordinates:{
        type:[Number],         // array of coordinates ie longitude and latitude
      
},


    },




});


//POST MONGOOSE MIDDLEWARE
listingSchema.post("findOneAndDelete",async (listing)=>{

  if(listing.reviews.length){
       await Review.deleteMany({_id :{$in: listing.reviews}});
  }

  });


const Listing = mongoose.model("Listing",listingSchema);
module.exports= Listing;

