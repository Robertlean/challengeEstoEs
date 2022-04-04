const express = require('express');
const morgan = require('morgan');
const path = require('path');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const option = require('./doc/swaggerOptions')

require('dotenv').config();

const projectRouter = require('./routes/projects');
const usersRouter = require('./routes/users')

const app = express();

app.use(morgan('dev'));
app.use(express.json());

const swaggerSpec = swaggerJsDoc(option)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('/projects', projectRouter)
app.use('/users', usersRouter)

const port = parseInt(process.env.PORT) || 3000
app.set('port', port);
app.listen(port, () => console.log('app listening in port: ' + port))