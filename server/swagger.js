// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Quartzion API',
      version: '1.0.0',
      description: 'API documentation for Quartzion Engineering',
    },
    servers: [
      {
        // UPDATE FOR PROD
        url: 'http://localhost:3333/api',
        description: 'Local server'
      }
    ],
  },
  apis: ['./routes/api/*.js', './controllers/*.js', './models/*.js'], 
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs
};
