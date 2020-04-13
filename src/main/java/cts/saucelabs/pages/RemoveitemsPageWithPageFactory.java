package cts.saucelabs.pages;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

/**
* @author Kalyani
* @author Pallavi
* @author Priyanka
* @author Shalini
* class created to add items to cart
*/

public class RemoveitemsPageWithPageFactory {

WebDriver driver;
/**
* locating item Bolt
*/

@FindBy(how=How.XPATH,using="//div[5]//div[2]//div[2]//button[1]")
@CacheLookup
WebElement Bolt;
/**
* locating item Jacket
*/
@FindBy(how=How.XPATH,using="//div[6]//div[2]//div[2]//button[1]")
@CacheLookup
WebElement Jacket;
/**
* locating cart image
*/
@FindBy(how=How.XPATH,using="//*[name()='path' and contains(@fill,'currentCol')]")
@CacheLookup
WebElement cart_image;
/**
* method for initializing objects
* @param driver
*/
public RemoveitemsPageWithPageFactory(WebDriver driver) {
this.driver=driver;

}
/**
* method to click on cart button
*/
public void clickOnBoltImage() {
Bolt.click();
}
public void clickOnJacketImage() {
Jacket.click();
}

public void clickOnCartButton() {
cart_image.click();
}


}
