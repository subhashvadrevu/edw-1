import {createNewElement, appendChildToParent} from "./domFunctions.js";



export const initContactForm = () => {
    const contact_section = document.getElementsByClassName('contact-block')[0];

    const radio_btn_data = [
        {
            'radio_btn_div_classname': 'contact-radio-btn1',
            'radio_btn_img_id': 'contact-radio-btn1-img',
            'radio_btn_img_src': '../images/select_rb.png',
            'radio_btn_text_classname': 'contact-radio-btn1-p',
            'radio_btn_text_content': 'Say hi',
        },

        {
            'radio_btn_div_classname': 'contact-radio-btn2',
            'radio_btn_img_id': 'contact-radio-btn2-img',
            'radio_btn_img_src': '../images/unselect_rb.png',
            'radio_btn_text_classname': 'contact-radio-btn2-p',
            'radio_btn_text_content': 'Get a Quote',
        }
    ];


    const contact_field_data = [
        {
            'field_id': 'field1',
            'field_p_content': 'Name',
            'field_span_content': '',
            'input_field_tag': 'input',
            'input_field_type': 'text',
            'input_field_name': 'name',
            'input_field_id': 'name',
            'input_field_placeholder': 'Name',
            'required': false
        },

        {
            'field_id': 'field2',
            'field_p_content': 'Email*',
            'field_span_content': 'This field is required',
            'input_field_tag': 'input',
            'input_field_type': 'email',
            'input_field_name': 'email',
            'input_field_id': 'email',
            'input_field_placeholder': 'Email',
            'required': true
        },

        {
            'field_id': 'field3',
            'field_p_content': 'Message*',
            'field_span_content': 'This field is required',
            'input_field_tag': 'textarea',
            'input_field_type': '',
            'input_field_name': 'message',
            'input_field_id': 'message',
            'input_field_placeholder': 'Message',
            'required': true
        },
    ];





    const contact_content = createNewElement('div');
    const contact_form = createNewElement('form');
    const contact_radio_btns = createNewElement('div');
    const contact_fields = createNewElement('div');
    const contact_btn = createNewElement('button');

    const contact_section_img = createNewElement('img');



    contact_content.className = "contact-content";
    contact_form.className = "contact-form";
    contact_radio_btns.className = "contact-radio-btns";
    contact_fields.className = "contact-fields";
    contact_section_img.className = "contact-illustration";


    


    radio_btn_data.forEach((data, idx) => {
        
        let radio_btn = createNewElement('div');
        let radio_btn_img = createNewElement('img');
        let radio_btn_text = createNewElement('p');

        radio_btn.className = data.radio_btn_div_classname;
        radio_btn_img.id = data.radio_btn_img_id;
        radio_btn_img.src = data.radio_btn_img_src;
        radio_btn_text.className = data.radio_btn_text_classname;
        radio_btn_text.textContent = data.radio_btn_text_content;


        appendChildToParent(radio_btn, radio_btn_img);
        appendChildToParent(radio_btn, radio_btn_text);

        appendChildToParent(contact_radio_btns, radio_btn);

    });




    contact_field_data.forEach((data, idx) => {
        const field = createNewElement('div');
        field.id = data.field_id;

        const field_div = createNewElement('div');
        const field_div_p = createNewElement('p');
        const field_div_span = createNewElement('span');

        field_div_p.textContent = data.field_p_content;
        field_div_span.textContent = data.field_span_content;

        const input_field = createNewElement(data.input_field_tag.trim());
        input_field.id = data.input_field_id;
        input_field.name = data.input_field_name;
        
        if(data.input_field_tag.trim() === "input") {
            input_field.type = data.input_field_type;
        }
        input_field.placeholder = data.input_field_placeholder;
        input_field.required = data.required;


        appendChildToParent(field_div, field_div_p);
        appendChildToParent(field_div, field_div_span);

        appendChildToParent(field, field_div);
        appendChildToParent(field, input_field);

        appendChildToParent(contact_fields, field);
    });


    contact_btn.textContent = "Send Message";
    contact_btn.type = "submit";
    contact_section_img.src = "../images/contact-Illustration.png";


    appendChildToParent(contact_form, contact_radio_btns);
    appendChildToParent(contact_form, contact_fields);
    appendChildToParent(contact_form, contact_btn);



    appendChildToParent(contact_content, contact_form);


    appendChildToParent(contact_section, contact_content);
    appendChildToParent(contact_section, contact_section_img);

};