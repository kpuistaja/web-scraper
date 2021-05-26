const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({headless: false, defaultViewport: {width: 1920, height: 1080}});
  const page = await browser.newPage();
  await page.goto('https://invisiblebread.com');
  for(let i = 1; i<11; i++){
    page.on('load', () => console.log("Loaded: " + page.url())); // page is loaded before taking screenshot
    await page.waitForSelector('#comic-1');  
    const element = await page.$('#comic-1');       
    await element.screenshot({path: `images/${i}.png`});
    await page.waitForSelector('.navi.navi-prev');
    await page.click('.navi.navi-prev');
  }

  await browser.close();
})();