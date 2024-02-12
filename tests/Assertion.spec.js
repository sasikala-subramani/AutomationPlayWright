import {test,expect} from '@playwright/test'
test('Assertion Test',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')
    /* 
1) expect(page).toHaveURL()   Page has URL
2) expect(page).toHaveTitle()   Page has title
3) expect(locator).toBeVisible()  Element is visible
4) expect(locator).toBeEnabled()  Control is enabled  //for inputBoxes
   expect(locator).toBeDisabled() 
5) expect(locator).toBeChecked()  Radio/Checkbox is checked
6) expect(locator).toHaveAttribute() Element has attribute
7) expect(locator).toHaveText()  Element matches text
8) expect(locator).toContainText()  Element contains text
9) expect(locator).toHaveValue(value) Input has a value
10) expect(locator).toHaveCount()  List of elements has given length */

await expect(page).toHaveURL('https://demo.nopcommerce.com/register')   //link 

await expect(page).toHaveTitle('nopCommerce demo store. Register')  //check in the dev tool in Title 
//Element is visible
const logo= await page.locator('.header-logo');
await expect(logo).toBeVisible()
//Control is enabled  //for inputBoxes
const firstName=await page.locator('#FirstName')
await expect(firstName).toBeEnabled()

//Radio/Checkbox is checked
const malebRadio=await page.locator('#gender-male')
await malebRadio.click()
await expect(malebRadio).toBeChecked()

//Checkbox
const checkbox=await page.locator('#Newsletter')
await checkbox.check()
await expect(checkbox).toBeChecked()

//Element has attribute
const registerAttri=await page.locator('#register-button')
await expect(registerAttri).toHaveAttribute('type','submit')

//Element matches text (Exact value)  VS Element contains text (Partial value-Have to pass same value but partial)
await expect(await page.locator('//strong[normalize-space()="Your Personal Details"]')).toContainText('Personal')
await expect(await page.locator('.page-title h1')).toHaveText('Register')

//toHaveValue(value) Input has a value
const inputBox=await page.locator('#Email')
await inputBox.fill('Test@123')
await expect(inputBox).toHaveValue('Test@123')

//toHaveCount()  List of elements has given length--Dates/Month/Year present in D.D
 const options=await page.locator('select[name="DateOfBirthMonth"] option')
 //await expect(options).toHaveCount(13)
 await expect(options).not.toHaveCount(11)   //negative assertion



})