const projectsServices = require("../services/projectsServices")
const Success = require("../handlers/successHandler");

const createProject = async (req, res, next) => {
  console.log("Pase por aqui")
  const { name, description, projectManager, userId, status } = req.body;
  try {
    const newProject = await projectsServices.create(
      name,
      description,
      projectManager,
      userId,
      status
    );

    res.status(200).json({
      status: 200,
      msg: `Project ${name} has been created`,
      data: newProject
    });
  } catch (error) {
    next(error)
  }
};

const getAllProjects = async (req, res, next) => {
  
  try {
    const page = +req.query.page;
    const projects = await projectsServices.getAll(req, page);
    
    res.status(200).json({
      status: 200,
      data: projects,
      previousPage: projects.previousPage,
      nextPage: projects.nextPaage
    })
  } catch (error) {
    next(error)
  }
};

const updateProject = async(req, res, next) => {
  const {id} = req.params;
  const {name, description, projectManager, userId, status} = req.body;
  try {
    const response = await projectsServices.update(
      id,
      name,
      description,
      projectManager,
      userId,
      status
    )
    return res.json(new Success(response))
  } catch(error){
    next()
  }
};

const deleteProject = async(req, res, next) => {
  const {id} = req.params;
  try {
    await projectsServices.deleteById(id);
    res.json(new Success(`Project id ${id} successfully deleted!`));
  } catch(error) {
    next()
  }
};

const projectById = async(req, res, next) => {
  const {id} = req.params;
  try {
    const response = await projectsServices.findProjectById(id);
    res.json(new Success(response));
  } catch(error){
    next()
  }
};

module.exports = {
  createProject,
  getAllProjects,
  updateProject,
  deleteProject,
  projectById
}