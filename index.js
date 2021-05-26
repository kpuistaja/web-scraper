const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({headless: false, defaultViewport: {width: 1920, height: 1080}});
  const page = await browser.newPage();
  await page.goto('https://invisiblebread.com');
  await page.waitForSelector('#comic-1');  
  const element = await page.$('#comic-1');       
  await element.screenshot({path: '1.png'})

  await browser.close();
})();