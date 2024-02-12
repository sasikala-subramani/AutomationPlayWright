//https://gotranscript.com/text-compare

import {test,expect} from '@playwright/test'
test('Mouse actions',async({page})=>{

await page.goto('https://gotranscript.com/text-compare')
//way 1
//await page.locator('[name="text1"]').fill('welcome');

//way2
await page.type('[name="text1"]','welcome here')

//Ctrl+A  ==select the text
await page.keyboard.press('Control+A');
//Ctrl+C  ==copy the text
await page.keyboard.press('Control+C');
//Tab
await page.keyboard.down('Tab');
await page.keyboard.up('Tab');


await page.keyboard.press('Control+V');
//Ctrl+V

await page.waitForTimeout(5000);
    



})