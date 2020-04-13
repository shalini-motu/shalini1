$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("logintest.feature");
formatter.feature({
  "line": 2,
  "name": "Test Swag login scenario",
  "description": "",
  "id": "test-swag-login-scenario",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-swag-login-scenario;test-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid \"\u003cusernameNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "test-swag-login-scenario;test-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "usernameNumber"
      ],
      "line": 11,
      "id": "test-swag-login-scenario;test-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 12,
      "id": "test-swag-login-scenario;test-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 13,
      "id": "test-swag-login-scenario;test-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "3"
      ],
      "line": 14,
      "id": "test-swag-login-scenario;test-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-swag-login-scenario;test-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SaucedemoTestPage.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 2373570500,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\M SHALINI\\eclipse-workspace\\shalini1\\src\test\\resources\\binaries\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat cts.saucelabs.utility.BrowserFactory.startBrowser(BrowserFactory.java:15)\r\n\tat stepDefination.SaucedemoTestPage.open_chrome_and_start_application(SaucedemoTestPage.java:69)\r\n\tat ✽.Given Open chrome and start application(logintest.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "SaucedemoTestPage.i_enter_valid(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SaucedemoTestPage.user_should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SaucedemoTestPage.application_should_be_closed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-swag-login-scenario;test-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SaucedemoTestPage.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 72362900,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\M SHALINI\\eclipse-workspace\\shalini1\\src\test\\resources\\binaries\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat cts.saucelabs.utility.BrowserFactory.startBrowser(BrowserFactory.java:15)\r\n\tat stepDefination.SaucedemoTestPage.open_chrome_and_start_application(SaucedemoTestPage.java:69)\r\n\tat ✽.Given Open chrome and start application(logintest.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    }
  ],
  "location": "SaucedemoTestPage.i_enter_valid(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SaucedemoTestPage.user_should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SaucedemoTestPage.application_should_be_closed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-swag-login-scenario;test-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid \"3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SaucedemoTestPage.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 73494200,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\M SHALINI\\eclipse-workspace\\shalini1\\src\test\\resources\\binaries\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat cts.saucelabs.utility.BrowserFactory.startBrowser(BrowserFactory.java:15)\r\n\tat stepDefination.SaucedemoTestPage.open_chrome_and_start_application(SaucedemoTestPage.java:69)\r\n\tat ✽.Given Open chrome and start application(logintest.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "SaucedemoTestPage.i_enter_valid(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SaucedemoTestPage.user_should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SaucedemoTestPage.application_should_be_closed()"
});
formatter.result({
  "status": "skipped"
});
});