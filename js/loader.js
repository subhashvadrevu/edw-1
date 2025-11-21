import {createNewElement, appendChildToParent} from "./domFunctions.js";

export const initLoader = () => {

    const loader_container = createNewElement('div');
    const loader = createNewElement('div');
    const loader_svg = createNewElement('img');

    loader_container.className = "loader-container";
    loader.className = "loader";
    loader_svg.className = "loader-svg";

    loader_svg.src = "../images/loader.svg";


    appendChildToParent(loader, loader_svg);
    appendChildToParent(loader_container, loader);
    appendChildToParent(document.body, loader_container);



    const home = document.getElementsByClassName('homepage')[0];


    home.style.visibility = "hidden";
    document.body.style.overflowY = "hidden";
    loader_container.style.visibility = "visible";

    // executes after 1s
    setTimeout(() => {
        loader_container.style.visibility = "hidden";
        home.style.visibility = "visible";
        document.body.style.overflowY = "visible";
    }, 500);
};