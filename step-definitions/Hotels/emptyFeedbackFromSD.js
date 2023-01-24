const { Given, When, Then } = require("@wdio/cucumber-framework");
const HomePage = require('../../POM/Hotels/HomePage');
const ErrorPage = require('../../POM/Hotels/ErrorPage');
const FeedbackForm = require('../../POM/Hotels/FeedbackForm')
const { expect } = require("chai");


const homePage = new HomePage();
const errorPage = new ErrorPage();
const feedbackForm = new FeedbackForm();



Given(/^I am on (facebook|hotels|darksky|yahoo|amazon)$/, async function (urlName) {
    switch (urlName.toLowerCase()) {
        case 'facebook':
            await browser.url('/');
            break;
        case 'hotels':
            await browser.url('https://www.hotels.com');
            break;
        case 'darksky':
            await browser.url('https://www.darksky.net');
            break;
        case 'yahoo':
            await browser.url('https://www.yahoo.com');
            break;
        case 'amazon':
            await browser.url('https://www.amazon.com');
            break;
        default:
            break;
    }

    When(/^ I click on Sign-in $/, async function () {
        await homePage.signInButton();
    });

    And (/^ I click on Feedback $/, async function () {
        await feedbackForm.clickFeedbackOption();
    });
     
    And (/^ I Click on Submit button $/, async function () {
        await feedbackForm.submitFeedbackFormButton();
    });

    Then (/^  I Verify error message is displayed  $/, async function () {
        await feedbackForm.emptyFeedbackFormError();
    });

    Then (/^ I Verify star boxes section is in a red dotted box  $/, async function () {
        await feedbackForm.isDotterBoarderDisplayed();
    });

    

});
