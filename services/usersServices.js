const {User} = require("../models");
const appError = require("../errors/appError");

const getUsers = async () => {
  try {
    const findUsers = await User.findAll();
    return findUsers;
  } catch(error) {
    throw new appError()
  }
};

const findUserById = async (id) => {
  try {
    const findUser = await User.findByPk(id);
    if (!findUser) {
      throw new appError()
    }
    return findUser;
  } catch(error) {
    throw new appError()
  }
};

module.exports = {
  getUsers,
  findUserById
}