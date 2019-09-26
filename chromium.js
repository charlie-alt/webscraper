const chrome = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

async function getScreenshot(url, type, quality, fullPage) {
    const browser = await puppeteer.launch({
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
    });

    const page = await browser.newPage();
    
    if (url=="/furnishedhousing.com/locations/ma/boston") {
        
          await page.goto(url);
          await page.setViewport({ width: 1680, height: 907 })

          await page.waitForSelector('.module > .wrapper > .container > .general')
          await page.click('.module > .wrapper > .container > .general')

          await page.waitForSelector('.city-items > .clearfix:nth-child(1) > #properties > .heading > .title')
          await page.click('.city-items > .clearfix:nth-child(1) > #properties > .heading > .title')

          await page.waitForSelector('.city-items > .clearfix:nth-child(2) > #properties > .heading > .title')
          await page.click('.city-items > .clearfix:nth-child(2) > #properties > .heading > .title')

          await page.waitForSelector('.city-items > .clearfix:nth-child(3) > #properties > .heading > .title')
          await page.click('.city-items > .clearfix:nth-child(3) > #properties > .heading > .title')

          await page.waitForSelector('.city-items > .clearfix:nth-child(4) > #properties > .heading > .title')
          await page.click('.city-items > .clearfix:nth-child(4) > #properties > .heading > .title')

          await page.waitForSelector('.city-items > .clearfix:nth-child(5) > #properties > .heading > .title')
          await page.click('.city-items > .clearfix:nth-child(5) > #properties > .heading > .title')

          await page.waitForSelector('.general > #yw0 > .pager > .js-infinite-load-more-loader > .js-infinite-load-more-link')
          await page.click('.general > #yw0 > .pager > .js-infinite-load-more-loader > .js-infinite-load-more-link')

          await page.waitForSelector('.city-items > .clearfix:nth-child(6) > #properties > .heading > .title')
          await page.click('.city-items > .clearfix:nth-child(6) > #properties > .heading > .title')

          await page.waitForSelector('.city-items > .clearfix:nth-child(7) > #properties > .heading > .title')
          await page.click('.city-items > .clearfix:nth-child(7) > #properties > .heading > .title')

          await page.waitForSelector('.city-items > .clearfix:nth-child(8) > #properties > .heading > .title')
          await page.click('.city-items > .clearfix:nth-child(8) > #properties > .heading > .title')

          await page.waitForSelector('.general > #yw0 > .pager > .js-infinite-load-more-loader > .js-infinite-load-more-link')
          await page.click('.general > #yw0 > .pager > .js-infinite-load-more-loader > .js-infinite-load-more-link')

          await page.waitForSelector('.general > #yw0 > .pager > .js-infinite-load-more-loader > .js-infinite-load-more-link')
          await page.click('.general > #yw0 > .pager > .js-infinite-load-more-loader > .js-infinite-load-more-link')
    
          const file = await page.screenshot({ type,  quality, fullPage });
          await browser.close();
        
    }
    
    else {
        await page.goto(url);
        const file = await page.screenshot({ type,  quality, fullPage });
        await browser.close();
    }
    return file;
}

module.exports = { getScreenshot };
