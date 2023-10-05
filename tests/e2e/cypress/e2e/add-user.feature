Feature: Add User
    Scenario: Visiting dashboard and doing all flow to add user
    Given I am on the dashboard
    When I click admin 
    Then I should be on the admin user panel
    When I click add new user
    Then The modal should render
    When I fill in 'name' with 'Test User'
    And I fill in 'email' with 'test@mail.com'
    And I click Submit
    Then Notification should render with success message
    # When I click close
    # Then The modal should close

