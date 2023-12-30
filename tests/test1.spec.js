const {test, expect} = require('@playwright/test')

test ('Home', async ({page}) =>{
    
    await page.goto ('https://www.digimarc.com/');
    let pageTitle = page.title();
    await expect (page).toHaveTitle('See Everything, Achieve Anything | Digimarc'); 
    await page.close();

})