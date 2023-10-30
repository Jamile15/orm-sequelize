const bodyParser = require ('body-parser')

module.exports = app => {
    app.use(bodyParser.json())

    /**
 * @swagger
 * /:
 *   get:
 *     summary: Rota de teste
 *     description: Rota de teste para verificar o funcionamento da API.
 *     responses:
 *       '200':
 *         description: Sucesso
 *       '400':
 *         description: Erro na solicitação
 */
    app.get('/', (req, res) => res.send('olaaaaaaa'))
}