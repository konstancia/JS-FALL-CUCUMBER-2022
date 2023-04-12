const Commands = require('../Commands');

class FeedbackForm {

    commands = new Commands();

    feedbackButton = '//header/nav[@id="secondaryNav"]/div[1]/div[4]/div[1]/div[2]/a[5]'
    overallSatisfactionPage = '//fieldset[@id="required_box_page_rating"]'
    starRatingOne = '//span[contains(text(),"1")]'
    starRatingTwo = '//span[contains(text(),"2")]'
    starRatingThree = '//span[contains(text(),"3")]'
    starRatingFour = '//span[contains(text(),"4")]'
    starRatingFive = '//span[contains(text(),"5")]'

    pageComments = '//textarea[@id="verbatim"]'


    likelyToReturnDropdown = '//select[@id="will-you-return"]'
    likelyToReturnHighlyLikely = '//option[contains(text(),"Highly likely")]'
    likelyToReturnSomewhatLikely = '//option[contains(text(),"Somewhat likely")]'
    likelyToReturnUnsure = '//option[contains(text(),"Unsure")]'
    likelyToReturnSomewhatUnlikely = '//option[contains(text(),"Somewhat unlikely")]'
    likelyToReturnHighlyUnlikely = '//option[contains(text(),"Highly unlikely")]'

    thankyouFeedbackMessage = '//h5[contains(text(),"THANK YOU FOR YOUR FEEDBACK.")]'

    priorBookingYesButton = '//span[@data-localization="booked-before-yes"]'
    priorBookingNoButton = '//span[@data-localization="booked-before-no"]'

    accomplishedYesButton = '//label[@for="were-you-successful-yes"]'
    accomplishedNoButton = '//label[@for="were-you-successful-no"]'

    submitFeedbackButton = '//button[@class="submit"]'


     
       async clickFeedbackOption() {

            await this.commands.clickWebElement(this.feedbackButton);

       }

    
       async satisfactionPage (options) {
        switch(options) {
            case 'Rating One':
              await this.commands.clickWebElement(this.starRatingOne);
              break;
              case 'Rating Two':
              await this.commands.clickWebElement(this.starRatingTwo);
              break;
              case 'Rating Three':
              await this.commands.clickWebElement(this.starRatingThree);
              break;
              case 'Rating Four':
              await this.commands.clickWebElement(this.starRatingFour);
              break;
              case 'Rating Five':
              await this.commands.clickWebElement(this.starRatingFive);
              break;

        }

       }

       async enterCommentsPage (comments) {

              await this.commands.typeInWebElement(this.pageComments);
       }

        async dropDownOptionsMenu () {
        
              await this.commands.clickWebElement(this.likelyToReturnDropdown);

    }


       async selectDropdown(option) {
        switch (option) {
            case 'Highly Likely':
                await this.commands.selectDataInDropdown (this.likelyToReturnHighlyLikely);
                break;  
            case 'Somewhat Likely':
                await this.commands.selectDataInDropdown (this.likelyToReturnSomewhatLikely);
                break;
            case 'Unsure':
                await this.commands.selectDataInDropdown (this.likelyToReturnUnsure);
                break;
            case 'Somewhat Unlikely':
                await this.commands.selectDataInDropdown (this.likelyToReturnSomewhatUnlikely);
                break;
            case 'Highly Unlikely':
                await this.commands.selectDataInDropdown (this.likelyToReturnHighlyUnlikely);
                break;        
            default:
                break;
        }
    }


       async priorBookingOptions (){
        switch (option) {
            case 'Yes button':
                await this.commands.clickWebElement(this.priorBookingYesButton);
            case 'No button':
                await this.commands.clickWebElement(this.priorBookingNoButton);
    
   }
}


     async accomplishedOptions () {
        switch (option) {
            case 'Yes button':
        await this.commands.clickWebElement(this.accomplishedOptionYes)
            case 'No button':
        await this.commands.clickWebElement(this.accomplishedOptionNo)

     }

     }

       
     async submitFeedbackFormButton(){

        await this.commands.clickWebElement(this.submitFeedbackButton);


     }

     async thankyouFeedbackMessage(){

        await this.commands.isWebElementDisplayed(this.thankyouFeedbackMessage);


     }

}
module.exports = FeedbackForm