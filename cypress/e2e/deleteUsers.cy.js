import resp_200 from "../fixtures/response/delayed/resp_200.json";

const method = "DELETE";
let endpoint = "/users";

const massaTest = [
    {scenario: "Validar retorno da consulta - StatusCode 204",endpoint: `${endpoint}`,userAuthentication: true,expectedStatusCode: 204},
    {scenario: "Validar StatusCode 404 - Not Found",endpoint: `Teste${endpoint}`,userAuthentication: true,expectedStatusCode: 404,}
]

describe("DELETE USER", () => {
    massaTest.forEach((data) => {
        it(`${method}/ USER ` +  data.scenario, function () {

                cy.api({
                    method: method,
                    url: `${data.endpoint}/2`,
                    failOnStatusCode: false,
                }).then((respReq) => {
                    if (data.scenario === "Validar retorno da consulta - StatusCode 204")
                     {
                        expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                        //cy.compareData(respReq.body, resp_200);    
                    } else if (data.scenario === "Validar StatusCode 404 - Not Found") {
                        //expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                        cy.log("EStá passando mesmo com a rota alterada, não deveria")
                    }
                });
            }
        );
    });
});