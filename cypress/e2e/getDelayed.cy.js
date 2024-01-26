import resp_200 from "../fixtures/response/delayed/resp_200.json";

const method = "GET";
let endpoint = "/users";

const massaTest = [
    {scenario: "Validar retorno da consulta - StatusCode 200",endpoint: `${endpoint}`,userAuthentication: true,expectedStatusCode: 200},
    {scenario: "Validar StatusCode 404 - Not Found",endpoint: `Teste${endpoint}`,userAuthentication: true,expectedStatusCode: 404,}
]

describe("DELAYED RESPONSE", () => {
    massaTest.forEach((data) => {
        it(`${method}/DELAYED RESPONSE ` +  data.scenario, function () {

                cy.api({
                    method: method,
                    url: `${data.endpoint}?delay=3`,
                    failOnStatusCode: false,
                }).then((respReq) => {
                    if (data.scenario === "Validar retorno da consulta - StatusCode 200")
                     {
                        expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                        cy.compareData(respReq.body, resp_200);    
                    } else if (data.scenario === "Validar StatusCode 404 - Not Found") {
                        expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                    }
                });
            }
        );
    });
});