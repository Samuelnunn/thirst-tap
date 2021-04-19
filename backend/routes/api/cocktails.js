const router = require('express').Router();

const asyncHandler = (handler) => (req, res, next) => 
    handler(req, res, next).catch(next);

router.get('/', asyncHandler( async(req, res, next) => {
    await fetch({
        
    })
}))