import {createNewElement, appendChildToParent} from "./domFunctions.js";


export const initSubheading = (subheading_data) => {
    
    subheading_data.forEach((data, idx) => {
        const subheading_div = document.getElementsByClassName(data.subheading_div_classname)[0];

        const header_div = createNewElement('div');
        header_div.className = data.header_div_classname;

        for(let i=0; i<3; i++) {
        
            const label_div = createNewElement('div');
            label_div.className = data.label_classname;

            if(i == 0) {
                const label_h2 = createNewElement('h2');
                label_h2.className = data.label_h2_classname;
                label_h2.textContent = data.label_h2_content;
            
                
                appendChildToParent(label_div, label_h2);
            }


            
            appendChildToParent(header_div, label_div);
        }

        const subheading_text = createNewElement('div');
        subheading_text.className = data.subheading_text_classname;
        subheading_text.textContent = data.subheading_text_content;

        
        
        appendChildToParent(subheading_div, header_div);
        appendChildToParent(subheading_div, subheading_text);

    });
};