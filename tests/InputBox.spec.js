import {test,expect} from '@playwright/test'

test('Input',async({page})=>{
    
    await page.goto('https://demoblaze.com/index.html')
//Login process   (teststore123  , Test@Store)
await page.locator("#login2").click();


await expect(page.locator("#loginusername")).toBeEditable();
await expect(page.locator("#loginusername")).toBeEmpty();
await expect(page.locator("#loginusername")).toBeEnabled();
await expect(page.locator("#loginusername")).toBeVisible();


//await page.locator("#loginusername").fill("teststore123");
await page.fill('#loginusername','teststore123');

});