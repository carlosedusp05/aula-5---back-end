/*************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD de filme no Banco de Dados MySQL.
 * Data: 01/10/2025
 * Autor: Carlos Eduardo
 * Versão: 1.0
 **************************************************************************************/

/**************************************************************************************
 *  Dependências do nodepara Banco de Dados Relacional
 *          sequelize  -> Foi uma biblioteca para acessoa banco de dados
 *          Prisma     -> É uma biblioteca atual para acesso e manipulação de dados, utilizando SQL ou ORM (MySQL, PostgreSQL, SQLServer, Oracle) 
 *          Knex       -> É uma biblioteca atual para acesso e manipulação de dados, utilizando SQL (MySQL)
 * 
 * Dependência do nodepara Banco de Dados Não Relacional
 *          Mongose    -> É uma biblioteca para acesso a banco de dados não relacional (MongoDB)
 * 
 * Instalação do Prtisma
 * npm install prisma           --save             -> Realiza a conexão com o Banco de Dados
 * npm install @prisma/client   --save             -> Permite executar scripts SQL no Banco de Dados
 * npx prisma init                                 -> Inicializa o prisma no projeto(.env, prisma, etc)
 * npx prisma migrate dev                          -> Permite sicronizar o Prisma com o BD, Modelar o BD conforme as configurações do ORM.
 *                                                    CUIDADO: esee comando da um reset no BD
 * npx prisma migrate reset                        -> Realiza o reset do database
 * npx prisma generate                             -> Realiza apenas o sincronismo com o BD
 * 
 *  $queryRawUnsafe()   -> Permite executar apenas scripts sql que retornam dados do Banco de Dados (SELECT), permite também executar um script SQL através de uma variável 
 * 
 *  $executeRawUnsafe() -> Permite executar scripts SQL que não retornam dados do Banco de Dados (INSERT, DELETE, UPDATE)
 * 
 *  $queryRaw()   -> Permite executar apenas scripts sql que retornam dados do Banco de Dados (SELECT), permite APENAS executar um script SQL 
 *  direto no método. Permite também aplicar segurança contra SQL injection
 * 
 *  $executeRaw() -> Permite executar scripts SQL que não retornam dados do Banco de Dados (INSERT, DELETE, UPDATE) permite APENAS executar um script SQL 
 *  direto no método. Permite também aplicar segurança contra SQL injection.
 * 
 ******************************************************************************************/

//Import da biblioteca do PrismaClient
const {PrismaClient} = require('../../generated/prisma')
// const { PrismaClient } = require('@prisma/client')

//Cria um objeto do prisma client para manipular os scripts SQL 
const prisma = new PrismaClient()


//Retorna todos filmes do banco de dados
const getSelectAllFilms = async function () {
try {
    let sql = 'select * from tbl_filme order by id desc'

    //Executa no Banco de Dados o script sql
    let result = await prisma.$queryRawUnsafe(sql)

    if(result.length > 0)
        return result
    else
        return false
    
} catch (error) {
    return false     
}



}
//Retorna um filme filtrando pelo id do do banco
const getSelectByIdFilms = async function(id) {
    
}

//Insere um filme no banco de dados
const setInsertFilms = async function(filme) {
    
}

//Atualiza um filme existente no banco de dados pelo id
const setUpdateFilms = async function(filme) {
    
}

//Apaga um filme existente no banco de dados filtrando pelo id
const setDeleteFilms = async function(id) {
    
}

module.exports = {
    getSelectAllFilms
}