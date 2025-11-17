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