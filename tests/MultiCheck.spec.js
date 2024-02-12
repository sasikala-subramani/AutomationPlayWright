
import {test,expect} from '@playwright/test'
test('Multi Checkbox Test',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')


    const checkboxes= ['//input[@id="monday" and @type="checkbox"]',
                                        '//input[@id="wednesday" and @type="checkbox"]',
                                        '//input[@id="friday" and @type="checkbox"]'];

      for(const box of checkboxes)  //Multi check
      {
        await page.locator(box).check();
      }

   //Un check multiselect
   
   for(const box of checkboxes){
    
    if(await page.locator(box).isChecked())
    {
        await page.locator(box).uncheck()
    }

}
    

})