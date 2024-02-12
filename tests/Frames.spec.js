import {test,expect} from '@playwright/test'
test('Double click actions',async({page})=>{


await page.goto('https://ui.vision/demo/webtest/frames/')

//Totall no.of frames
const allframes=await page.frames()
console.log("Total No.of frames:", allframes.length)

// Approach:1 url or name of the frame

/*const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
await frame1.fill("[name='mytext1']",'hello')
await page.waitForTimeout(5000)*/

// Approach:2 frame locator
const frm1= await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
//[css selector  ]
frm1.fill("hello world")
await page.waitForTimeout(5000)


})