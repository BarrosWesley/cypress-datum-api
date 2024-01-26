
const method = "POST";
let endpoint = "/login";

const massaTest = [
    {scenario: "Validar retorno da consulta - StatusCode 200",endpoint: `${endpoint}`,userAuthentication: true,expectedStatusCode: 200},
    {scenario: "Validar StatusCode 400 - Not Found",endpoint: `${endpoint}`,userAuthentication: true,expectedStatusCode: 400,}
]
describe("LOGIN - SUCCESSFUL ", () => {
    massaTest.forEach((data) => {
        it(`${method} LOGIN - SUCCESSFUL - ` + data.scenario, function () {

            cy.api({
                method: method,
                url: data.endpoint,
                body: {
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
                },
                failOnStatusCode: false,
            }).then((respReq) => {
                if (data.scenario === "Validar retorno da consulta - StatusCode 200") {
                    expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                } else if (data.scenario === "Validar StatusCode 400 - Not Found") {
                    cy.log("Não se aplica")
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
                    "email": "peter@klaven"
                },
                failOnStatusCode: false,
            }).then((respReq) => {
                if (data.scenario === "Validar retorno da consulta - StatusCode 200") {
                   cy.log("não se aplica")
                } else if (data.scenario === "Validar StatusCode 400 - Not Found") {
                    expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                }
            });
        });
    });
});
