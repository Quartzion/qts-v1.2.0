require('dotenv').config();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const VITE_PORT = process.env.VITE_PORT

// Determine API base URL
const isProd = process.env.NODE_ENV === 'production';

// Prefer explicit env var, fallback to hardcoded defaults
const serverUrl = isProd
  ? process.env.SWAGGER_BASE_URL || 'https://quartzion-api.onrender.com/api'
  : `http://localhost:${VITE_PORT}/api`;

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
        url: serverUrl,
        description: isProd ? 'Production server' : 'Local development server',
      },
    ],
  },
  apis: ['./routes/api/*.js', './controllers/*.js', './models/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
