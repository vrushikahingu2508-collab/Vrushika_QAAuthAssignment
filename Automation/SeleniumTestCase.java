import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.*;

//Data of each test cases can be fetched from csv file
public class SeleniumTestCase {

    WebDriver driver;
    String baseUrl = "http://localhost:3000";

    @BeforeClass
    public void setup() {
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @Test(priority = 1)
    public void successfulRegistration() {
        driver.get(baseUrl + "/register");

        driver.findElement(By.id("name")).sendKeys("Juli Sharma");
        driver.findElement(By.id("email")).sendKeys("juli.sharma@gmail.com");
        driver.findElement(By.id("password")).sendKeys("Juli@12345678");
        driver.findElement(By.id("confirmPassword")).sendKeys("Juli@12345678");
        driver.findElement(By.id("registerBtn")).click();

        Assert.assertTrue(
            driver.findElement(By.id("loginMsg")).getText().contains("success"),
            "Registration success message not found"
        );
    }

    @Test(priority = 2)
    public void registrationWithDuplicateEmail() {
        driver.get(baseUrl + "/register");

        driver.findElement(By.id("name")).sendKeys("Juli Sharma");
        driver.findElement(By.id("email")).sendKeys("juli.sharma@gmail.com");
        driver.findElement(By.id("password")).sendKeys("Juli@12345678");
        driver.findElement(By.id("confirmPassword")).sendKeys("Juli@12345678");
        driver.findElement(By.id("registerBtn")).click();

        Assert.assertTrue(
            driver.findElement(By.id("loginMsg")).getText().contains("already exists"),
            "Duplicate email error not shown"
        );
    }

    @Test(priority = 3)
    public void successfulLogin() {
        driver.get(baseUrl + "/login");

        driver.findElement(By.id("email")).sendKeys("juli.sharma@gmail.com");
        driver.findElement(By.id("password")).sendKeys("Juli@12345678");
        driver.findElement(By.id("loginBtn")).click();

        Assert.assertTrue(
            driver.getCurrentUrl().contains("/dashboard"),
            "User not redirected to dashboard"
        );
    }

    @Test(priority = 4)
    public void loginWithInvalidPassword() {
        driver.get(baseUrl + "/login");

        driver.findElement(By.id("email")).sendKeys("juli.sharma@gmail.com");
        driver.findElement(By.id("password")).sendKeys("Test@8327872");
        driver.findElement(By.id("loginBtn")).click();

        Assert.assertTrue(
            driver.findElement(By.id("loginMsg")).getText().contains("Invalid credentials"),
            "Invalid login error not shown"
        );
    }

    @Test(priority = 5)
    public void accessDashboardWithoutLogin() {
        driver.get(baseUrl + "/dashboard");

        Assert.assertTrue(
            driver.getCurrentUrl().contains("/login"),
            "Unauthorized user not redirected to login"
        );
    }

    @AfterClass
    public void tearDown() {
        driver.quit();
    }
}
