import {test,expect} from '@playwright/test'
test('Mouse actions',async({page})=>{


    await page.goto('https://demo.opencart.com/')
   const desktops= await page.locator("//a[normalize-space()='Desktops']")
   const macbook= await page.loactopr("//a[normalize-space()='Mac (1)']")
   //mouse hover

   await desktops.hover()
   await macbook.hover()

   await page.waitForTimeout(5000)
   

})