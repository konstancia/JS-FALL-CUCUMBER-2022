const { Given, When, Then } = require("@wdio/cucumber-framework");
const HomePage = require('../../POM/Hotels/HomePage');
const ErrorPage = require('../../POM/Hotels/ErrorPage');
const { expect } = require("chai");


const homePage = new HomePage();
const errorPage = new ErrorPage();


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
});

When(/^ I Scroll to “Get the app“ button$/, async function () {
    await homePage.languageSelectorButton();
});

When(/^ I enter invalid phone number $/, async function () {
    await homePage.enterIncorrectPhoneNumber('000000');
});

When(/^ I click on "get the app button" $/, async function () {
    await homePage.getAppButton();
});

When(/^I verify “Please enter a valid phone number“ error is displayed$/, async function () {
    expect(await errorPage.isPhoneNumberErrorDisplayed(), 'Login error is not displayed').to.be.true;
});








