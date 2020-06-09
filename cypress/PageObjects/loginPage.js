/// <reference types="Cypress" />
const { loginPage } = require("../fixtures/elementsLocators")

class LoginPage {
    fillEmail(email) {
        const field = cy.get(loginPage.emailTextFieldSelector);
        field.type(email, { force: true });
        return this;
    }

    fillPassword(password) {
        const field = cy.get(loginPage.passwordTextFieldSelector);
        field.type(password, { force: true });
        return this;
    }

    clickLogin() {
        const field = cy.get(loginPage.loginButtonSelector);
        field.click();
        return this;
    }
}

export default LoginPage;
