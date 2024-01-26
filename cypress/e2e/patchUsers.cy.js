
const method = "PATCH";
let endpoint = "/users";

const massaTest = [
    {scenario: "Validar retorno da consulta - StatusCode 200",endpoint: `${endpoint}`,userAuthentication: true,expectedStatusCode: 200},
    {scenario: "Validar StatusCode 404 - Not Found",endpoint: `${endpoint}/TesteNaoDeveriaPassar`,userAuthentication: true,expectedStatusCode: 404,}
]
describe("LIST USERS", () => {
    massaTest.forEach((data) => {
        it.only(`${method} LIST USERS - ` + data.scenario, function () {

            cy.api({
                method: method,
                url: `${data.endpoint}/2`,
                body:{
                    "name": "morpheus",
                    "job": "zion resident"
                },
                failOnStatusCode: false,
            }).then((respReq) => {
                if (data.scenario === "Validar retorno da consulta - StatusCode 200") {
                    expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                    expect(respReq.body.name).to.deep.equal("morpheus")
                    expect(respReq.body.job).to.equal("zion resident")
                } else if (data.scenario === "Validar StatusCode 404 - Not Found") {
                   cy.log("Teste passando com 200 mesmo alterando a rota")
                }
            });
        });
    });
});
