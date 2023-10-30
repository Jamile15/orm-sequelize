const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Customer API',
            description: 'Customer API Information',
            contact: {
                name: 'Amazing Developer'
            },
            server: ['http://localhost:5001']
        }
    },
    apis: ['api/routes/pessoasRoute.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };
