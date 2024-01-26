import resp_200 from "../fixtures/response/recurso/resp_200.json";

const method = "GET";
let endpoint = "/unknown";

const massaTest = [
    {scenario: "Validar retorno da consulta - StatusCode 200",endpoint: `${endpoint}`,userAuthentication: true,expectedStatusCode: 200},
    {scenario: "Validar StatusCode 404 - Not Found",endpoint: `Teste${endpoint}`,userAuthentication: true,expectedStatusCode: 404,}
]

describe("LIST <RESOURCE>", () => {
    massaTest.forEach((data) => {
        it(`${method}/unknown ` +  data.scenario, function () {

                cy.api({
                    method: method,
                    url: `${data.endpoint}`,
                    failOnStatusCode: false,
                }).then((respReq) => {
                    if (data.scenario === "Validar retorno da consulta - StatusCode 200")
                     {
                        expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                        cy.compareData(respReq.body, resp_200.resource);    
                    } else if (data.scenario === "Validar StatusCode 404 - Not Found") {
                        expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                    }
                });
            }
        );
    });
});
describe("SINGLE <RESOURCE>", () => {
    massaTest.forEach((data) => {
        it(`${method} Single resource -  ` + data.scenario, function () {

            cy.api({
                method: method,
                url: `${data.endpoint}/2`,
                failOnStatusCode: false,
            }).then((respReq) => {
                if (data.scenario === "Validar retorno da consulta - StatusCode 200") {
                    expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                    cy.compareData(respReq.body, resp_200.single_resource);
                } else if (data.scenario === "Validar StatusCode 404 - Not Found") {
                    expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                }
            });
        });
    });
});
describe("SINGLE <RESOURCE> NOT FOUND", () => {
    massaTest.forEach((data) => {
        it(`${method} Single resource NOT FOUND-  ` + data.scenario, function () {

            cy.api({
                method: method,
                url: `${data.endpoint}/23`,
                failOnStatusCode: false,
            }).then((respReq) => {
                if (data.scenario === "Validar retorno da consulta - StatusCode 200") {
                    cy.log("Não se aplica")
                } else if (data.scenario === "Validar StatusCode 404 - Not Found") {
                    expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                }
            });
        });
    });
});