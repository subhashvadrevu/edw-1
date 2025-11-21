import {createNewElement, appendChildToParent} from "./domFunctions.js"; 


export const initTeam = () => {
    const group_of_cards = document.getElementsByClassName('group-of-cards')[0];

    const team_data = [
        {
            "goc_pic_img_path": "../images/goc-pic.png",
            "goc_name_h4": "John Smith",
            "goc_name_p": "CEO and Founder",
            "goc_icon_img_path": "../images/linkedin.png",
            "goc_text": "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
            "goc_linkedin": "https://www.linkedin.com"
        },

        {
            "goc_pic_img_path": "../images/goc-pic2.png",
            "goc_name_h4": "Jane Doe",
            "goc_name_p": "Director of Operations",
            "goc_icon_img_path": "../images/linkedin.png",
            "goc_text": "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
            "goc_linkedin": "https://www.linkedin.com"
        },

        {
            "goc_pic_img_path": "../images/goc-pic3.png",
            "goc_name_h4": "Michael Brown",
            "goc_name_p": "Senior SEO Specialist",
            "goc_icon_img_path": "../images/linkedin.png",
            "goc_text": "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
            "goc_linkedin": "https://www.linkedin.com"
        },

        {
            "goc_pic_img_path": "../images/goc-pic4.png",
            "goc_name_h4": "Emily Johnson",
            "goc_name_p": "PPC Manager",
            "goc_icon_img_path": "../images/linkedin.png",
            "goc_text": "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
            "goc_linkedin": "https://www.linkedin.com"
        },

        {
            "goc_pic_img_path": "../images/goc-pic5.png",
            "goc_name_h4": "Brian Williams",
            "goc_name_p": "Social Media Specialist",
            "goc_icon_img_path": "../images/linkedin.png",
            "goc_text": "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
            "goc_linkedin": "https://www.linkedin.com"
        },

        {
            "goc_pic_img_path": "../images/goc-pic6.png",
            "goc_name_h4": "Sarah Kim",
            "goc_name_p": "Content Creator",
            "goc_icon_img_path": "../images/linkedin.png",
            "goc_text": "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
            "goc_linkedin": "https://www.linkedin.com"
        }
    ];



    team_data.forEach((data, idx) => {
        let goc_card = createNewElement('div');
        let goc_content = createNewElement('div');
        let goc_person = createNewElement('div');
        let goc_picnname = createNewElement('div');
        let goc_pic = createNewElement('div');
        let goc_pic_img = createNewElement('img');
        let goc_name = createNewElement('div');
        let goc_name_h4 = createNewElement('h4');
        let goc_name_p = createNewElement('p');
        let goc_icon = createNewElement('div');
        let goc_icon_a = createNewElement('a');
        let goc_icon_img = createNewElement('img');
        let goc_line = createNewElement('div');
        let goc_text = createNewElement('p');


        goc_card.className = "goc-card";
        goc_content.className = "goc-content";
        goc_person.className = "goc-person";
        goc_picnname.className = "goc-picnname";
        goc_pic.className = "goc-pic";
        goc_name.className = "goc-name";
        goc_icon.className = "goc-icon";
        goc_line.className = "goc-line";
        goc_text.className = "goc-text";



        appendChildToParent(goc_card, goc_content);
        appendChildToParent(goc_content, goc_person);
        appendChildToParent(goc_content, goc_line);
        appendChildToParent(goc_content, goc_text);
        appendChildToParent(goc_person, goc_picnname);
        appendChildToParent(goc_person, goc_icon_a);
        appendChildToParent(goc_icon_a, goc_icon);
        appendChildToParent(goc_picnname, goc_pic);
        appendChildToParent(goc_picnname, goc_name);
        appendChildToParent(goc_pic, goc_pic_img);
        appendChildToParent(goc_name, goc_name_h4);
        appendChildToParent(goc_name, goc_name_p);
        appendChildToParent(goc_icon, goc_icon_img);


        goc_pic_img.src = data.goc_pic_img_path;
        goc_name_h4.textContent = data.goc_name_h4;
        goc_name_p.textContent = data.goc_name_p;
        goc_icon_a.href = data.goc_linkedin;
        goc_icon_a.target = "_blank";
        goc_icon_img.src = data.goc_icon_img_path;
        goc_text.textContent = data.goc_text;



        appendChildToParent(group_of_cards, goc_card);
    });

};