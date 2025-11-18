export const initToast = () => {
    const toast = document.getElementById('toast');

    const toast_text = document.createElement('p');
    toast_text.textContent = "Form submitted successfully !"

    const toast_undo = document.createElement('img');
    toast_undo.style.width = "30px";
    toast_undo.style.height = "30px";
    toast_undo.src = "images/cross.svg";

    toast.appendChild(toast_text);
    toast.appendChild(toast_undo);


    toast_undo.addEventListener('click', () => {
        toast.style.visibility = "hidden";
    });





    // -----------------------------------------------------------------------------------




    const contact_form = document.getElementsByClassName('contact-form')[0];

    // contact form has 3 children, button third child
    const contact_form_button = contact_form.children[2];


    const field2 = document.getElementById('field2');
    const field3 = document.getElementById('field3');

    const name_field = document.getElementById('name');
    const email_field = document.getElementById('email');
    const message_field = document.getElementById('message');



    email_field.addEventListener('input', () => {
        field2.children[0].children[1].style.display = "none";
    });

    message_field.addEventListener('input', () => {
        field3.children[0].children[1].style.display = "none";
    });


    contact_form_button.addEventListener('click', (e) => {

        e.preventDefault(); // page reload stop cheyadaniki

        if(email_field.value.trim() === "") {
            field2.children[0].children[1].style.display = "block";
            field2.children[0].children[1].style.color = "red";
        }

        else if(message_field.value.trim() === "") {
            field3.children[0].children[1].style.display = "block";
            field3.children[0].children[1].style.color = "red";
        }
        
        else {
            
            toast.style.visibility = "visible";

            // executes after 5s
            setTimeout(() => {
                toast.style.visibility = "hidden";
            }, 5000);

        }


        name_field.value = "";
        email_field.value = "";
        message_field.value = "";
            

    });
};