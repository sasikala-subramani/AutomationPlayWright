import {test,expect} from '@playwright/test'
test('Trace Viewer',async({page})=>{

await page.goto('https://demoblaze.com/index.html')

await expect(page).toHaveTitle('dSTORE')
await page.locator('#login2').click()
await page.locator('#loginusername').fill('teststore123')
await page.locator('#loginpassword').fill('Test@Store')
await page.locator('//button[normalize-space()="Log in"]').click()

await expect(page.locator('//button[normalize-space()="Log in"]')).toBeVisible();





})