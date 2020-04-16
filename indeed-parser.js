const $ = require('cheerio');

const parseJob = (job_entity, job) => {
    
    job.title = $('.jobtitle', job_entity).text().trim();
    job.company = $('.company', job_entity).text().trim();
    job.location = $('.location', job_entity).text().trim();
    var url = "https://www.indeed.com";
    var job_url = $('.jobtitle',job_entity).attr("href");
    if(job_url)
        job.jobViewURL = url+job_url;
    else
        job.jobViewURL = url+$('.jobtitle',job_entity).children().attr("href");
    debugger;
};
const parseIndeedJobs = (html, jobs) =>{
    // console.log(html);
    // get list of all job element with selector .jobsearch-SerpJobCard
    var job_entities = $('.jobsearch-SerpJobCard', html);

    job_entities.each((index, element)=>{
        var job = {
            title:"",
            company:"",
            location:"",
            jobViewURL: "",
        };
        parseJob(element, job);
        jobs.push(job);
    });
    return 0;
};


module.exports = {
    parseIndeedJobs
};