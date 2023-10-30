const express = require('express');
const routes = require('./routes');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const app = express();

const port = 5001;

routes(app)

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
    apis: ['api/routes/index.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

module.exports = app;
