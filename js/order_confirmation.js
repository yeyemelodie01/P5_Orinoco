import {createDomElement, appendElementTo, formatPrice} from './functions.js';

window.onload = function() {
    renderConfirm();
};

function renderConfirm() {
    let orderId = localStorage.getItem('orderId');
    let contact = localStorage.getItem('contact');
    let totalPrice = localStorage.getItem('totalPrice');
    console.log(orderId, contact, totalPrice);
    console.log(contact.firstname);

                let productNumber = createDomElement({
                    tagName: 'p',
                    classList: 'textProduct',
                    textNode: "Merci pour votre commande n°"+ orderId +" , avec un montant de "+ totalPrice +" a bien été enregistré",
                });

                let confirmMain = document.getElementById("orderconfirm");
                appendElementTo(confirmMain, productNumber);
    }
//<p>Merci pour votre commande n°123456, avec un montant de 850€ a bien été enregistré</p>
