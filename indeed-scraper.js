const fi = require('./utils/file-interface');
const pptr = require('./utils/puppeteer-interface');
const indeedParse = require('./indeed-parser');

// const job_search_url = "https://www.indeed.com/jobs?q=software+developer&l=vancouver%2C+WA&radius=100&sort=date";
const url = "https://www.indeed.com/jobs?q=software+developer&l=Longview,+WA&radius=50&sort=date";

var indeedJobs = [];

const OUTPUTFILEPATH = "./output/";
const OUTPUTFILENAME = "data.html";

const afterGetHtml = (err, data) => {
    if(err) throw err;
    // indeedParse.parseIndeedJobs(data, indeedJobs);
    // console.log(indeedJobs);
    console.log(data);
};


const main = () => {
    // fi.readFromFile(OUTPUTFILEPATH+OUTPUTFILENAME, afterGetHtml);
    pptr.getHtml(url, afterGetHtml);
};

main();

