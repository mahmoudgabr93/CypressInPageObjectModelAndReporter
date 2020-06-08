/// <reference types="Cypress" />

class LoginPage {
    fillEmail(email) {
        const field = cy.get('[name="username"]');
        field.type(email, { force: true });
        return this;
    }

    fillPassword(password) {
        const field = cy.get('[name="password"]');
        field.type(password, { force: true });
        return this;
    }

    clickLogin() {
        const field = cy.get('[class="btn btn-primary btn-lg btn-block loginbtn"]');
        field.click();
        return this;
    }
}

export default LoginPage;
