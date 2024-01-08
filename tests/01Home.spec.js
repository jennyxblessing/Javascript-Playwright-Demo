const {test, expect} = require('@playwright/test')

test ('Navigate to website and log in', async ({page}) =>{
    
    await page.goto('https://www.saucedemo.com/v1/');
    await expect.soft(page).toHaveTitle(/Swag Labs/); 

    await page.click("#login-button");
    await expect.soft(page.getByText('Epic Sadface')).toBeVisible();

    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.keyboard.press('Enter');
    await expect.soft(page.getByText('Products')).toBeVisible();

 })