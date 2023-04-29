export class loginPage{

    usernameTextbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
    passwordTextbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
    loginButton = '.oxd-button';

    dashboardTab = ':nth-child(8) > .oxd-main-menu-item';

    login(username, password)
    {
        cy.get(this.usernameTextbox).clear().type(username);
        cy.get(this.passwordTextbox).clear().type(password);
        
        cy.get(this.loginButton).click();
        cy.get(this.dashboardTab)
        .should('contain', 'Dashboard')
        .should('be.visible');
    }
}