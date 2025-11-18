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

    for(let img_path of images) {
        let img = document.createElement('img');
        img.src = img_path

        logotypes.appendChild(img);
    }
};