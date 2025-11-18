export const initTeam = () => {
    const group_of_cards = document.getElementsByClassName('group-of-cards')[0];

    const team_data = [
        {
            "goc_pic_img_path": "../images/goc-pic.png",
            "goc_name_h4": "John Smith",
            "goc_name_p": "CEO and Founder",
            "goc_icon_img_path": "../images/linkedin.png",
            "goc_text": "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
        },

        {
            "goc_pic_img_path": "../images/goc-pic2.png",
            "goc_name_h4": "Jane Doe",
            "goc_name_p": "Director of Operations",
            "goc_icon_img_path": "../images/linkedin.png",
            "goc_text": "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
        },

        {
            "goc_pic_img_path": "../images/goc-pic3.png",
            "goc_name_h4": "Michael Brown",
            "goc_name_p": "Senior SEO Specialist",
            "goc_icon_img_path": "../images/linkedin.png",
            "goc_text": "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
        },

        {
            "goc_pic_img_path": "../images/goc-pic4.png",
            "goc_name_h4": "Emily Johnson",
            "goc_name_p": "PPC Manager",
            "goc_icon_img_path": "../images/linkedin.png",
            "goc_text": "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
        },

        {
            "goc_pic_img_path": "../images/goc-pic5.png",
            "goc_name_h4": "Brian Williams",
            "goc_name_p": "Social Media Specialist",
            "goc_icon_img_path": "../images/linkedin.png",
            "goc_text": "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
        },

        {
            "goc_pic_img_path": "../images/goc-pic6.png",
            "goc_name_h4": "Sarah Kim",
            "goc_name_p": "Content Creator",
            "goc_icon_img_path": "../images/linkedin.png",
            "goc_text": "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries"
        }
    ];




    for(let idx in team_data) {
        let goc_card = document.createElement('div');
        let goc_content = document.createElement('div');
        let goc_person = document.createElement('div');
        let goc_picnname = document.createElement('div');
        let goc_pic = document.createElement('div');
        let goc_pic_img = document.createElement('img');
        let goc_name = document.createElement('div');
        let goc_name_h4 = document.createElement('h4');
        let goc_name_p = document.createElement('p');
        let goc_icon = document.createElement('div');
        let goc_icon_img = document.createElement('img');
        let goc_line = document.createElement('div');
        let goc_text = document.createElement('p');


        goc_card.className = "goc-card";
        goc_content.className = "goc-content";
        goc_person.className = "goc-person";
        goc_picnname.className = "goc-picnname";
        goc_pic.className = "goc-pic";
        goc_name.className = "goc-name";
        goc_icon.className = "goc-icon";
        goc_line.className = "goc-line";
        goc_text.className = "goc-text";



        goc_card.appendChild(goc_content);
        goc_content.appendChild(goc_person);
        goc_content.appendChild(goc_line);
        goc_content.appendChild(goc_text);
        goc_person.appendChild(goc_picnname);
        goc_person.appendChild(goc_icon);
        goc_picnname.appendChild(goc_pic);
        goc_picnname.appendChild(goc_name);
        goc_pic.appendChild(goc_pic_img);
        goc_name.appendChild(goc_name_h4);
        goc_name.appendChild(goc_name_p);
        goc_icon.appendChild(goc_icon_img);


        goc_pic_img.src = team_data[idx]["goc_pic_img_path"];
        goc_name_h4.textContent = team_data[idx]["goc_name_h4"];
        goc_name_p.textContent = team_data[idx]["goc_name_p"];
        goc_icon_img.src = team_data[idx]["goc_icon_img_path"];
        goc_text.textContent = team_data[idx]["goc_text"];


        group_of_cards.appendChild(goc_card);
    }

};