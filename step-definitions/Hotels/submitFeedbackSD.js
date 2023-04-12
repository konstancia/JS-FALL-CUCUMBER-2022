
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
     
    And (/^I Select any star-rating (.+)  $/, async function (sortOption) {
        await feedbackForm.selectDropdown(sortOption);
        await browser.pause(7000);
    });

    And (/^ I Enter any comments $/, async function () {
        await feedbackForm.enterCommentsPage("This are my comments");
    });
  
  
      And(/^I Select any option (.+) for “How likely are you to return to Hotels.com? $/, async function (sortOption) {
    await feedbackForm.dropDownOptionsMenu();
    await feedbackForm.selectDropdown(sortOption);
    await browser.pause(7000);
});

And (/^I Select any option for (.+) “How likely are you to return to Hotels.com?” $/, async function (sortOption) {
    await feedbackForm.priorBookingOptions(sortOption);
    await browser.pause(7000);
});

And (/^I Select any answer for(.+) ”Did you accomplish what you wanted to do on this page?” $/, async function (sortOption) {
    await feedbackForm.accomplishedOptions(sortOption);
    await browser.pause(7000);
});

And (/^ I click on "Submit" button $/, async function () {
    await feedbackForm.submitFeedbackButton;
});

And (/^ Verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed $/, async function () {
    await errorPage.isFeedbackFormErrorDisplayed
});


