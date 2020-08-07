const {check} = require('express-validator');

exports.userRegisterValidator=[
    check('name')
    .not()
    .isEmpty()
    .withMessage('Name is Required'), 
    check('email')    
    .isEmail()
    .withMessage('Must be a valid Email'), 
    check('password')
    .isLength({min: 6})
    .withMessage('Password must be at least 6 char long'), 
];
exports.userLoginValidator=[
 
    check('email')    
    .isEmail()
    .withMessage('Must be a valid Email'), 
    check('password')
    .isLength({min: 6})
    .withMessage('Password must be at least 6 char long'), 
];