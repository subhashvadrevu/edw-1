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


    for(let idx in case_studies_content) {

        let case_study_section = document.createElement('section');
        let case_study_section_p = document.createElement('p');
        let case_study_section_link = document.createElement('div');
        let case_study_section_link_p = document.createElement('p');
        let case_study_section_link_img = document.createElement('img');
        let line = document.createElement('div');


        case_study_section.className = "case-study";
        case_study_section_link.className = "link";
        line.className = "line";

        case_study_section_p.innerHTML = case_studies_content[idx]["case_study_section_p"];
        case_study_section_link_p.innerHTML = case_studies_content[idx]["case_study_section_link_p"];
        case_study_section_link_img.src = case_studies_content[idx]["case_study_section_link_img_path"];


        case_study_section.appendChild(case_study_section_p);
        case_study_section.appendChild(case_study_section_link);

        case_study_section_link.appendChild(case_study_section_link_p);
        case_study_section_link.appendChild(case_study_section_link_img);


        case_studies.appendChild(case_study_section);

        if(parseInt(idx) === case_studies_content.length-1) {
            break;
        }

        case_studies.appendChild(line);

    }

};