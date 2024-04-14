const { When, Then, Given, After } = require('cucumber');
const assert = require('assert');
const { Builder, By, until } = require('selenium-webdriver');
// const driver = require('../support/config');
const driver = require('../support/hooks');


Given('I am on the login page', async function () {
    await driver.get('http://localhost:3000/login');
});

When('I enter my email and password', async function () {
    const emailInput = await driver.findElement({ id: 'email-address' });
    await emailInput.sendKeys('juliet@example.com');

    const passwordInput = await driver.findElement({ id: 'password' });
    await passwordInput.sendKeys('password');
});

When('I click on the login button', async function () {
    const loginButton = await driver.findElement({ id: 'login-button' });
    await loginButton.click();
});
