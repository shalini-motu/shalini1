package cts.saucelabs.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class PlaceorderPageWithPageFactory {

	WebDriver driver;



	@FindBy(how=How.XPATH,using="//a[@class='btn_action cart_button']")
	@CacheLookup
	WebElement finish;

	public PlaceorderPageWithPageFactory(WebDriver driver) {
		this.driver=driver;
	}

	public void clickOnFinishButton() {
		finish.click();
	}

}
