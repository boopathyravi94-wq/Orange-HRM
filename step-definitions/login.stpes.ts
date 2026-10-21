
import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(15000);

let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Given('I login orangeHRM', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  loginPage = new LoginPage(page);
  await loginPage.openLoginPage();
});

When('I enter the username', async function () {
  await loginPage.enterUsername();
});

When('I enter the password', async function () {
  await loginPage.enterPassword();
});

When('I click the login button', async function () {
  await loginPage.clickLogin();
});

Then('I should see the orangeHRM dashboard', async function () {
  const dashboardVisible = await loginPage.isDashboardVisible();

  if (!dashboardVisible) {
    throw new Error('OrangeHRM dashboard is not visible');
  }

  console.log('OrangeHRM login successful!');

  await page.close();
});
