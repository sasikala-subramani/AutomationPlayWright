import {test,expect} from '@playwright/test'
test('Right click actions',async({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    const rightclickbtn= await page.locator("//span[normalize-space()='right click me']")   
    //Thave to call above 

//Right click action

await rightclickbtn.click({button:'right'})   //calling the element which is stored in before step
await page.waitForTimeout(5000)




})
