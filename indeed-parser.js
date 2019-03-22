const $ = require('cheerio');
// const fs = require('fs');

const parseIndeedJobCompany = (index, html, job) => {

};

const parseIndeedJobs = (html, jobs) =>{
    // console.log(html);

    // get list of all job elements
    // go through each and create a job object
    // add the job object to the jobs list until all elements used.
    $('.company', html).each(function (ii, element) {
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

        // job.jobTitle = $('.jobtitle', html)[ii].attribs.title;
        parseIndeedJobTitle(ii,html, job);
        jobs.push(job);
    });
    return 0;
};

const parseIndeedJobTitle = (index, html, job) => {
    job.jobTitle = $('.jobtitle', html)[index].attribs.title;
};

module.exports = {
    parseIndeedJobs
};