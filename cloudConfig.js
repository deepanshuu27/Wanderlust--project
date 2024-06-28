const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


// here we linked backened with cloudinary  & by default keys name are used only this..

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  

  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
         folder: 'wanderlust_God',
         allowedFormats:["png", "jpg", "jpeg" ,"gif"],
    },
  });
  

//   cloudinary.uploader.upload('giphy.gif', function(error, result) { 
//     console.log(result, error);
// });


module.exports= {cloudinary,storage};