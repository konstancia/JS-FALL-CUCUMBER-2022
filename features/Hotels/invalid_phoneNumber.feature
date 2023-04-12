@regression


Feature: invalid Phone Number


Scenario: Verify invalid phone number error
Given I am on Hotels.com
When I Scroll to “Get the app“ button
And I Enter “0000000000” in Phone number
And I Click on “Get the app“ button
Then I Verify “Please enter a valid phone number.“ error is displayed
