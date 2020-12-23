$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/youth_shoes.feature");
formatter.feature({
  "name": "Displaying search results",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@shoe"
    }
  ]
});
formatter.scenario({
  "name": "Search shoes for boy youth",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@shoe"
    }
  ]
});
formatter.step({
  "name": "I am on the adidas home page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I select kids",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I select youth boys shoes",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click the soccer shoes",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I should see soccer shoes",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});