const {test, expect} = require('@playwright/test')

test ('Navigate to website and check that heading is as expected', async ({page}) =>{
    
    await page.goto ('https://automationintesting.online/');
    await expect (page).toHaveTitle('Restful-booker-platform demo'); 

})

test ('Select Book This Room button', async ({page}) =>{

    await page.click('');

})