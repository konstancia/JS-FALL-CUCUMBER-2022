const Commands = require('../Commands');

class HomePage {

    commands = new Commands();

    // Locators for web-Elements on the HomePage (variables)
    // Destination
    goingToLocator = '//button[@aria-label="Going to"]';
    goingToTypeLocator = '#destination_form_field';
    autoSuggestionsLocator = '//div[@class="truncate"]//strong';

    // Calendar
    calendarOpenLocator = '#date_form_field-btn';
    
    allDatesLocator_starts = '//button[starts-with(@aria-label, "'
    allDatesLocator_ends = '")]'

    calendarDoneButtonLocator = '//button[text()="Done" and @data-stid]';
    nextCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[2]';
    prevCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[1]';
    leftSideCalendarHeaderLocator = '(//div[@class="uitk-date-picker-month"])[1]//h2';

    //sign-in
    signInButton = ']//button[contains(text(),"Sign in")]';
    feedbackForm = '//header/nav[@id="secondaryNav"]/div[1]/div[4]/div[1]/div[2]/a[5]';

    //download app
    downloadAppPhoneNumberField = ' #phoneNumber ';
    downloadAppGetAppButton = '#submitBtn';

    
    // functions to interact with the web-Elements on the HomePage

    async enterDestination(destination) {
        await this.commands.clickWebElement(this.goingToLocator);
        await this.commands.typeInWebElement(this.goingToTypeLocator, destination);
    }

    async selectFromSuggestedDestinations(userChoice) {
        await this.commands.selectFromAutoSuggestion(this.autoSuggestionsLocator, userChoice);
    }

    async enterIncorrectPhoneNumber(phone) {
        await this.commands.typeInWebElement(this.downloadAppPhoneNumberField, userPwd);
    }

    async openCalendar() {
        await this.commands.clickWebElement(this.calendarOpenLocator);
    }


    async getAppButton () {
        await this.commands.clickWebElement(this.getAppButton);

    }

    async enterPhoneNumber (phoneNumber) {
        await this.commands.typeInWebElement(this.downloadAppPhoneNumberField, phoneNumber);
    }

    async signInHotels () {
        await this.commands.clickWebElement(this.signinButton);

    }

    async clickFeedbackForm () {
        await this.commands.clickWebElement(this.feedbackForm);

    }

    async clickCalendarOpen () {
        await this.commands.clickWebElement(this.calendarOpenLocator);
    }

    async selectCheckInDate(date) {
        // date = "December 5 2022"
        // 'December', '5', '2022'
        const dateArray = date.split(' ');
        await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
        const allDatesLocator = this.allDatesLocator_starts + date.substring(0,3) + this.allDatesLocator_ends;
        await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
    }

    async selectCheckOutDate(date) {
        const dateArray = date.split(' ');
        await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
        const allDatesLocator = this.allDatesLocator_starts + date.substring(0,3) + this.allDatesLocator_ends;
        await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
    }

    async clickDoneOnCalendar() {
        await this.commands.clickWebElement(this.calendarDoneButtonLocator);
    }

    async clickToGoToNextCalendar() {
        await this.commands.clickWebElement(this.nextCalendarButtonLocator);
    }

    async clickToGoToPrevCalendar() {
        await this.commands.clickWebElement(this.prevCalendarButtonLocator);
    }

    async pastDatesDisabled () {
        const dates = await $$('//button[starts-with(@aria-label, "Jan")]');    // [we1, we2, we3, ...]
        console.log(dates);
        const currentDate = moment().date();
        
        let allPastDatesDisabled = true;
        for (let i=1 ; i <= currentDate ; i++) {
            // expect(await dates[i-1].getAttribute('disabled'), '').to.equal('true');  <- not recommended to use expect in loop
            if (await dates[i-1].getAttribute('disabled') !== 'true') {
                allPastDatesDisabled = false;
                break;
            }
        }
        expect(allPastDatesDisabled, 'All past dates are not disabled').to.be.true;


        let disabledDateCounter = 0;
        for (const dateElement of dates) {
            if (await dateElement.getAttribute('disabled') === 'true') {
                disabledDateCounter++;
            }
        }
        expect(disabledDateCounter, 'All past dates are not disabled').to.equal(currentDate-1);


        const allPastDates = await $$('//button[starts-with(@aria-label, "Dec") and @disabled]');   // [we1, we2]
        expect(allPastDates.length, '').to.equal(currentDate-1);
        
    }


    // 'May 2023'
    async goToMonth(monthYear) {
        /**
         * using leftSideCalendarHeaderLocator get headerElement
         * find text of webElement
         * if (text NOT equal to monthYear) 
         *      click >
         */
        let count = 1;
        while(count<=12) {
            const monthHeader = await this.commands.getTextOfWebElement(this.leftSideCalendarHeaderLocator);
            console.log(`\n monthHeader -> ${monthHeader} \n`);
            if (monthHeader.localeCompare(monthYear) === 0) {
                break;
            }
            await this.commands.clickWebElement(this.nextCalendarButtonLocator);
            await browser.pause(1000);
            count++;
        }
    }

}
module.exports = HomePage;