const { Router } = require("express");
const {
  getRequestValidations,
  postRequestValidations,
  putRequestValidations,
  deleteRequestValidations
} = require("../middlewares/project/index");
const {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
  projectById
} = require("../controllers/projects");

const router = Router()

router.get("/", getAllProjects);
router.get("/:id", getRequestValidations, projectById);
router.post("/", postRequestValidations, createProject);
router.put("/:id", putRequestValidations, updateProject);
router.delete("/:id", deleteRequestValidations, deleteProject);

/**
 * @swagger
 *  {
 *      "components": {
 *          "schemas": {
 *              "User": {
 *                  "type": "object",
 *                  "properties": {
 *                      "name": {
 *                          "type": "string",
 *                          "description": "Name project"
 *                      },
 *                      "description": {
 *                          "type": "string",
 *                          "description": "description project"
 *                      },
 *                      "userId": {
 *                          "type": "string",
 *                          "description": "Creator user Id"
 *                      },
 *                      "status":{
 *                          "type": "string",
 *                          "description": "Proyect status"
 *                      }
 *                  },
 *                  "required": [  "name", "decription", "userId", "status"],
 *                  "example": {
 *                      "name": "Challenge Esto Es",
 *                      "description": "Api created for Challenge Backend Esto Es",
 *                      "userId": "1",
 *                      "status": "developing"
 *                  }
 *              }
 *          }
 *      }
 *  }
 */

/**
 * @swagger
 *  "/projects": {
 *      "get": {
 *          "summary": "List all projects",
 *          "tags": ["Project"],
 *          "parameters": [
 *              {
 *                  "name": "page",
 *                  "in": "query",
 *                  "description": "Page number",
 *                  "type": "integer"
 *              }
 *          ],
 *          "responses": {
 *              "200": {"description": "successful"},
 *              "content": {
 *                  "application/json": {
 *                      "schema": {
 *                          "type": "object",
 *                          "items": {
 *                              "$ref": "#/components/schemas/Projects"
 *                           }
 *                      }
 *                  }
 *              },
 *              "404": {"description": "Project not found"},
 *              "500": {"description": "Internal server error"}
 *           }
 *       }
 *  }
 * 
 */

/**
 * @swagger
 * {
 *  "/projects/{id}": {
 *      "get": {
 *          "summary": "Get a project by id",
 *          "tags": ["Project"],
 *          "parameters": [
 *              {
 *                  "name": "id",
 *                  "in": "path",
 *                  "description": "This id of the project",
 *                  "required": false,
 *                  "type": "integer",
 *                  "example": 1
 *              }
 *          ],
 *          "responses": {
 *              "200": {
 *                  "description": "Successful operation"
 *              },
 *              "404": {
 *                  "description": "project not found"
 *              },
 *              "500": {
 *                  "description": "Internal server error"
 *              }
 *          } 
 *      }
 *  }
 * }
 */

/**
 * @swagger
 * {
 *  "/projects/findName/{name}": {
 *    "get": {
 *      "summary": "Get a project by name",
 *      "tags": ["Project"],
 *      "parameters": [
 *        {
 *          "name": "name",
 *          "in": "path",
 *          "description": "The name of the project",
 *          "type": "string",
 *          "example": "challenge Esto Es"
 *        }
 *      ],
 *      "responses": {
 *        "200": {
 *          "description": "Successful operation"
 *        },
 *        "404": {
 *          "description": "Project not found"
 *        },
 *        "500": {
 *          "description": "Internal server error"
 *        }
 *      }
 *    }
 *  }
 * }
 */

/**
 * @swagger
 * {
 *  "/projects": {
 *    "post": {
 *      "summary": "Create a project",
 *      "requestBody": {
 *        "content": {
 *          "application/json": {
 *            "schema": {
 *              "type": "object",
 *              "$ref": "#/components/schemas/Projects"
 *            }
 *          }
 *        }
 *      },
 *      "tags": ["Project"],
 *      "responses": {
 *        "200": {
 *          "description": "Project has been created"
 *        },
 *        "500": {
 *          "description": "Internal server error"
 *        }
 *      }
 *    }
 *  }
 * }
 */

/**
 * @swagger
 * {
 *  "/projects/{id}": {
 *    "post": {
 *      "summary": "Update a project by id",
 *      "parameters": [
 *        {
 *          "name": "id",
 *          "in": "path",
 *          "description": "The id of the project",
 *          "type": "integer"
 *        }
 *      ],
 *      "requestBody": {
 *        "required": "true",
 *        "content": {
 *          "application/json": {
 *            "schema": {
 *              "type": "object",
 *              "$ref": "#/components/schemas/Projects"
 *            }
 *          }
 *        }
 *      },
 *      "tags": ["Project"],
 *      "responses": {
 *        "200": {
 *          "description": "Project has been update"
 *        },
 *        "404": {
 *          "description": "Project not found"
 *        },
 *        "500": {
 *          "description": "Internal server error"
 *        }
 *      }
 *    }
 *  }
 * }
 */

/**
 * @swagger
 * {
 *  "/projects/{id}/assing": {
 *    "post": {
 *      "summary": "Update a project by id",
 *      "parameters": [
 *        {
 *          "name": "id",
 *          "in": "path",
 *          "description": "The id of the project",
 *          "type": "integer"
 *        }
 *      ],
 *      "requestBody": {
 *        "content": {
 *          "application/json": {
 *            "schema": {
 *              "type": "object"
 *            }
 *          }
 *        }
 *      },
 *      "tags": ["Project"],
 *      "responses": {
 *        "200": {
 *          "description": "Assing has been complete"
 *        },
 *        "404": {
 *          "description": "Project not found"
 *        },
 *        "500": {
 *          "description": "Internal server error"
 *        }
 *      }
 *    }
 *  }
 * }
 */

/**
 * @swagger
 * {
 *  "/projects/{id}": {
 *    "delete": {
 *      "summary": "Delete a project by id",
 *      "parameters": [
 *        {
 *          "name": "id",
 *          "in": "path",
 *          "description": "The id of the project",
 *          "type": "integer"
 *        }
 *      ],
 *      "tags": ["Project"],
 *      "responses": {
 *        "200": {
 *          "description": "Project has been delete"
 *        },
 *        "404": {
 *          "description": "Project not found"
 *        },
 *        "500": {
 *          "description": "Internal server error"
 *        }
 *      }
 *    }
 *  }
 * }
 */

module.exports = router