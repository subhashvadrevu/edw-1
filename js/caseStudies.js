import {createNewElement, appendChildToParent} from './domFunctions.js';



export const initCaseStudies = () => {
    const case_studies = document.getElementsByClassName('case-studies')[0];

    const case_studies_content = [
        {
            "case_study_section_p": "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
            "case_study_section_link_p": "Learn more",
            "case_study_section_link_img_path": "../images/case_studies_arrow.svg",
        },

        {
            "case_study_section_p": "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
            "case_study_section_link_p": "Learn more",
            "case_study_section_link_img_path": "../images/case_studies_arrow.svg",
        },

        {
            "case_study_section_p": "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
            "case_study_section_link_p": "Learn more",
            "case_study_section_link_img_path": "../images/case_studies_arrow.svg",
        }
    ];


    
    case_studies_content.forEach((data, idx) => {

        let case_study_section = createNewElement('section');
        let case_study_section_p = createNewElement('p');
        let case_study_section_link = createNewElement('div');
        let case_study_section_link_p = createNewElement('p');
        let case_study_section_link_img = createNewElement('img');
        let line = createNewElement('div');


        case_study_section.className = "case-study";
        case_study_section_link.className = "link";
        line.className = "line";

        case_study_section_p.innerHTML = data.case_study_section_p;
        case_study_section_link_p.innerHTML = data.case_study_section_link_p;
        case_study_section_link_img.src = data.case_study_section_link_img_path;


        appendChildToParent(case_study_section, case_study_section_p);
        appendChildToParent(case_study_section, case_study_section_link);

        appendChildToParent(case_study_section_link, case_study_section_link_p);
        appendChildToParent(case_study_section_link, case_study_section_link_img);


        appendChildToParent(case_studies, case_study_section);

        if(parseInt(idx) !== case_studies_content.length-1) {
            appendChildToParent(case_studies, line);
        }


    });

};