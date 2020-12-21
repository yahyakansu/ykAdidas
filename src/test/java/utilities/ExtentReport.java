package utilities;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;

public class ExtentReport {
    private static ExtentHtmlReporter configs;
    private  static ExtentReports reports;
    private static ExtentTest extentTest;

    static {
        configs = new ExtentHtmlReporter("./extentReport/report.html");
        configs.config().setDocumentTitle("Extend Report");
        reports = new ExtentReports();
        reports.attachReporter(configs);
        reports.setSystemInfo("username","yahya");
        reports.setSystemInfo("environment","QA");
    }

    public static void startTest(String testName){
        extentTest = reports.createTest(testName);
    }

    public static void pass(){
        extentTest.pass("PASSED");
    }

    public static void fail(){
        extentTest.fail("FAILED");
    }

    public static void endReport(){
        reports.flush();
    }
}
