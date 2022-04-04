const {Router} = require("express");
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
                            }
 *                      }
 *                  }
 *              },
 *              "404": {"description": "Project not found"},
 *              "500": {"description": "Internal server error"}
 *           }
        }
 *  }
 * 
 */

module.exports = router