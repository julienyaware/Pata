import puppeteer from "puppeteer";

jest.setTimeout(300000000);

describe("App.js", () => {
    let browser;
    let page;
  
    beforeAll(async () => {
        browser = await puppeteer.launch({ 
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
          });
      page = await browser.newPage();
    });

   
  
    it("navigates to the login page", async () => {
      await page.goto("http://localhost:3000/login");
      await page.waitForSelector("Login");
      await page.click("#about-page-link");
      await page.waitForSelector(".App-welcome-text");
      const text = await page.$eval(".App-welcome-text", (e) => e.textContent);
      expect(text).toContain("This is the about page.");
    });
    afterAll(() => browser.close());

    it('should successfully log in with valid credentials', async () => {
        await page.type('#email-address', 'your@email.com');
        await page.type('#password', 'yourpassword');
    
        await page.click('#login-button');
        await page.waitForNavigation();
    
        // Assert that the page navigated to the profile homepage
        expect(page.url()).toContain('/profilehomepage');
      });
    
      it('should display error message with invalid credentials', async () => {
        await page.type('#email-address', 'invalid@email.com');
        await page.type('#password', 'invalidpassword');
        await page.click('#login-button');
        await page.waitForSelector('.alert');
    
        const errorMessage = await page.$eval('.alert', el => el.textContent);
        expect(errorMessage).toContain('You entered a wrong username or password.');
      });

      it("shows a success message after submitting a form", async () => {
        await page.goto("http://localhost:3000/login");
        await page.waitForSelector("#login-form");
    
        await page.click("#email-address");
        await page.type("#email-address", "username@gmail.com");
    
        await page.click("#password");
        await page.type("#password", "password");
    
        await page.click("#login-button");

        await page.waitForNavigation();

        expect(page.url()).toContain('/profilehomepage')
    
      });

});

describe('ConsultUs Component', () => {
    let browser;
    let page;
  
    beforeAll(async () => {
      browser = await puppeteer.launch();
      page = await browser.newPage();
      await page.goto('http://localhost:3000/consultus'); // Replace with your ConsultUs page URL
    });
  
    afterAll(async () => {
      await browser.close();
    });
  
    it('should display initial content correctly', async () => {
      // Assert that initial content is displayed correctly
      const headerText = await page.$eval('h1', el => el.textContent);
      expect(headerText).toBe('Want to save some money for small issues you can fix by yourself?');
  
      const buttonText = await page.$eval('button', el => el.textContent);
      expect(buttonText).toBe('Open Chatbot');
    });
  
    // it('should toggle chatbot when button is clicked', async () => {
    //   // Click the button to open the chatbot
    //   await page.click('button');
  
    //   // Wait for chatbot to appear
    //   await page.waitForSelector('.chatbot-container');
  
    //   // Assert that chatbot is open
    //   const chatbotVisible = await page.$('.chatbot-container');
    //   expect(chatbotVisible).toBeTruthy();
  
    //   // Click the button again to close the chatbot
    //   await page.click('button');
  
    //   // Wait for chatbot to disappear
    //   await page.waitForSelector('.chatbot-container', { hidden: true });
  
    //   // Assert that chatbot is closed
    //   const chatbotHidden = await page.$('.chatbot-container');
    //   expect(chatbotHidden).toBeNull();
    // });
  });