const puppeteer = require('puppeteer');
const $ = require('cheerio');
// const fs = require('fs');
const fi = require('./utils/file-interface');
const indeedParse = require('./indeed-parser');

const url = "https://www.indeed.com/jobs?q=software+developer&l=vancouver%2C+WA&radius=100&sort=date";

var indeedJobs = [];
// let jobsTitles = [];
// let companies = [];

const OUTPUTFILEPATH = "./output/";
const OUTPUTFILENAME = "data.html";

const afterReadData = (err, data) => {
    if(err) throw err;
    const html = data.toString();
    indeedParse.parseIndeedJobs(html, indeedJobs);
    console.log(indeedJobs);
};

const main = () => {
    fi.readFromFile(OUTPUTFILEPATH+OUTPUTFILENAME, afterReadData);
};

main();

// puppeteer.launch().then(
//     async browser => {
//         const page = await browser.newPage();
//         await page.goto(url);
//         const content = await page.content();
//         // fi.writeToFile("./output/data.html", html);
//         // await $('#results-body', html).each(function() {
//         //     // console.log(this);
//         //     // console.log($(this).text());
//         // });
//         const resultsBody = await $('.jobtitle', content);
//         await resultsBody.attribs.array.forEach(element => {
            
//         });
//         await console.log();
//         // await console.log(resultsBody.attribs);
//         await browser.close();
// });