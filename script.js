const rb1 = document.querySelector(".contact-radio-btn1");
const rb2 = document.querySelector(".contact-radio-btn2");
const msg = document.getElementById("message");

rb1.addEventListener('click', () => {
    const rbimg = rb1.children[0];
    const rbimgname = rbimg.src;

    if (rbimgname.includes("images/unselect_rb.png")) {
        rbimg.src = "images/select_rb.png";
        rb2.children[0].src = "images/unselect_rb.png";

        msg.value = "";
        msg.style.color = "#000";
    }
});

rb2.addEventListener('click', () => {
    const rbimg = rb2.children[0];
    const rbimgname = rbimg.src;

    if (rbimgname.includes("images/unselect_rb.png")) {
        rbimg.src = "images/select_rb.png";
        rb1.children[0].src = "images/unselect_rb.png";

        msg.value = "We're interested in your services! Please contact us";
        msg.style.color = "#000";
    }
});



// -----------------------------------------------------------------------------------

// logotypes

const logotypes = document.getElementsByClassName("logotypes")[0];

const images = [
    "./images/amazon.svg", 
    "./images/dribble.svg", 
    "./images/hubspot.svg", 
    "./images/notion.svg", 
    "./images/netflix.svg", 
    "./images/zoom.svg"
]


for(let img_path of images) {
    img = document.createElement('img');
    img.src = img_path

    logotypes.appendChild(img);
}


// -----------------------------------------------------------------------------------

// services cards


const cards_section = document.getElementsByClassName("cards-section")[0];


const content = [
    {
        "l1": "Search engine",
        "l2": "optimization",
        "link_img_path": "images/arrow1.svg",
        "link_txt": "Learn more",
        "card_right_img_path": "images/c1.svg"
    },

    {
        "l1": "Pay-per-click",
        "l2": "advertising",
        "link_img_path": "images/arrow1.svg",
        "link_txt": "Learn more",
        "card_right_img_path": "images/c2.svg"
    },

    {
        "l1": "Social Media",
        "l2": "Marketing",
        "link_img_path": "images/arrow2.png",
        "link_txt": "Learn more",
        "card_right_img_path": "images/c3.svg"
    },

    {
        "l1": "Email",
        "l2": "Marketing",
        "link_img_path": "images/arrow1.svg",
        "link_txt": "Learn more",
        "card_right_img_path": "images/c4.svg"
    },

    {
        "l1": "Content",
        "l2": "Creation",
        "link_img_path": "images/arrow1.svg",
        "link_txt": "Learn more",
        "card_right_img_path": "images/c5.png"
    },

    {
        "l1": "Analytics and",
        "l2": "Tracking",
        "link_img_path": "images/arrow2.png",
        "link_txt": "Learn more",
        "card_right_img_path": "images/c6.svg"
    }


]


for(let idx in content) {
    let card_section = document.createElement('section');
    let card_left = document.createElement('div');
    let heading = document.createElement('div');
    let l1 = document.createElement('div');
    let l2 = document.createElement('div');
    let l3 = document.createElement('div');
    let link = document.createElement('div');
    let link_img = document.createElement('img');
    let link_txt = document.createElement('div');
    let card_right = document.createElement('div');
    let img_right = document.createElement('img');


    inc_idx = parseInt(idx)+1;
    card_section.className = `card${inc_idx}`;
    card_left.className = "card-left";
    heading.className = "heading";
    l1.className = "label";
    l2.className = "label";
    l3.className = "label";
    link.className = "link";
    card_right.className = "card-right";




    l1.textContent = content[idx]["l1"];
    l2.textContent = content[idx]["l2"];
    link_img.src = content[idx]["link_img_path"];
    link_txt.textContent = content[idx]['link_txt']
    img_right.src = content[idx]["card_right_img_path"];



    card_section.appendChild(card_left);
    card_section.appendChild(card_right);

    card_left.appendChild(heading);
    card_left.appendChild(link);

    card_right.appendChild(img_right);

    heading.appendChild(l1);
    heading.appendChild(l2);
    heading.appendChild(l3);

    link.appendChild(link_img);
    link.appendChild(link_txt);



    cards_section.appendChild(card_section);
}




// -----------------------------------------------------------------------------------




// case studies content

const case_studies = document.getElementsByClassName('case-studies')[0];



