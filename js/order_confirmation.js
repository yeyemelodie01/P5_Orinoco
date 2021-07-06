import {createDomElement, appendElementTo, formatPrice} from './functions.js';

window.onload = function() {
    renderConfirm();
};

function renderConfirm() {
    let orderId = localStorage.getItem('orderId');
    let contact = localStorage.getItem('contact');
    let totalPrice = localStorage.getItem('totalPrice');
    console.log(orderId, contact, totalPrice);

    let productNumber = createDomElement({
        tagName: 'p',
        textNode: "Merci pour votre commande, celle-ci porte le n°"+ orderId +". Le montant de "+ totalPrice +" sera débité a l'expédition des produits.",
    });

    let confirmDiv = document.getElementById("orderconfirm-div");
    appendElementTo(confirmDiv, productNumber);
}
