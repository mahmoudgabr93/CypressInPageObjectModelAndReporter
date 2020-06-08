/// <reference types="Cypress" />

class AccountPage {
    ExpandMyAccountDropDown() {
        const field = cy.get('[id="dropdownCurrency"]')
        field.click({ multiple: true });
        return this;
    }

    clickSignOut() {
        const field = cy.get('[class="dropdown-item active tr"]')
        field.click();
        return this;
    }

    clickLogin() {
        const field = cy.get('[class="dropdown-item tr"]');
        field.click();
        return this;
    }

    assertAccountPageIsDisplayed() {
        cy.get('[class="nav-link go-text-right active"]').should('be.visible')
    }
}

export default AccountPage;