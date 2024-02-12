import {test,expect} from '@playwright/test'

test.skip('Alert with Ok',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

//Before clicking on the dialog window we have to handle
//Enabling dialog window 
await page.on('dialog', async dialog =>{
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alert box!')   //string double quotes or single quotes
    await dialog.accept();
})

await page.locator('//button[normalize-space()="Alert"]').click();
await page.waitForTimeout(5000);

});

test.skip('Confirmation Alert',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    
    //Before clicking on the dialog window we have to handle Alert window
    //Enabling dialog window 
    await page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')   //string double quotes or single quotes
        //await dialog.accept();
        await dialog.dismiss();
    })
    
    await page.locator('//button[normalize-space()="Confirm Box"]').click();
    await expect(page.locator('#demo')).toHaveText('You pressed Cancel!')
    await page.waitForTimeout(5000);
    
    });

    test('Prompt Alert',async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/')
        
        //Before clicking on the dialog window we have to handle
        //Enabling dialog window 
            await page.on('dialog', async dialog =>{
            expect(dialog.type()).toContain('prompt')
            expect(dialog.message()).toContain('Please enter your name:')   //string double quotes or single quotes
            expect(dialog.defaultValue()).toContain('Harry Potter') 
            await dialog.accept('john');
            //await dialog.dismiss();
        })
        
        await page.locator('//button[normalize-space()="Prompt"]').click();
        await expect(page.locator('#demo')).toHaveText('Hello john! How are you today?')
        await page.waitForTimeout(5000);
        
        });