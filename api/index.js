const express = require('express');
const routes = require('./routes');
const { swaggerUi, swaggerDocs } = require('./swaggerConfig'); // Importe a configuração do Swagger


const app = express();

const port = 5001;

routes(app)



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

module.exports = app;
