package utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.opera.OperaDriver;
import org.openqa.selenium.safari.SafariDriver;

public class Driver {
    private static WebDriver driver;
    public static WebDriver getInstance() {
        if (driver == null) {
            switch (Config.getProperties("browser")) {
                case "chrome":
                    System.setProperty("webdriver.chrome.driver", Config.getProperties("chrome.driver.path"));
                    driver = new ChromeDriver();
                    break;

                case "firefox":
                    System.setProperty("webdriver.gecko.driver", Config.getProperties("gecko.driver.path"));
                    driver = new FirefoxDriver();
                    break;

                case "safari":
                    System.setProperty("webdriver.safari.noinstall", "true");
                    driver = new SafariDriver();
                    break;

                case "opera":
                    System.setProperty("webdriver.opera.driver",Config.getProperties("opera.driver.path"));
                    driver = new OperaDriver();
                    break;

                default:
                    System.out.println("Invalid browser type");
            }
        }
        return driver;
    }

    public static void closeDriver() {
        if (driver != null) {
            driver.quit();
            driver=null;
        }
    }
}
