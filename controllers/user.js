const User= require("../models/user.js");



// SIGNUP FORM RENDER GET REQUEST
module.exports.renderSignupForm = (req,res)=>{

  res.render("./users/signup.ejs");
};




// SIGNUP FORM SUBMIIT POST REQUEST
module.exports.userSignup = async(req,res,next)=>{

    try{

  
    const {username,email,password} =req.body;

    let newUser =  new User({
        username:username,
        email:email,
});
    const registeredUser= await User.register(newUser,password);

        // console.log(registeredUser);

           req.login(registeredUser,(err)=>{                         //LOGIN after SIGNUP automatically
                   if(err){
                  return next(err);
              }

              req.flash("success", "Congratulations! Your account has been created. Start exploring now.");
              res.redirect("/listings");
      
         });
       
}

 catch (err) {                            // will work when user signup with the existing username in database
    req.flash("error", err.message);
    res.redirect("/signup");

  }

}; 



// LOGIN FORM RENDER GET REQUEST
module.exports.renderLoginForm = (req,res)=>{
    res.render("./users/login.ejs");
  };



  // LOGIN FORM SUBMIT POST REQUEST
module.exports.login = async(req,res)=>{

  req.flash("success","Welcome back! You're now logged in.");
 
   let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
 };


 

 module.exports.userLogout = (req,res)=>{
  req.logout((err)=>{
         if(err){
        next(err);
       }

       req.flash("success","You've been logged out. Come back soon!");
       res.redirect("/listings");
})

};

