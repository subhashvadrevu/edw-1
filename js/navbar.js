import {createNewElement, appendChildToParent} from "./domFunctions.js";
import {getAQuoteRadioBtnClick} from "./radio.js";

export const initNavbar = (frame10_data) => {
    const navbar = document.getElementsByClassName("navbar")[0];

    const frame9 = createNewElement('div');
    const frame9_a = createNewElement('a');
    const frame9_a_img = createNewElement('img');

    const frame10 = createNewElement('div');



    frame10_data.forEach((data, idx) => {
        let li = createNewElement('li');

        let tag = data.tag;
        let li_ele = createNewElement(tag);
        li_ele.textContent = data.content;
        if(tag === 'a') {
            li_ele.href = data.href;
        }
        else if(tag === 'button') {
            
            li_ele.addEventListener('click', () => {
                window.location.href = data.href;
                getAQuoteRadioBtnClick();
            });

        }

        appendChildToParent(li, li_ele);
        appendChildToParent(frame10, li);
    });





    const menu = createNewElement('img');





    frame9.className = "frame9";
    frame10.className = "frame10";
    menu.id = "menu";


    frame9_a.href = "/";
    frame9_a_img.src = "../images/Frame 9.png";
    frame9_a_img.alt = "logo";
    menu.src = "../images/menu.png";
    menu.style.width = "36px";
    menu.style.height = "36px";


    appendChildToParent(frame9_a, frame9_a_img);
    appendChildToParent(frame9, frame9_a);

    appendChildToParent(navbar, frame9);
    appendChildToParent(navbar, frame10);
    appendChildToParent(navbar, menu);










    
    
    // mini - navbar
    
    const landingpage = document.getElementsByClassName("landingpage")[0];
    
    const outer_modal = createNewElement('div');
    outer_modal.className = "navbar-modal-outer";
    
    const modal = createNewElement('div');
    modal.className = "navbar-modal-inner";
    
    const modal_ul = createNewElement('ul');
    modal_ul.className = "modal-ul";
    frame10_data.forEach((data) => {
        let li = createNewElement('li');
        let li_tag = createNewElement(data.tag);
        
        li_tag.href = data.href
        li_tag.textContent = data.content;
        appendChildToParent(li, li_tag);
        appendChildToParent(modal_ul, li);
    });
    
    appendChildToParent(modal, modal_ul);
    appendChildToParent(outer_modal, modal)
    appendChildToParent(landingpage, outer_modal);
    
    
    
    window.addEventListener('resize', () => {
        const width = window.innerWidth;

        if(width >= 1024) {
            outer_modal.style.display = "none";
            menu.src = "../images/menu.png";
        }

    });
    
    
    menu.addEventListener('click', () => {

        if(menu.src.includes("menu.png")) {

            outer_modal.style.display = 'block';
            menu.src = "../images/cross.svg";

        }

        else if(menu.src.includes("cross.svg")) {
            outer_modal.style.display = "none";
            menu.src = "../images/menu.png";
        }

    });

};