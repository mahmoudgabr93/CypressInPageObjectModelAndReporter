/// <reference types="Cypress" />

class RegistrationPage {
    visit() {
        cy.visit('/register');
    }

    addFirstName(firstName) {
        expect(firstName[0]).to.equal(firstName[0].toUpperCase())
        const field = cy.get('[name="firstname"]')
        field.clear({force: true});
        field.type(firstName, { force: true });
        return this;
    }

    addLastName(lastName) {
        expect(lastName[0]).to.equal(lastName[0].toUpperCase())
        const field = cy.get('[name="lastname"]')
        field.clear({force: true});
        field.type(lastName, { force: true });
        return this;
    }

    addMobileNumber(mobileNo) {
        expect(mobileNo).to.have.lengthOf(11);
        const field = cy.get('[name="phone"]');
        field.clear({force: true});
        field.type(mobileNo, { force: true });
        return this;
    }

    addUniqueEmail(email) {
        const field = cy.get('[name="email"]');
        field.clear({force: true});
        field.type(email, { force: true });
        return this;
    }

    addPassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]{6,8}$/;
        expect(password).to.match(passwordRegex);
        const field = cy.get('[name="password"]')
        field.clear({force: true});
        field.type(password, { force: true });
        return this;
    }

    addConfirmPassword(password) {
        const field = cy.get('[name="confirmpassword"]')
        field.clear({force: true});
        field.type(password, { force: true });
        return this;
    }

    clickSignUp() {
        const field = cy.get('[class="signupbtn btn_full btn btn-success btn-block btn-lg"]')
        field.click();
        return this;
    }

    assertSignUp() {
        cy.get('[class="nav-link go-text-right active"]').should('be.visible')
    }
}

export default RegistrationPage;