const case_studies_content = [
    {
        "case_study_section_p": "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
        "case_study_section_link_p": "Learn more",
        "case_study_section_link_img_path": "images/case_studies_arrow.svg",
    },

    {
        "case_study_section_p": "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
        "case_study_section_link_p": "Learn more",
        "case_study_section_link_img_path": "images/case_studies_arrow.svg",
    },

    {
        "case_study_section_p": "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
        "case_study_section_link_p": "Learn more",
        "case_study_section_link_img_path": "images/case_studies_arrow.svg",
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





// -----------------------------------------------------------------------------------




// process-block-cards

const process_block = document.getElementsByClassName('process-block')[0];


const process_block_content = [
    {
        "pb_number": "01",
        "pb_text": "Consultation",
        "pb_icon_img_path": "images/plus.png"
    },

    {
        "pb_number": "02",
        "pb_text": "Research and Strategy Development",
        "pb_icon_img_path": "images/plus.png"
    },

    {
        "pb_number": "03",
        "pb_text": "Implementation",
        "pb_icon_img_path": "images/plus.png"
    },

    {
        "pb_number": "04",
        "pb_text": "Monitoring and Optimization",
        "pb_icon_img_path": "images/plus.png"
    },

    {
        "pb_number": "05",
        "pb_text": "Reporting and Communication",
        "pb_icon_img_path": "images/plus.png"
    },

    {
        "pb_number": "06",
        "pb_text": "Continual Improvement",
        "pb_icon_img_path": "images/plus.png"
    }
];



for(let idx in process_block_content) {

    let pb_card = document.createElement('div');
    let pb_content = document.createElement('div');
    let pb_label = document.createElement('div');
    let pb_icon = document.createElement('div');
    let pb_number = document.createElement('p');
    let pb_txt = document.createElement('p');
    let pb_icon_img = document.createElement('img');


    pb_card.className = "pb-card";
    pb_content.className = "pb-content";
    pb_label.className = "pb-label";
    pb_number.className = "pb-number";
    pb_txt.className = "pb-text";
    pb_icon.className = "icon";


    pb_card.appendChild(pb_content);
    pb_content.appendChild(pb_label);
    pb_content.appendChild(pb_icon);
    pb_label.appendChild(pb_number);
    pb_label.appendChild(pb_txt);
    pb_icon.appendChild(pb_icon_img);



    pb_number.textContent = process_block_content[idx]["pb_number"];
    pb_txt.textContent = process_block_content[idx]["pb_text"];
    pb_icon_img.src = process_block_content[idx]["pb_icon_img_path"];




    process_block.append(pb_card);

}





// -----------------------------------------------------------------------------------


// team -cards


const group_of_cards = document.getElementsByClassName('group-of-cards')[0];


const team_data = [
    {
        "goc_pic_img_path": "images/goc-pic.png",
        "goc_name_h4": "John Smith",
        "goc_name_p": "CEO and Founder",
        "goc_icon_img_path": "images/linkedin.png",
        "goc_text": "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
    },

    {
        "goc_pic_img_path": "images/goc-pic2.png",
        "goc_name_h4": "Jane Doe",
        "goc_name_p": "Director of Operations",
        "goc_icon_img_path": "images/linkedin.png",
        "goc_text": "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
    },

    {
        "goc_pic_img_path": "images/goc-pic3.png",
        "goc_name_h4": "Michael Brown",
        "goc_name_p": "Senior SEO Specialist",
        "goc_icon_img_path": "images/linkedin.png",
        "goc_text": "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
    },

    {
        "goc_pic_img_path": "images/goc-pic4.png",
        "goc_name_h4": "Emily Johnson",
        "goc_name_p": "PPC Manager",
        "goc_icon_img_path": "images/linkedin.png",
        "goc_text": "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
    },

    {
        "goc_pic_img_path": "images/goc-pic5.png",
        "goc_name_h4": "Brian Williams",
        "goc_name_p": "Social Media Specialist",
        "goc_icon_img_path": "images/linkedin.png",
        "goc_text": "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
    },

    {
        "goc_pic_img_path": "images/goc-pic6.png",
        "goc_name_h4": "Sarah Kim",
        "goc_name_p": "Content Creator",
        "goc_icon_img_path": "images/linkedin.png",
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






// -----------------------------------------------------------------------------------


// testimonial cards


const testimonial_cards = document.getElementsByClassName('testimonial-cards')[0];


const testimonial_cards_data = [
    {
        "testimonial_card_img_path": "images/bubble.png",
        "testimonial_content_text": "\"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.\"",
        "testimonial_content_names_h4": "John Smith",
        "testimonial_content_names_p": "Marketing Director at XYZ Corp"
    },

    {
        "testimonial_card_img_path": "images/bubble.png",
        "testimonial_content_text": "\"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.\"",
        "testimonial_content_names_h4": "John Smith",
        "testimonial_content_names_p": "Marketing Director at XYZ Corp"
    },

    {
        "testimonial_card_img_path": "images/bubble.png",
        "testimonial_content_text": "\"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.\"",
        "testimonial_content_names_h4": "John Smith",
        "testimonial_content_names_p": "Marketing Director at XYZ Corp"
    },

    {
        "testimonial_card_img_path": "images/bubble.png",
        "testimonial_content_text": "\"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.\"",
        "testimonial_content_names_h4": "John Smith",
        "testimonial_content_names_p": "Marketing Director at XYZ Corp"
    },

    {
        "testimonial_card_img_path": "images/bubble.png",
        "testimonial_content_text": "\"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.\"",
        "testimonial_content_names_h4": "John Smith",
        "testimonial_content_names_p": "Marketing Director at XYZ Corp"
    }
];




for(let idx in testimonial_cards_data) {
    let testimonial_card = document.createElement('div');
    let testimonial_card_img = document.createElement('img');
    let testimonial_content = document.createElement('div');
    let testimonial_content_names = document.createElement('div');
    let testimonial_content_names_h4 = document.createElement('h4');
    let testimonial_content_names_p = document.createElement('p');


    testimonial_card.className = "testimonial-card";
    testimonial_content.className = "testimonial-content";
    testimonial_content_names.className = "testimonial-content-names"


    testimonial_card_img.src = testimonial_cards_data[idx]["testimonial_card_img_path"];
    testimonial_content.textContent = testimonial_cards_data[idx]["testimonial_content_text"];
    testimonial_content_names_h4.textContent = testimonial_cards_data[idx]["testimonial_content_names_h4"];
    testimonial_content_names_p.textContent = testimonial_cards_data[idx]["testimonial_content_names_p"];



    testimonial_card.appendChild(testimonial_card_img);
    testimonial_card.appendChild(testimonial_content);
    testimonial_card.appendChild(testimonial_content_names);
    testimonial_content_names.appendChild(testimonial_content_names_h4);
    testimonial_content_names.appendChild(testimonial_content_names_p);


    testimonial_cards.appendChild(testimonial_card);
}





























// process - block expanf and collapse  


const pbcards = document.querySelectorAll(".pb-card");

function collapseCard(card) {
    if (card.children.length > 1) {
        card.removeChild(card.children[1]);
    }
    if (card.children.length > 1) {
        card.removeChild(card.children[1]);
    }
    card.style.backgroundColor = "#F3F3F3";
    card.style.transition = "500ms ease";

    const img = card.children[0].children[1].children[0];
    img.style.transition = "transform 500ms";
    img.style.transform = "rotate(0deg)";
    img.src = "images/plus.png";
}

function expandCard(card) {
    const img = card.children[0].children[1].children[0];

    card.style.backgroundColor = "#B9FF66";

    card.style.transition = "500ms ease";
    img.style.transition = "transform 500ms";
    img.style.transform = "rotate(180deg)";
    img.src = "images/minus.svg";

    const line = document.createElement('div');
    line.style.width = "100%";
    line.style.height = "1px";
    line.style.backgroundColor = "black";

    const para = document.createElement('p');
    para.textContent = "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.";
    para.style.color = "black";
    para.style.width = "100%";

    card.appendChild(line);
    card.appendChild(para);
    card.style.gap = "30px";
}

pbcards.forEach(card => {
    card.addEventListener("click", () => {
        const image = card.children[0].children[1].children[0];
        const image_name = image.src;

        if (image_name.includes("images/plus.png")) {

            pbcards.forEach(other => {
                if (other !== card) collapseCard(other);
            });

            expandCard(card);
        }

        else {
            collapseCard(card);
        }
    });
});

const left_arrow = document.getElementById('left-arrow');
const right_arrow = document.getElementById('right-arrow');
const tst = document.querySelector('.tst');

console.log(left_arrow, right_arrow, tst);


left_arrow.addEventListener('click', () => {
    tst.scrollBy({ left: -300, behavior: "smooth" });
});


right_arrow.addEventListener('click',  () => {
    tst.scrollBy({ left: 300, behavior: "smooth"});
});
