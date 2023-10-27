const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(bodyParser.json());

const port = 5001;

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
    apis: ['api/index.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /teste:
 *   get:
 *     summary: Rota de teste
 *     description: Rota de teste para verificar o funcionamento da API.
 *     responses:
 *       '200':
 *         description: Sucesso
 *       '400':
 *         description: Erro na solicitação
 */
app.get('/teste', (req, res) => {
    res.status(200).send({ mensagem: 'Boas vindas à API' });
});

/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Adicionar um novo cliente
 *     description: Rota para adicionar um novo cliente à API.
 *     parameters:
 *       - name: cliente
 *         description: Dados do cliente a serem adicionados.
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             nome:
 *               type: string
 *             email:
 *               type: string
 *     responses:
 *       '201':
 *         description: Cliente adicionado com sucesso.
 *       '400':
 *         description: Erro na solicitação.
 */
app.post('/clientes', (req, res) => {
    // Aqui você pode adicionar a lógica para criar um novo cliente com os dados do corpo da solicitação.
    // Por exemplo, você pode armazenar os dados em um banco de dados.
    const novoCliente = req.body;
    // Simulando o armazenamento do cliente (substitua por sua lógica real).
    // Aqui, estamos apenas retornando os dados do cliente como resposta.
    res.status(201).json(novoCliente);
});

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

module.exports = app;
