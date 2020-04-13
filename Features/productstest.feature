@products
Feature: To make add to cart and opening cart


  Scenario Outline: To add items to cart and open cart
    Given Open chrome and start application
    When I enter valid "<usernameNumber>" 
    When user should be able to login 
    When user selects multiple items to add to cart
    Then open cart
    Then application should be closed


    Examples: 
   |usernameNumber|
   | 1  	|
   