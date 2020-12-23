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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the adidas home page",
  "keyword": "Given "
});
formatter.match({
  "location": "YouthShoesSteps.i_am_on_the_adidas_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select kids",
  "keyword": "And "
});
formatter.match({
  "location": "YouthShoesSteps.i_select_kids()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select youth boys shoes",
  "keyword": "And "
});
formatter.match({
  "location": "YouthShoesSteps.i_select_youth_boys_shoes()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:80a:6914:4304:ccb1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: /var/folders/ww/mm17sk452vz...}, goog:chromeOptions: {debuggerAddress: localhost:59197}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 0246317bd2e0b0fa23097282c5bdd614\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat pages.HomePage.boysClick(HomePage.java:46)\n\tat step_defs.YouthShoesSteps.i_select_youth_boys_shoes(YouthShoesSteps.java:29)\n\tat ✽.I select youth boys shoes(src/test/resources/features/youth_shoes.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "I click the soccer shoes",
  "keyword": "When "
});
formatter.match({
  "location": "YouthShoesSteps.i_click_the_soccer_shoes()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see soccer shoes",
  "keyword": "Then "
});
formatter.match({
  "location": "YouthShoesSteps.i_should_see_soccer_shoes()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});