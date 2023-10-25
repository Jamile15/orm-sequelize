
# Minha API Express com ORM Sequelize

Bem-vindo ao meu projeto de exemplo usando o ORM Sequelize em uma API Express! Este projeto demonstra como usar o Sequelize para criar, migrar e consultar um banco de dados SQL com facilidade em uma API Express. Siga as etapas abaixo para configurar e executar o projeto em sua máquina.

## Instalação

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) e o [PostgreSQL](https://www.postgresql.org/) instalados em seu sistema. Clone este repositório e siga as etapas abaixo.

1. **Instale as dependências do Node.js:**

   ```bash
   npm install

   
Para obter mais informações sobre o Sequelize, consulte a [documentação oficial](https://sequelize.org/docs/v6/core-concepts/model-basics/).

## Comandos CLI

| Comando                                   | Descrição                                                  |
| ----------------------------------------- | ---------------------------------------------------------- |
| `sequelize db:migrate`                    | Executa todas as migrações pendentes para atualizar o banco de dados. |
| `sequelize db:migrate:schema:timestamps:add` | Atualiza uma tabela de migração para incluir marcação de data/hora. |
| `sequelize db:migrate:status`             | Exibe o status de todas as migrações.                       |
| `sequelize db:migrate:undo`               | Reverte a migração mais recente do banco de dados.         |
| `sequelize db:migrate:undo:all`           | Reverte todas as migrações.                                |
| `sequelize db:seed`                       | Inicializa um seeder específico.                            |
| `sequelize db:seed:undo`                  | Deleta os dados do banco de dados gerados por um seeder.   |
| `sequelize db:seed:all`                   | Inicializa todos os seeders.                               |
| `sequelize db:seed:undo:all`              | Deleta todos os dados do banco de dados gerados pelos seeders. |
| `sequelize db:create`                     | Cria um banco de dados com uma configuração específica.    |
| `sequelize db:drop`                       | Exclui o banco de dados especificado na configuração.       |
| `sequelize init`                          | Inicializa um projeto Sequelize.                            |
| `sequelize init:config`                   | Inicializa as configurações do Sequelize.                   |
| `sequelize init:migrations`               | Inicializa as migrações do Sequelize.                       |
| `sequelize init:models`                   | Inicializa as models do Sequelize.                          |
| `sequelize init:seeders`                  | Inicializa os seeders do Sequelize.                         |
| `sequelize migration:generate`            | Gera um novo arquivo de migração do banco de dados.        |
| `sequelize model:generate`                | Gera uma nova model e sua respectiva migração do banco de dados. |
| `sequelize seed:generate`                 | Gera um novo arquivo de seeder para popular o banco de dados. |
