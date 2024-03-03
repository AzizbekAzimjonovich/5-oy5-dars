import jobs from './data.js';

const template = document.getElementById("job-list-template");
const jobList = document.getElementById("job-list");

const filterTemplate = document.getElementById("filter-template").content;
const filterList = document.getElementById("job-list__filter");

jobs.forEach((job) => {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".job-list__image").src = job.logo;
    clone.querySelector(".job-list__status__company").textContent = job.company;
    clone.querySelector(".job-list__position").textContent = job.position;
    clone.querySelector(".job-list__posted").textContent = job.postedAt;
    clone.querySelector(".job-list__contract").textContent = job.contract;
    clone.querySelector(".job-list__location").textContent = job.location;
    clone.querySelector(".job-list__status__new").style.display = job.new ? "block" : "none";
    clone.querySelector(".job-list__status__featured").style.display = job.featured ? "block" : "none";

    //const filterListClone = filterList.content.cloneNode(true);

    /*job.tools.forEach((tool) => {
        const clone2 = filterTemplate.content.cloneNode(true);
        clone2.querySelector(".job-list__filter__item").textContent = tool;
        filterListClone.appendChild(clone2);
    });*/

    //clone.querySelector(".job-list__filter").appendChild(filterListClone);

    jobList.appendChild(clone);
});
