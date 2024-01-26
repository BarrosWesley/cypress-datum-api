
const method = "POST";
let endpoint = "/register";

const massaTest = [
    {scenario: "Validar retorno da consulta - StatusCode 200",endpoint: `${endpoint}`,userAuthentication: true,expectedStatusCode: 200},
    {scenario: "Validar StatusCode 404 - Not Found",endpoint: `${endpoint}`,userAuthentication: true,expectedStatusCode: 400,}
]
describe("REGISTER - SUCCESSFUL ", () => {
    massaTest.forEach((data) => {
        it(`${method} REGISTER - SUCCESSFUL - ` + data.scenario, function () {

            cy.api({
                method: method,
                url: data.endpoint,
                body: {
                    "email": "eve.holt@reqres.in",
                    "password": "pistol"
                },
                failOnStatusCode: false,
            }).then((respReq) => {
                if (data.scenario === "Validar retorno da consulta - StatusCode 200") {
                    expect(respReq.status).to.deep.equal(data.expectedStatusCode)
                    expect(respReq.body).to.have.property('id')
                    expect(respReq.body).to.have.property('token')
                } else if (data.scenario === "Validar StatusCode 404 - Not Found") {
                    cy.log("não deveria passar pois a rota esta errada")
                }
            });
        });
    });
});
describe("REGISTER - UNSUCCESSFUL ", () => {
    massaTest.forEach((data) => {
        it(`${method} REGISTER - UNSUCCESSFUL - ` + data.scenario, function () {

            cy.api({
                method: method,
                url: data.endpoint,
                body: {
                    "email": "eve.holt@reqres.in"
                },
                failOnStatusCode: false,
            }).then((respReq) => {
                if (data.scenario === "Validar retorno da consulta - StatusCode 200") {
                   cy.log("Não se aplica")
                } else if (data.scenario === "Validar StatusCode 404 - Not Found") {
                    expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                    expect(respReq.body).to.have.property('error')
                }
            });
        });
    });
});