
const method = "POST";
let endpoint = "/users";

const massaTest = [
    {scenario: "Validar retorno da consulta - StatusCode 201",endpoint: `${endpoint}`,userAuthentication: true,expectedStatusCode: 201},
    {scenario: "Validar StatusCode 404 - Not Found",endpoint: `Nao passa${endpoint}/tes`,userAuthentication: true,expectedStatusCode: 404,}
]
describe("USERS - CREATE ", () => {
    massaTest.forEach((data) => {
        it(`${method} CREATE - ` + data.scenario, function () {

            cy.api({
                method: method,
                url: data.endpoint,
                body: {
                    "name": "morpheus",
                    "job": "leader"
                },
                failOnStatusCode: false,
            }).then((respReq) => {
                if (data.scenario === "Validar retorno da consulta - StatusCode 201") {
                    expect(respReq.status).to.deep.equal(data.expectedStatusCode)
                    expect(respReq.body.name).to.deep.equal("morpheus")
                    expect(respReq.body.job).to.deep.equal("leader")
                } else if (data.scenario === "Validar StatusCode 404 - Not Found") {
                    //expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                    cy.log("não deveria passar pois a rota esta errada")
                }
            });
        });
    });
});