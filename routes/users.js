const { Router } = require("express")
const { getRequestValidations } = require("../middlewares/users")
const { getAllUsers, userById } = require("../controllers/users")

const router = Router();

router.get("/", getAllUsers);
/* router.get("/:id", getRequestValidations, userById); */

/**
 * @swagger
 * {
 *  "components": {
 *    "schemas": {
 *      "User": {
 *        "type": "object",
 *        "properties": {
 *          "firstName": {
 *            "type": "string",
 *            "description": "User first name"
 *          },
 *          "lastName": {
 *            "type": "string",
 *            "description": "User last name"
 *          },
 *          "image": {
 *            "type": "string",
 *            "description": "Image User"
 *          }
 *        },
 *        "required": ["firstName", "lastName"],
 *        "example": {
 *          "firstName": "Carlos",
 *          "lastName": "Gonzalez"
 *        }
 *      }
 *    }
 *  }
 * }
 */

/**
 * @swagger
 * {
 *  "/users": {
 *    "get": {
 *      "summary": "list of all user",
 *      "tags": ["User"],
 *      "responses": {
 *        "200": {"description": "successful"},
 *        "content": {
 *          "application/json": {
 *            "schema": {
 *              "type": "object",
 *              "items": {
 *                "$ref": "#/components/schemas/users"
 *              }
 *            }
 *          }
 *        },
 *        "404": {
 *          "description": "Users not found"
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
 *  "/users/{id}": {
 *    "get": {
 *      "summary": "Get a user by id",
 *      "tags": ["User"],
 *      "parameters": [
 *        {
 *          "name": "id",
 *          "in": "path",
 *          "description": "THe id of the user",
 *          "type": "integer",
 *          "example": 1
 *        }
 *      ],
 *      "responses": {
 *        "200": {
 *          "description": "Successful operation"
 *        },
 *        "404": {
 *          "description": "User not found"
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