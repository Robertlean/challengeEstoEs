const { Project } = require("../models");
const db = require("../models");
const Op = db.Sequelize.Op;
const appError = require("../errors/appError");

const create = async (name, description, projectManager, userId, status) => {
  try {
    const newProject = await Project.create({
      name,
      description,
      projectManager,
      userId,
      status
    });
    return newProject;
  } catch(error) {
    throw new appError();
  }
};

const getAll = async (name) => {
  let condition = name ? { name: {[Op.like]: `%${name}%`}} : null;

  try {
    const projects = await Project.finAll({
      where: condition,
      include: db.User,
      order: [["createdAt", "DESC"]]
    });
    return projects;
  } catch(error) {
    throw new appError();
  }
};

const update = async(
  id,
  name,
  description,
  projectManager,
  userId,
  status
) => {
  try {
    const findProject = await Project.findByPk(id);
    if (!findProject) {
      throw new appError("Project not found!", 404)
    }

    findProject.name = name;
    findProject.description = description;
    findProject.projectManager = projectManager;
    findProject.userId = userId;
    findProject.status = status;

    return await findProject.save();
  } catch(error) {
    throw new appError();
  }
};

const deleteById = async(id) => {
  try {
    const findProject = await Project.findByPk(id);
    return await findProject.destroy()
  } catch(error) {
    throw new appError();
  }
};

const findProjectById = async(id) => {
  try {
    const findProject = await Project.findByPk(id);
    if(!findProject) {
      throw new appError();
    }
  } catch(error) {
    throw new appError();
  }
};

module.exports = {
  create,
  getAll,
  update,
  deleteById,
  findProjectById
}