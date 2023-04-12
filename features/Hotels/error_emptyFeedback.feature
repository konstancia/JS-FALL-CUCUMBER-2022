@regression

Feature: Error empty feedback


Scenario: Verify error is displayed when user submits the empty feedback form
Given I am on Hotels.com
When I  Click on Sign In
And I Click “Feedback”
And I Click on Submit button
Then I Verify error message is displayed (Please fill in the required information highlighted below.)
Then I Verify star boxes section is in a red dotted box.
