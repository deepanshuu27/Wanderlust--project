const Listing = require("./models/listing");

const Review = require("./models/review");

module.exports.isLoggedIn = (req,res,next)=>{
   
  if(!req.isAuthenticated()){            //checks if the current user is authenticated (logged in).

             req.session.redirectUrl = req.originalUrl;
           
    req.flash("error","Please log in or sign up to continue!");
    return  res.redirect("/login");
   }

   

   next();
}  


module.exports.saveRedirectUrl = (req,res,next) =>{

   if(req.session.redirectUrl) {
      res.locals.redirectUrl = req.session.redirectUrl;
   }
         
   next();
}


module.exports.isOwner =async (req,res,next) =>{

           let {id}= req.params;
       
           let listing = await Listing.findById(id);                 // authorization for listing
            if(!listing.owner.equals(res.locals.currUser._id)){
            req.flash("error","You don't have permission to edit or delete");
            return  res.redirect(`/listings/${id}`);
           }
   

           next();
         };




         module.exports.isReviewAuthor =async (req,res,next) =>{

            
            let {id ,reviewId}= req.params;
        
            let review= await Review.findById(reviewId);                 // authorization for listing
             if(!review.author.equals(res.locals.currUser._id)){
            req.flash("error", "Unauthorized: You are not the review's author.");
               return  res.redirect(`/listings/${id}`);
            }
    
 
            next();
          };
 


