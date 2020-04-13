@checkout
Feature: To checkout the cart and give details
  
  Scenario Outline: To add items to cart and open cart
    Given Open chrome and start application
    When I enter valid "<usernameNumber>" 
    When user should be able to login 
    When user selects multiple items to add to cart
    Then open cart
    And user removes items from the cart
    And clicks on checkout button
    Then enters the personal details
    Then application should be closed
 

 Examples: 
   |usernameNumber|
   | 1  	|
   