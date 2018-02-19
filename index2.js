const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch({
  headless:false,
  executablePath:'/Applications/Chromium.app/Contents/MacOS/Chromium'
  });
  const page = await browser.newPage();
  await page.goto('https://y.qq.com');
  await page.screenshot({path: 'yqq.png'});

  await browser.close();
})();