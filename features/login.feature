Feature: OrangeHRM login

Scenario: Login with valid credentials 
Given I login orangeHRM 
When I enter the username
And I enter the password
And I click the login button
Then I should see the orangeHRM dashboard