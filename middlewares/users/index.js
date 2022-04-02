const {check} = require("express-validator");
const appError = require("../../errors/appError");
const userService = require("../../services/usersServices");
const {validationResult} = require("../commons");

const _idRequired = check("id", "Id is required").not().isEmpty();
const _idExist = check("id").custom(async (id = "") => {
    const idFound = await userService.findUserById(id);
    if (!idFound){
        throw new appError("The project doesn't exist in DB", 400);
    }
});

const getRequestValidations = [_idRequired, _idExist, validationResult];

module.exoprts = {
    getRequestValidations
};