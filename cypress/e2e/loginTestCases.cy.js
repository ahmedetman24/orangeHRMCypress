import { loginPage } from "../pages/loginPage"
import { DashboardPage } from "../pages/dashboardPage"

describe('Login Test Cases', function() {
    
    let data; //closure variable
    before(() => {
        cy.fixture('loginData').then((fData) => {
            data = fData;
        });
    });

    const LoginPage = new loginPage();
    const dashboardPage = new DashboardPage();

    it('Login with valid credentials', () => {

        for (let i = 0; i < data.length; i++) {
            cy.visit(data[i].url);
            LoginPage.login(data[i].username, data[i].password);
            cy.wait(5000)

            // logout
            dashboardPage.logout();


        }
    });
});