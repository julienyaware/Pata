Feature: Login Feature
    As a user
    I want to log in to the application
    So that I can access my account

    Scenario: Successful login
        Given I am on the login page
        When I enter my email and password
        And I click on the login button
        Then I should be redirected to the profileHomepage