/*************************************************************************
 * Objetivo: Arquivo responsável pela padronização de todas as mensagens da API projetos filmes.
 * Data: 01/10/2025
 * Autor: Carlos Eduardo
 * Versão: 1.0
 **************************************************************************************/

const dataAtual = new Date()

/**************************MENSAGENS DE PADRONIZAÇÃO DO PROJETO***********************************/
const MESSAGE_HEADER = {  
                            development: 'Carlos Eduardo',
                            api_description: 'API para manipular dados da locadora de filmes',
                            version: '1.0.10.25',
                            request_date: dataAtual.toLocaleDateString(),
                            status:   Boolean,
                            status_code: Number,
                            response: {}
}

/*****************************MENSAGENS DE ERROS DO PROJETO***************************************/



/****************************MENSAGENS DE SUCESSOS DO PROJETO*************************************/
const MESSAGE_SUCESS_REQUEST = {status: true, status_code: 200, message: 'Requisição bem-sucedida!'}


module.exports = {
    MESSAGE_HEADER,
    MESSAGE_SUCESS_REQUEST
}