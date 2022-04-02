const {validationResult} = require("express-validator");
const appError = require("../errors/appError");

const validResult = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        throw new appError("Validation errors", 400, errors.mapped())
    }
    next()
}

module.exports = {
    validationResult: validResult
}