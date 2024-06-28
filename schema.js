// for server side validation

const Joi = require('joi');                     

const listingSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
   
    price: Joi.number().min(0).required(), // Price must be a non-negative number
    location: Joi.string().required(),
    country: Joi.string().required(),

    
    category:Joi.string().required(),
});





const reviewSchema = Joi.object({
    rating: Joi.number().min(1).max(5).optional(), // Make rating optional
    comment: Joi.string().optional(),
});




const UserLoginschema = Joi.object({
    username: Joi.string().trim().min(5).max(30).pattern(new RegExp('^[a-zA-Z0-9_]+$')).required().messages({
        
        'string.min': 'Username must be at least 5 characters long.',
        'string.max': 'Username must be less than or equal to 30 characters long.',
        'string.pattern.base': 'Username can only contain letters, numbers, underscores',
        
    }),

    email: Joi.string().email().required().pattern(new RegExp('^[a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail|outlook|aol|icloud)\\.com$'))
    .messages({
        'string.pattern.base': 'Email must be a valid email address.',
    }),

    password: Joi.string().min(8).required()
        .pattern(new RegExp('(?=.*[!@#$%^&*_/<>()])'))
        .messages({
            'string.min': 'Password must be at least 8 characters long.',
            'string.pattern.base': 'Password must contain at least one special character.',
              }),
  });
  



module.exports = {
         listingSchema,reviewSchema,UserLoginschema
};