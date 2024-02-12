import {test,expect} from '@playwright/test'

let page;
test.beforeEach(async({browser})=>{
    page=await browser.newPage()
    await page.goto('https://demoblaze.com/index.html')
//Login process   (teststore123  , Test@Store)
await page.locator("#login2").click()
await page.locator("#loginusername").fill("teststore123")
await page.locator("#loginpassword").fill("Test@Store")
await page.locator("button[onclick='logIn()']").click()

});

test.afterEach(async()=>{
//logout 
await page.locator('#logout2').click()
});

test('Home Page Test ',async()=>{

//No.of products present in the webpage in Home page
const productLists=await page.$$('.hrefch')
await page.waitForTimeout(5000);
expect(productLists).toHaveLength(9)

})

test('Add product to the cart TC2',async()=>{
    
//Add product To cart
await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
await page.locator('//a[normalize-space()="Add to cart"]').click()
  
//--Handling Alert window
  await page.on('dialog',async dialog=>{
    if(dialog.message().toContain('Product added.'))
        await dialog.accept()
    })

})