@regression

Feature: Error empty feedback


Scenario: Verify error is displayed when user submits the empty feedback form
Given I Launch Hotels
When I  Click on Sign In
And Click “Feedback”
And Click on Submit button
Then Verify error message is displayed (Please fill in the required information highlighted below.)
Then Verify star boxes section is in a red dotted box.
