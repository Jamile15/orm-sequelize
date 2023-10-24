const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 5000

app.get('/teste', (req, res) => res
.status(200)
.send({mensagem: 'boas vindad a API'
}))

app.listen(port, ()=> console.log(`servidor está rodando na porta ${port}`))

module.exports = app;