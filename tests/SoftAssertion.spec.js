import {test,expect} from '@playwright/test'
test('Soft Assertion Test',async({page})=>{

    await page.goto('https://demoblaze.com/index.html')

    //Hard Assertion
    // await expect(page).toHaveTitle('STORE123')
    // await expect(page).toHaveURL('https://demoblaze.com/index.html')
    // await expect(page.locator('#nava')).toBeVisible()

    
    //Soft Assertion

    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html')
    await expect.soft(page.locator('#nava')).toBeVisible()

})