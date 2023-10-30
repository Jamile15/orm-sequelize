const { Router } = require("express")
const PessoaController = require ('../controllers/PessoaController')

const router = Router()


 /**
 * @swagger
 * /pessoas:
 *   get:
 *     summary: Rota de teste
 *     description: Rota de teste para verificar o funcionamento da API.
 *     responses:
 *       '200':
 *         description: Sucesso
 *       '400':
 *         description: Erro na solicitação
 */
router.get('/pessoas', PessoaController.pegaTodasAsPessoas)

module.exports = router