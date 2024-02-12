

import {test,expect} from '@playwright/test'
test('Radio Button',async({page})=>{

    await page.goto('https://www.hyrtutorials.com/p/basic-controls.html')
    await page.locator('#femalerb').check()

    //or
   // await page.check('#femalerb')

   await expect(await page.locator('#femalerb').toBeChecked()).toBeTruthy()

   //Check Boxes
   await page.locator('#englishchbx').check()
   //await page.locator('#englishchbx').uncheck()
   await expect(await page.locator('#englishchbx').isChecked).toBeTruthy()






    

})
