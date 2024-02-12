import {test,expect} from '@playwright/test'
test('Drag and Drop',async({page})=>{

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const source= await page.locator('#box6')
    const target=await page.locator('#box106')


   //  box3

   const source1= await page.locator('#box3')
    const target1=await page.locator('#box103')

    //Approach:1
   /* await source.hover()
    await page.mouse.down()

    await target.hover()
   await  page.mouse.up() */


  // approach 2
  await source.dragTo(target)
  await source1.dragTo(target1)

   await page.waitForTimeout(5000)
    


})