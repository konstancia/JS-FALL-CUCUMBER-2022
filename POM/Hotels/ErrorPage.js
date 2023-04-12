const Commands = require('../Commands');
const { Given, When, Then } = require("@wdio/cucumber-framework");

class LoginErrorPageHotels {

    commands = new Commands();

    // Locators for web-Elements on the ErrorPage (variables)
    incorrectPhoneNumber = '//div[@id="phoneNumber-error"], "Please enter a valid phone number")]'


    // functions to interact with the web-Elements on the LoginErrorPage
    async isPhoneNumberErrorDisplayed() {
        return await this.commands.isWebElementDisplayed(this.incorrectPhoneNumber);
        
    }

    emptyFeedbackFormError = '//p[contains(text(),"Please fill in the required information highlighte")]'

    async isFeedbackFormErrorDisplayed () {

        return await this.commands.isWebElementDisplayed (this.emptyFeedbackFormError);
    }
    

    dottedBorder = 'TBD'


    async isDottedBorderDisplayed () {

        return await this.commands.isWebElementDisplayed(this.dottedBorder);
    
    }

}



module.exports = LoginErrorPageHotels