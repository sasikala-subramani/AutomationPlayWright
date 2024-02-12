

import {test,expect} from '@playwright/test'
test('Table Test',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('#productTable')

    const table_Cloumns=await page.locator('thead tr th')
    console.log("No of cloumns:" , await table_Cloumns.count())
    await expect(await table_Cloumns.count()).toBe(4)

    const table_Rows=await page.locator('tbody tr')
    console.log("No of Rows:", await table_Rows.count())
    await expect(await table_Rows.count()).toBe(5)


})