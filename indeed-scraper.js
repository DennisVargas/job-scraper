const puppeteer = require('puppeteer');
const $ = require('cheerio');
const fs = require('fs');
const fi = require('../utils/file-interface');

const url = "https://www.indeed.com/jobs?q=software+developer&l=vancouver%2C+WA&radius=100&sort=date";

let jobs = [];
let jobsTitles = [];
let companies = [];

const readData = (callback) => {
    fs.readFile("./output/data.html", (err, data) =>{
        if (err) return callback(err);
        callback(null, data);
    });
};

readData((err, data) => {
    if(err) throw err;

    var html = data.toString();
    // console.log(html);

    $('.company',html).each(function (ii, element) {
    //     console.log(index);

        var job = {
            jobTitle: "",
            company: "",
        };
        if(element.children.length > 1){
    //         // console.log(element.children);
            element.children.forEach((el, jj) => {
                if(el.children){
    //                 // console.log(jj);
    //                 // console.log(el.children[jj-1].data.toString().trim());
                    job.company = el.children[jj-1].data.toString().trim();
                }
            });
        }else{
            job.company = element.children[0].data.toString().trim();
        }

        job.jobTitle = $('.jobtitle', html)[ii].attribs.title;
        jobs.push(job);
    });

    console.log(jobs);

});

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