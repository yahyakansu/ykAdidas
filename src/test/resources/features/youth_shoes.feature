@shoe
Feature: Displaying search results

  Scenario: Search shoes for boy youth
    Given I am on the adidas home page
    And I select kids
    And I select youth boys shoes
    When I click the soccer shoes
    Then I should see soccer shoes
