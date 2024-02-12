public static async NewBrowserContext(config: PlaywrightTestConfig) {
    let browser;
    switch(config.use.browserName)
    {
      case BrowserEnum.chromium:
        const { chromium } = require('playwright');
        browser = await chromium.launch({ 
          headless: config.use.headless
        });
        break;
      case BrowserEnum.firefox:
        const { firefox } = require('playwright');
        browser = await firefox.launch({ 
          headless: config.use.headless
        });
        break;
      case BrowserEnum.webkit:
        const { webkit } = require('playwright');
        browser =  await webkit.launch({ 
          headless: config.use.headless
        });
        break;
    }
    return await browser.newContext();    
  }