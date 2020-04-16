const puppeteer = require('puppeteer');


const getHtml = async (url, callback) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    debugger;
    content = await page.content();
    // console.log(content);
    callback(undefined, content);
    await browser.close();
};
    // puppeteer.launch().then(
    //     async browser => {
    //         const page = await browser.newPage();
    //         await page.goto(job_search_url);
    //         const content = await page.content();

    //         // fi.writeToFile("./output/data.html", html);

    //         await browser.close();
    // });

module.exports = {
    getHtml
};