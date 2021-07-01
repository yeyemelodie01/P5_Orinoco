import {createDomElement, appendElementTo, formatPrice} from './functions.js';

let orderConfirmation = JSON.parse(localStorage.getItem("form"));

console.log(orderConfirmation);

window.onload = function() {
    renderConfirmation();
};