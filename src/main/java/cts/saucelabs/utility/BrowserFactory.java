package cts.saucelabs.utility;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BrowserFactory {
	public WebDriver driver;
	public WebDriver startBrowser(String browserName,String url) {
		ConfigReader config= new ConfigReader();
		if(browserName.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", config.getchromepath());
			driver=new ChromeDriver();
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		}
		else if(browserName.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", config.getfirefoxpath());
			driver=new FirefoxDriver();
		}
		driver.get(url);
		return driver;
	}
	public static void sleep(int timeout) throws InterruptedException
	{
		TimeUnit.SECONDS.sleep(timeout);
		}
	//To close the browser
	public void quit()
	{
		driver.quit();
	}


}
