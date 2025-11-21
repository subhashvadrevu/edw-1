export const initRadioButtons = () => {
    const rb1 = document.querySelector(".contact-radio-btn1");
    const rb2 = document.querySelector(".contact-radio-btn2");
    const msg = document.getElementById("message");

    rb1.addEventListener('click', () => {
        const rbimg = rb1.children[0];
        const rbimgname = rbimg.src;

        if (rbimgname.includes("images/unselect_rb.png")) {
            rbimg.src = "../images/select_rb.png";
            rb2.children[0].src = "../images/unselect_rb.png";

            msg.value = "";
            msg.style.color = "#000";
        }
    });

    rb2.addEventListener('click', () => {
        const rbimg = rb2.children[0];
        const rbimgname = rbimg.src;

        if (rbimgname.includes("images/unselect_rb.png")) {
            rbimg.src = "../images/select_rb.png";
            rb1.children[0].src = "../images/unselect_rb.png";

            msg.value = "We're interested in your services! Please contact us";
            msg.style.color = "#000";
        }
    });


    const header = document.getElementsByTagName('header')[0];
    const header_left = header?.children[0];
    const header_btn = header_left?.children[2];

    header_btn?.addEventListener('click', () => {
        window.location.href = "/#contact-us";
        sayHiRadioBtnClick();
    });


    const cta_textnbtn = document.getElementsByClassName('textnbtn')[0];
    const cta_btn = cta_textnbtn?.children[2];

    cta_btn?.addEventListener('click', () => {
        window.location.href = "/#contact-us";
        sayHiRadioBtnClick();
    });

};

export const sayHiRadioBtnClick = () => {
    const rb1 = document.querySelector(".contact-radio-btn1");
    rb1.click();
};


export const getAQuoteRadioBtnClick = () => {
    const rb2 = document.querySelector(".contact-radio-btn2");
    rb2.click();
};


