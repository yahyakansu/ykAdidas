package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class HomePage {
    public HomePage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath="//div[@data-auto-id='glass-navigation-flyout'] /a[@manual_cm_sp='header-_-Kids']")
    @CacheLookup
    private WebElement kids;

    @FindBy(xpath="//a[contains(text(),'Boys Shoes')]")
    private WebElement boys;

    @FindBy(xpath="//*[@id=\"modal-root\"]/div/div/button")
    private WebElement closePop;

    @FindBy(xpath="//span[contains(text(),'Sport')]")
    private WebElement sports;

    @FindBy(xpath="//span[contains(text(),'Soccer')]")
    private WebElement soccerShoes;

    @FindBy(xpath="//div[@class='count___11uU6 h5']")
    private WebElement productAmount;

    @FindBy(xpath="//div[@class='gl-product-card__name gl-label gl-label--m']")
    private List<WebElement> allStates;

    public void kidsClick() throws InterruptedException {
        kids.click();
        Thread.sleep(500);
    }

    public void boysClick() throws InterruptedException {
        boys.click();
        Thread.sleep(500);
    }

    public void popUp() throws InterruptedException {
        Thread.sleep(500);
        closePop.click();
    }

    public void sportsClick() {
        sports.click();
    }

    public void selectSoccerShoes() throws InterruptedException {
        soccerShoes.click();
        Thread.sleep(500);
    }

    public void getAmount() {
        System.out.println(productAmount.getText());
    }

    public void printAllStates() {
        Set<String> actualStates = new HashSet<>();
        for (WebElement element : allStates) {
            actualStates.add(element.getText());
        }
        for (String string : actualStates) {
            System.out.println(string);
        }
    }
}
