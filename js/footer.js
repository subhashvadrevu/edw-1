import {createNewElement, appendChildToParent} from "./domFunctions.js";



export const initFooter = () => {
    const footer = document.getElementsByTagName('footer')[0];


    const navigation_data = [
        {
            'href': '/#contact-us',
            'content': 'About us'
        },

        {
            'href': '/#services',
            'content': 'Services'
        },

        {
            'href': '/#cases',
            'content': 'Use cases'
        },

        {
            'href': '/#team',
            'content': 'Team'
        }
    ];


    const social_icons_data = [
        {
            'src': '../images/f-linkedin.png',
            'href': 'https://www.linkedin.com'
        },

        {
            'src': '../images/f-facebook.png',
            'href': 'https://www.facebook.com'
        },

        {
            'src': '../images/f-twitter.png',
            'href': 'https://www.x.com'
        }
    ];


    const contact_us_info_p_data = [
        "Email: info@positivus.com",
        "Phone: 555-567-8901",
        "Address: 1234 Main St <br/>Moonstone City, Stardust State 12345"
    ];



    const footer_block = createNewElement('section');

    const navigation_contacts = createNewElement('div');

    const f_ele = createNewElement('div');
    const f_ele_a = createNewElement('a');
    const f_ele_a_img = createNewElement('img');
    const f_ele_ul_navigation = createNewElement('ul');
    const f_ele_social_icons = createNewElement('div');

    const frame26 = createNewElement('div');
    const frame26_contact_us = createNewElement('div');
    const contact_us_header = createNewElement('div');
    const contact_us_info = createNewElement('div');

    const frame26_subs_block = createNewElement('div');
    const subs_block_field = createNewElement('input');
    const subs_block_btn = createNewElement('button');
    // const subs_block_field_p = document.createElement('p');



    const f_line_text = createNewElement('div');
    const f_line = createNewElement('div');
    const f_text = createNewElement('div');
    const f_text_cp = createNewElement('p');
    const f_text_pp = createNewElement('p');






    footer_block.className = "footer-block";
    navigation_contacts.className = "navigation-contacts";
    f_ele.className = "f-elements";
    f_ele_a_img.className = "f-logo";
    f_ele_ul_navigation.className = "navigation";
    f_ele_social_icons.className = "social-icons";

    frame26.className = "frame26";
    frame26_contact_us.className = 'contact-us';
    contact_us_header.className = 'contact-us-header';
    contact_us_info.className = 'contact-us-info';

    frame26_subs_block.className = 'subs-block';
    subs_block_field.className = 'subs-block-field';
    subs_block_btn.className = 'subs-block-button';

    f_line_text.className = 'f-line-text';
    f_line.className = 'f-line';
    f_text.className = 'f-text';
    f_text_pp.id = 'f-text-pp';



    f_ele_a.href = "#";
    f_ele_a_img.src = "../images/logo-bw.png";




    appendChildToParent(footer_block, navigation_contacts);
    appendChildToParent(footer_block, f_line_text);

    appendChildToParent(navigation_contacts, f_ele);
    appendChildToParent(navigation_contacts, frame26);

    appendChildToParent(f_ele, f_ele_a);
    appendChildToParent(f_ele, f_ele_ul_navigation);
    appendChildToParent(f_ele, f_ele_social_icons);

    appendChildToParent(f_ele_a, f_ele_a_img);


    navigation_data.forEach((data, idx) => {
        let li = createNewElement('li');
        let a = createNewElement('a');

        a.href = data.href;
        a.textContent = data.content;

        appendChildToParent(li, a);
        appendChildToParent(f_ele_ul_navigation, li);
    });



    social_icons_data.forEach((data, idx) => {
        let a = createNewElement('a');
        a.href = data.href;
        a.target = "_blank";
        let img = createNewElement('img');
        img.src = data.src;

        appendChildToParent(a, img);
        appendChildToParent(f_ele_social_icons, a);
    });





    appendChildToParent(frame26, frame26_contact_us);
    appendChildToParent(frame26_contact_us, contact_us_header);
    for(let i=0; i<3; i++) {
        
        const contact_us_header_label = createNewElement('div');
        contact_us_header_label.className = 'contact-us-header-label';
        appendChildToParent(contact_us_header, contact_us_header_label);
        
        if(i == 0) {
            const contact_us_header_label_h4 = createNewElement('h4');
            contact_us_header_label_h4.textContent = "Contact us";
            appendChildToParent(contact_us_header_label, contact_us_header_label_h4);
        }
    }


    appendChildToParent(frame26_contact_us, contact_us_info);
    contact_us_info_p_data.forEach((data, idx) => {
        const contact_us_info_p = createNewElement('p');
        contact_us_info_p.className = 'contact-us-info-p';

        // console.log(contact_us_info_p_data[i]);
        contact_us_info_p.innerHTML = data;

        appendChildToParent(contact_us_info, contact_us_info_p);
    });




    appendChildToParent(frame26, frame26_subs_block);
    appendChildToParent(frame26_subs_block, subs_block_field);
    subs_block_field.placeholder = "Email";
    // subs_block_field.appendChild(subs_block_field_p);
    // subs_block_field_p.textContent = "Email";

    appendChildToParent(frame26_subs_block, subs_block_btn);
    subs_block_btn.dataset.textFull = "Subscribe to news";
    subs_block_btn.dataset.textShort = "Subscribe";




    appendChildToParent(f_line_text, f_line);
    appendChildToParent(f_line_text, f_text);
    appendChildToParent(f_text, f_text_cp);
    appendChildToParent(f_text, f_text_pp);
    f_text_cp.textContent = "© 2023 Positivus. All Rights Reserved.";
    f_text_pp.textContent = "Privacy Policy";









    appendChildToParent(footer, footer_block);
};