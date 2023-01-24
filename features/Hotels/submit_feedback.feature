@regression

Feature: Submit Feedback


Scenario: Verify user can submit feedback after completing the feedback form
Given I Launch Hotels
And I Click on “Sign in”
And I Click “Feedback”
And I Select any star-rating
And I Enter any comments
And I Select any option for “How likely are you to return to Hotels.com?”
And I Select any answer for “Prior to this visit, have you ever booked on Hotels.com?”
And I Select any answer for ”Did you accomplish what you wanted to do on this page?”
And I Click on Submit button
Then I Verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed
