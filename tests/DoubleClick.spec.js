import {test,expect} from '@playwright/test'
test('Double click actions',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
const btn_copytext=await page.locator("//button[normalize-space()='Copy Text']")

//Double click

await btn_copytext.dblclick()
const field2=await page.locator('#field2')
await expect(field2).toHaveValue('Hello World!')

await page.waitForTimeout(5000)
})