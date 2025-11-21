import {createNewElement, appendChildToParent} from "./domFunctions.js";


export const initLogotypes = () => {
    const logotypes = document.getElementsByClassName("logotypes")[0];

    const images = [
        "./../images/amazon.svg", 
        "./../images/dribble.svg", 
        "./../images/hubspot.svg", 
        "./../images/notion.svg", 
        "./../images/netflix.svg", 
        "./../images/zoom.svg"
    ]


    images.forEach(img_path => {
        let img = createNewElement('img');
        img.src = img_path

        appendChildToParent(logotypes, img);
    });

};