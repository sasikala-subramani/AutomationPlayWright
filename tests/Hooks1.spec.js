import {test,expect} from '@playwright/test'



test('Home Page Test TC1',async({page})=>{

await page.goto('https://demoblaze.com/index.html')
//Login process   (teststore123  , Test@Store)
await page.locator("#login2").click()
await page.locator("#loginusername").fill("teststore123")
await page.locator("#loginpassword").fill("Test@Store")
await page.locator("button[onclick='logIn()']").click()
//Home page
//No.of products present in the webpage
const productLists=await page.$$('.hrefch')
expect(productLists).toHaveLength(9)
//logout 
await page.locator('#logout2').click()
})

test('Add product to the cart TC2',async({page})=>{
    await page.goto('https://demoblaze.com/index.html')
//Login
await page.locator("#login2").click()
   //await page.waitForTimeout(5000);
await page.locator("#loginusername").fill("teststore123")
await page.locator("#loginpassword").fill("Test@Store")
await page.locator("button[onclick='logIn()']").click()
//Add product To cart
await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
await page.locator('//a[normalize-space()="Add to cart"]').click()
  
//--Handling Alert window
  await page.on('dialog',async dialog=>{
    if(dialog.message().toContain('Product added.'))
        await dialog.accept();
    })
//Logout
await page.locator('#logout2').click()

})