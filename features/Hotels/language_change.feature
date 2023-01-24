@regression

Feature: Language Change


Scenario: Verify language can be changed successfully
Given I am on Hotels.com
And I Click on “English“ language
And I Select “Español (Estados Unidos)” in Language dropdown
And I Click on “Save“ button
And I Verify “Español” is displayed
Then I Click on “Español“ language
And I Select “English (United States)” in Language dropdown
And I Click on “Guardar“ button
Then I Verify “English” is displayed


