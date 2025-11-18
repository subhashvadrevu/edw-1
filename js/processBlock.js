export const initProcessBlock = () => {
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

    expandAndCollapseProcessBlock();


};


const expandAndCollapseProcessBlock = () => {

    const pbcards = document.querySelectorAll(".pb-card");

    const collapseCard = (card) => {
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

    const expandCard = (card) => {
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

};