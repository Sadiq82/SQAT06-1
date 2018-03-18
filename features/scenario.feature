Feature: Simple maths
  In order to do maths
  As a developer
  I want to increment variables

      Scenario: figure2
    Given I go to Figure2 registration page
    When  I enter create to account
    Then  I should see the result for sign up

    Scenario: figure1
    Given I go to Figure1 registration page
    When  I enter create account
    Then  I should see the result for sign up error

