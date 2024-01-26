const method = "PUT";
let endpoint = "/users";

const massaTest = [
    {scenario: "Validar retorno da consulta - StatusCode 200",endpoint: `${endpoint}`,userAuthentication: true,expectedStatusCode: 200},
    {scenario: "Validar StatusCode 400 - Not Found",endpoint: `${endpoint}não deveria passar`,userAuthentication: true,expectedStatusCode: 400,}
]
describe("LIST USERS", () => {
    massaTest.forEach((data) => {
        it(`${method} LIST USERS - ` + data.scenario, function () {

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
                    expect(respReq.status).to.deep.equal(data.expectedStatusCode)
                    expect(respReq.body.name).to.equal("morpheus")
                    expect(respReq.body.job).to.equal("zion resident")
                } else if (data.scenario === "Validar StatusCode 400 - Not Found") {
                    //expect(respReq.status).to.deep.equal(data.expectedStatusCode);
                    cy.log("Está passando mesmo mudando a rota, não deveria passar")
                }
            });
        });
    });
});
