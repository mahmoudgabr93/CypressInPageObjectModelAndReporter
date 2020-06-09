/// <reference types="Cypress" />

import RegistrationPage from '../PageObjects/registrationPage';
import LoginPage from '../PageObjects/loginPage';
import AccountPage from '../PageObjects/accountPage';
const helpers = require('../../utilities/helpers');
const faker = require('faker');


describe('Sign up Test suite', () => {
    let testData;
    const email = faker.internet.exampleEmail(faker.name.firstName(), faker.name.lastName());

    const registrationPage = new RegistrationPage();
    const loginPage = new LoginPage();
    const accountPage = new AccountPage();

    before(() => {
        cy.fixture('testData').then(data => {
            testData = data;
            return testData;
        })
    });

    it('check that user can register successfully using a unique email and valid password', () => {
        registrationPage.visit();
        registrationPage.addFirstName(testData.firstname);
        registrationPage.addLastName(testData.lastname);

        //assert first name is not equal to last name
        expect(testData.firstname).not.to.equal(testData.lastname);


        registrationPage.addMobileNumber(testData.mobile);
        registrationPage.addUniqueEmail(email);
        registrationPage.addPassword(testData.password);
        registrationPage.addConfirmPassword(testData.confirmPassword);

        //assert password and confirm password are equal
        expect(testData.password).to.be.equal(testData.confirmPassword);

        cy.server();
        cy.route('POST', '/account/signup').as('signUp');

        registrationPage.clickSignUp();

        //function to intercept the sign up request and save both request and the response in two JSON files
        cy.wait('@signUp').then(() => {
            helpers.interceptRequest('@signUp');
            helpers.interceptResponse('@signUp');
        });

        accountPage.assertAccountPageIsDisplayed();
    });

    it('Check that registered user can login successfully', () => {
        accountPage.ExpandMyAccountDropDown();
        accountPage.clickSignOut();
        loginPage.fillEmail(email);
        loginPage.fillPassword(testData.password)
        loginPage.clickLogin();
        accountPage.assertAccountPageIsDisplayed();
    })
})