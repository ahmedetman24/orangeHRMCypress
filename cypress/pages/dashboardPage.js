export class DashboardPage
{
    userDropDownList = '.oxd-userdropdown-tab > .oxd-icon';
    logoutButton = ':nth-child(4) > .oxd-userdropdown-link';

    logout()
    {
        cy.get(this.userDropDownList).click();
        cy.get(this.logoutButton).click();
        cy.wait(5000);
        cy.url().should('contain','login');
        //cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
    }
}