import {createNewElement, appendChildToParent} from "./domFunctions.js";
import { initTestimonialCarousel } from "./slider.js";


export const initTestimonialCards = () => {
    const testimonial_cards = document.getElementsByClassName('testimonial-cards')[0];

    const testimonial_cards_data = [
        {
            "testimonial_card_img_path": "../images/bubble.png",
            "testimonial_content_text": "\"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.\"",
            "testimonial_content_names_h4": "John Smith",
            "testimonial_content_names_p": "Marketing Director at XYZ Corp"
        },

        {
            "testimonial_card_img_path": "../images/bubble.png",
            "testimonial_content_text": "\"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.\"",
            "testimonial_content_names_h4": "John Smith",
            "testimonial_content_names_p": "Marketing Director at XYZ Corp"
        },

        {
            "testimonial_card_img_path": "../images/bubble.png",
            "testimonial_content_text": "\"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.\"",
            "testimonial_content_names_h4": "John Smith",
            "testimonial_content_names_p": "Marketing Director at XYZ Corp"
        },

        {
            "testimonial_card_img_path": "../images/bubble.png",
            "testimonial_content_text": "\"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.\"",
            "testimonial_content_names_h4": "John Smith",
            "testimonial_content_names_p": "Marketing Director at XYZ Corp"
        },

        {
            "testimonial_card_img_path": "../images/bubble.png",
            "testimonial_content_text": "\"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.\"",
            "testimonial_content_names_h4": "John Smith",
            "testimonial_content_names_p": "Marketing Director at XYZ Corp"
        },

        {
            "testimonial_card_img_path": "../images/bubble.png",
            "testimonial_content_text": "\"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.\"",
            "testimonial_content_names_h4": "John Smith",
            "testimonial_content_names_p": "Marketing Director at XYZ Corp"
        },

        {
            "testimonial_card_img_path": "../images/bubble.png",
            "testimonial_content_text": "\"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.\"",
            "testimonial_content_names_h4": "John Smith",
            "testimonial_content_names_p": "Marketing Director at XYZ Corp"
        },

        {
            "testimonial_card_img_path": "../images/bubble.png",
            "testimonial_content_text": "\"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.\"",
            "testimonial_content_names_h4": "John Smith",
            "testimonial_content_names_p": "Marketing Director at XYZ Corp"
        },

        {
            "testimonial_card_img_path": "../images/bubble.png",
            "testimonial_content_text": "\"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.\"",
            "testimonial_content_names_h4": "John Smith",
            "testimonial_content_names_p": "Marketing Director at XYZ Corp"
        }
    ];




    testimonial_cards_data.forEach((data, idx) => {
        let testimonial_card = createNewElement('div');
        let testimonial_card_img = createNewElement('img');
        let testimonial_content = createNewElement('div');
        let testimonial_content_names = createNewElement('div');
        let testimonial_content_names_h4 = createNewElement('h4');
        let testimonial_content_names_p = createNewElement('p');


        testimonial_card.className = "testimonial-card";
        testimonial_content.className = "testimonial-content";
        testimonial_content_names.className = "testimonial-content-names"


        testimonial_card_img.src = data.testimonial_card_img_path;
        testimonial_content.textContent = data.testimonial_content_text;
        testimonial_content_names_h4.textContent = data.testimonial_content_names_h4;
        testimonial_content_names_p.textContent = data.testimonial_content_names_p;



        appendChildToParent(testimonial_card, testimonial_card_img);
        appendChildToParent(testimonial_card, testimonial_content);
        appendChildToParent(testimonial_card, testimonial_content_names);
        appendChildToParent(testimonial_content_names, testimonial_content_names_h4);
        appendChildToParent(testimonial_content_names, testimonial_content_names_p);


        appendChildToParent(testimonial_cards, testimonial_card);
    });

    initTestimonialCarousel();

};