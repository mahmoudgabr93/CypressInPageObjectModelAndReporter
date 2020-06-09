module.exports = {
    accountPage: {
        accountDropDownSelector: "[id='dropdownCurrency']",
        signOutLinkSelector: "[class='dropdown-item active tr']",
        loginLinkSelector: "[class='dropdown-item tr']",
        bookingsListSelector: "[class='nav-link go-text-right active']"
    },
    loginPage: {
        emailTextFieldSelector: "[name='username']",
        passwordTextFieldSelector: "[name='password']",
        loginButtonSelector: "[class='btn btn-primary btn-lg btn-block loginbtn']"
    },
    registrationPage: {
        url: "/register",
        firstNameTextFieldSelector: "[name='firstname']",
        lastNameTextFieldSelector: "[name='lastname']",
        mobileNumberTextFieldSelector: "[name='phone']",
        emailTextFieldSelector: "[name='email']",
        passwordTextFieldSelector: "[name='password']",
        confirmPasswordTextFieldSelector: "[name='confirmpassword']",
        signUpButtonSelector: "[class='signupbtn btn_full btn btn-success btn-block btn-lg']"
    }
};
