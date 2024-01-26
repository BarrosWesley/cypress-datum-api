# testes-automatizado-de-API
Repositório criado para o projeto PagoNXT Getnet


# Testes do regres.in

Este repositório contém testes automatizados para as funcionalidades de GET, PUT, PATCH, POST E DELETE usando o framework Cypress.

## Pré-requisitos

Antes de executar os testes, certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org) (versão 12 ou superior)
- [Cypress](https://www.cypress.io) (instalado globalmente ou localmente no projeto, versão 12.12 ou superior)

## Configuração

Siga as etapas abaixo para configurar e executar os testes:

1. Clone este repositório para sua máquina local:

   ```bash
   git clone <URL do repositório>

2. Navegue até o diretório do projeto:
    
    ```bash
    cd nome-do-projeto

3. Instale as dependências do projeto:
   
    ```bash
    npm install

4. Inicie o Cypress:
    ```bash
    npx cypress open

No Cypress Test Runner, clique no arquivo de teste de sua preferência para executá-lo.

## Estrutura do Projeto
O diretório cypress/e2e estão os arquivos de teste.
O diretório cypress/support/commands estão os métodos personalizados.
O diretório cypress/fixtures/response estão os json utilizados nas validações dos testes.

## Relatórios
Para gerar os relatórios se faz necessário a JDK do java e o comando para gerar o relatório é:
    ```bash
    allure serve

Os relatórios de testes são gerados automaticamente pelo Cypress e estão localizados no diretório allure-results.



## Suporte
Se você encontrar algum problema ou tiver alguma dúvida, sinta-se à vontade para abrir uma issue neste repositório.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir pull requests com melhorias, correções de bugs ou novos recursos.

## Licença
Este projeto está licenciado sob a licença MIT.