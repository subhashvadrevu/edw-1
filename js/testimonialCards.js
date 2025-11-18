export const initTestimonialCards = () => {
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

};