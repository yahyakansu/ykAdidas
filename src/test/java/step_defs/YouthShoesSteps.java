package step_defs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.log4j.Logger;
import pages.HomePage;
import utilities.Config;
import utilities.Driver;

public class YouthShoesSteps {
    private final Logger log = Logger.getLogger(this.getClass());
    HomePage homePage = new HomePage();

    @Given("I am on the adidas home page")
    public void i_am_on_the_adidas_home_page() {
        Driver.getDriver().get(Config.getProperties("url"));
        log.info("browser opened");
    }

    @Given("I select kids")
    public void i_select_kids() throws Exception{
        homePage.kidsClick();
        log.info("click kids button");
    }

    @Given("I select youth boys shoes")
    public void i_select_youth_boys_shoes() throws Exception {
        homePage.boysClick();

        // close popup
        homePage.popUp();
        log.info("close the pop");
    }

    @When("I click the soccer shoes")
    public void i_click_the_soccer_shoes() throws Exception {
        homePage.sportsClick();
        homePage.selectSoccerShoes();
        log.info("select soccer shoes");
    }

    @Then("I should see soccer shoes")
    public void i_should_see_soccer_shoes()throws Exception{
        homePage.getAmount();
        log.info("list all soccer shoes");
        //print all states
        homePage.printAllStates();
    }

}
