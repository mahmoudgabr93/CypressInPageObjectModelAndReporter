/// <reference types="Cypress" />
const { accountPage } = require("../fixtures/elementsLocators");

class AccountPage {
    ExpandMyAccountDropDown() {
        const field = cy.get(accountPage.accountDropDownSelector)
        field.click({ multiple: true });
        return this;
    }

    clickSignOut() {
        const field = cy.get(accountPage.signOutLinkSelector)
        field.click();
        return this;
    }

    clickLogin() {
        const field = cy.get(accountPage.loginLinkSelector);
        field.click();
        return this;
    }

    assertAccountPageIsDisplayed() {
        cy.get(accountPage.bookingsListSelector)
    }
}

export default AccountPage;