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
};