import { createNewElement, appendChildToParent } from "./domFunctions.js";

export const initProcessBlock = () => {
    const process_block = document.getElementsByClassName('process-block')[0];

    const process_block_content = [
        { "pb_number": "01", "pb_text": "Consultation", "pb_icon_img_path": "images/plus.png", "pb_expand_text": "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." },
        { "pb_number": "02", "pb_text": "Research and Strategy Development", "pb_icon_img_path": "images/plus.png", "pb_expand_text": "After the consultation, we will conduct thorough research to identify your target audience, competitors, and industry trends. This will help us develop a comprehensive strategy to achieve your business goals." },
        { "pb_number": "03", "pb_text": "Implementation", "pb_icon_img_path": "images/plus.png", "pb_expand_text": "Once the research is complete, we will begin implementing the strategy. This may include optimizing your website, creating content, and launching marketing campaigns. Our team will work diligently to ensure that all tasks are completed on time and within budget." },
        { "pb_number": "04", "pb_text": "Monitoring and Optimization", "pb_icon_img_path": "images/plus.png", "pb_expand_text": "After the initial implementation, we will continuously monitor and optimize your marketing efforts to ensure maximum results. This may involve adjusting ad campaigns, refining content, and analyzing data to identify areas for improvement." },
        { "pb_number": "05", "pb_text": "Reporting and Communication", "pb_icon_img_path": "images/plus.png", "pb_expand_text": "Throughout the process, we will provide regular reports on the performance of your marketing campaigns. This will allow you to track progress, measure success, and make informed decisions about future strategies." },
        { "pb_number": "06", "pb_text": "Continual Improvement", "pb_icon_img_path": "images/plus.png", "pb_expand_text": "Based on the data and insights gathered from the reports, we will make recommendations for further improvement. This may involve refining existing strategies, exploring new opportunities, or adjusting tactics to better align with your business goals." }
    ];

    process_block_content.forEach((data, idx) => {
        let pb_card = createNewElement('div');
        let pb_content = createNewElement('div');
        let pb_label = createNewElement('div');
        let pb_icon = createNewElement('div');
        let pb_number = createNewElement('p');
        let pb_txt = createNewElement('p');
        let pb_icon_img = createNewElement('img');

        pb_card.className = "pb-card";
        pb_content.className = "pb-content";
        pb_label.className = "pb-label";
        pb_number.className = "pb-number";
        pb_txt.className = "pb-text";
        pb_icon.className = "icon";

        appendChildToParent(pb_card, pb_content);
        appendChildToParent(pb_content, pb_label);
        appendChildToParent(pb_content, pb_icon);
        appendChildToParent(pb_label, pb_number);
        appendChildToParent(pb_label, pb_txt);
        appendChildToParent(pb_icon, pb_icon_img);

        pb_number.textContent = data.pb_number;
        pb_txt.textContent = data.pb_text;
        pb_icon_img.src = data.pb_icon_img_path;

        // NEW: extra expandable section
        const extra = createNewElement('div');
        extra.className = "pb-extra";

        const line = createNewElement('div');
        line.className = "pb-line";

        const para = createNewElement('p');
        para.className = "pb-desc";
        para.textContent =data.pb_expand_text;

        appendChildToParent(extra, line);
        appendChildToParent(extra, para);
        appendChildToParent(pb_card, extra);

        process_block.append(pb_card);
    });

    addExpandCollapseLogic();
};


const addExpandCollapseLogic = () => {
    const cards = document.querySelectorAll(".pb-card");

    const collapseCard = (card) => {
        const img = card.querySelector(".icon img");
        const extra = card.querySelector(".pb-extra");

        img.style.transform = "rotate(0deg)";
        img.src = "images/plus.png";

        card.classList.remove("expanded");

        // Collapse slightly faster (0.7 sec)
        extra.style.transition = "max-height 0.7s ease, opacity 0.5s ease";

        extra.classList.remove("open");
    };


    const expandCard = (card) => {
        const img = card.querySelector(".icon img");
        const extra = card.querySelector(".pb-extra");

        img.style.transform = "rotate(180deg)";
        img.src = "images/minus.svg";

        card.classList.add("expanded");

        // SLOWER EXPANSION (1.1 sec)
        extra.style.transition = "max-height 1.1s ease, opacity 0.9s ease";

        extra.classList.add("open");
    };


    cards.forEach(card => {
        card.addEventListener("click", () => {
            const img = card.querySelector(".icon img");

            if (img.src.includes("plus.png")) {
                cards.forEach(other => { if (other !== card) collapseCard(other); });
                expandCard(card);
            } else {
                collapseCard(card);
            }
        });
    });
};
