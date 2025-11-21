import {createNewElement, appendChildToParent} from "./domFunctions.js";


export const initServices = () => {
    const cards_section = document.getElementsByClassName("cards-section")[0];


    const content = [
        {
            "l1": "Search engine",
            "l2": "optimization",
            "link_img_path": "../images/arrow1.svg",
            "link_txt": "Learn more",
            "card_right_img_path": "../images/c1.svg",
            "href": "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
            
        },

        {
            "l1": "Pay-per-click",
            "l2": "advertising",
            "link_img_path": "../images/arrow1.svg",
            "link_txt": "Learn more",
            "card_right_img_path": "../images/c2.svg",
            "href": "https://corporatefinanceinstitute.com/resources/valuation/pay-per-click-ppc/"
        },

        {
            "l1": "Social Media",
            "l2": "Marketing",
            "link_img_path": "../images/arrow2.png",
            "link_txt": "Learn more",
            "card_right_img_path": "../images/c3.svg",
            "href": " https://www.upgrad.com/digital-marketing-and-communication-pgc-mica-lpv1/?utm_source[…]-CG6Y_iaKyjGaLDHrSDbl33nV-2F3PhCbYhE_j8Ro4a26IihoCI9kQAvD_BwE"
        },

        {
            "l1": "Email",
            "l2": "Marketing",
            "link_img_path": "../images/arrow1.svg",
            "link_txt": "Learn more",
            "card_right_img_path": "../images/c4.svg",
            "href": " https://mailchimp.com/marketing-glossary/email-marketing/"
        },

        {
            "l1": "Content",
            "l2": "Creation",
            "link_img_path": "../images/arrow1.svg",
            "link_txt": "Learn more",
            "card_right_img_path": "../images/c5.png",
            "href": "https://www.conductor.com/academy/content-creation/"
        },

        {
            "l1": "Analytics and",
            "l2": "Tracking",
            "link_img_path": "../images/arrow2.png",
            "link_txt": "Learn more",
            "card_right_img_path": "../images/c6.svg",
            "href": "https://marketingplatform.google.com/about/analytics/"
        }


    ]
    



    content.forEach((data, idx) => {
        let card_section = createNewElement('section');
        let card_left = createNewElement('div');
        let heading = createNewElement('div');
        let l1 = createNewElement('div');
        let l2 = createNewElement('div');
        let l3 = createNewElement('div');
        let link = createNewElement('a');
        let link_img = createNewElement('img');
        let link_txt = createNewElement('div');
        let card_right = createNewElement('div');
        let img_right = createNewElement('img');


        let inc_idx = parseInt(idx)+1;
        card_section.className = `card${inc_idx}`;
        card_left.className = "card-left";
        heading.className = "heading";
        l1.className = "label";
        l2.className = "label";
        l3.className = "label";
        link.className = "link";
        card_right.className = "card-right";




        l1.textContent = data.l1;
        l2.textContent = data.l2;
        link.href = data.href;
        link.target = "_blank";
        link_img.src = data.link_img_path;
        link_txt.textContent = data.link_txt;
        img_right.src = data.card_right_img_path;



        appendChildToParent(card_section, card_left);
        appendChildToParent(card_section, card_right);

        appendChildToParent(card_left, heading);
        appendChildToParent(card_left, link);

        appendChildToParent(card_right, img_right);

        appendChildToParent(heading, l1);
        appendChildToParent(heading, l2);
        appendChildToParent(heading, l3);

        appendChildToParent(link, link_img);
        appendChildToParent(link, link_txt);



        appendChildToParent(cards_section, card_section);
    });


};