import resp_200 from "../fixtures/response/users/resp_200.json";

const method = "GET";
let endpoint = "/users";

const massaTest = [
    {scenario: "Validar retorno da consulta - StatusCode 200",endpoint: `${endpoint}`,userAuthentication: true,expectedStatusCode: 200},
    {scenario: "Validar StatusCode 404 - Not Found",endpoint: `Teste${endpoint}`,userAuthentication: true,expectedStatusCode: 404,}
]
describe("LIST USERS", () => {
    massaTest.forEach((data) => {
        it(`${method} LIST USERS - ` + data.scenario, function () {

            cy.api({
                method: method,
                url: `${data.endpoint}?page=2`,
                failOnStatusCode: false,
            }).then((respReq) => {
                if (data.scenario === "Validar retorno da consulta - StatusCode 200") {
                    expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                    cy.compareData(respReq.body, resp_200.list_user);
                } else if (data.scenario === "Validar StatusCode 404 - Not Found") {
                    expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                }
            });
        });
    });
});

describe("SINGLE USER", () => {
    massaTest.forEach((data) => {
        it(`${method} /2 ` + data.scenario, function () {
            
                cy.api({
                    method: method,
                    url: `${data.endpoint}/2`,
                    failOnStatusCode: false,
                }).then((respReq) => {
                    if (data.scenario === "Validar retorno da consulta - StatusCode 200")
                     {
                        expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                        cy.compareData(respReq.body, resp_200.single_user);    
                    } else if (data.scenario === "Validar StatusCode 404 - Not Found") {
                        expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                    }
                });
            }
        );
    });
});
describe("SINGLE USER NOT FOUND", () => {
    massaTest.forEach((data) => {
        it(`${method} /23 ` +  data.scenario, function () {

                cy.api({
                    method: method,
                    url: `${data.endpoint}/23`,
                    failOnStatusCode: false,
                }).then((respReq) => {
                   if (data.scenario === "Validar StatusCode 404 - Not Found")
                    {
                        expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                    } else
                    {
                        cy.log("Outro cenário não se aplica")
                    }
                });
            }
        );
    });
});
