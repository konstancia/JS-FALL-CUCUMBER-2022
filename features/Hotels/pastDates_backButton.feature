
@regression
Feature: Buttons Disabled

Scenario: Virify Past Dates and Back Buttons are  Disabled
Given I Launch Hotels.com
When I Click on Dates
And Go to current month if not displayed
And Verify For current month
Then Past dates (if any) are disabled.
Then Back button on current month is disabled