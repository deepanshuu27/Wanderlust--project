
const Listing= require("../models/listing.js");
const Review= require("../models/review.js");


module.exports.createReview = async (req, res, next) => {
    try {
        
        const { id } = req.params;
        const listing = await Listing.findById(id);
        
        if (!listing) {
            throw new ExpressError(404, "Listing not found for review to submit..");
        }
  
        const { rating, comment } = req.body; // Ensure you're correctly accessing rating and comment
  
      //   if (rating === undefined || comment === undefined) {                //FOR SERVER SIDE VALIDATION
      //     throw new ExpressError(400, "Both rating and comment are required");
      // }
  
          const newReview = new Review({          
              rating: rating,
              comment: comment
          });

          newReview.author = req.user._id;           // current logged in user can post a review
         
         console.log(newReview); 


        listing.reviews.push(newReview);
  
        await newReview.save();
        await listing.save();

        req.flash("success","New Review Created");

        res.redirect(`/listings/${id}`);
  
    } catch (err) {
        next(err);
    }
  };

// NO need to explicitly set the createdAt field when creating a new review since it's already handled by the schema default. 




  module.exports.destroyReview = async(req,res,next)=>{
  
    try{
    
      let {id,reviewId} = req.params;
    
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}}); //here we pull & delete ,as our reviewId matches with reviews array in listing 
    await Review.findByIdAndDelete(reviewId);      //delete from database
     
    req.flash("success","Review Deleted");
  
  
      res.redirect(`/listings/${id}`);
    
    }
     catch (err) {
      next(err);
    } 
    
    };  