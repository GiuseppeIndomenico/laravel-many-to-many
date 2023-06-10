import './bootstrap';
import '~resources/scss/app.scss';
import * as bootstrap from 'bootstrap';
import.meta.glob([
    '../img/**'
]);

const deleteSubmitButton = document.querySelectorAll('.delete-button');

deleteSubmitButton.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        //  da continuare questo pezzo--->


    })

})
