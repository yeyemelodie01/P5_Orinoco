import {createDomElement, appendElementTo, formatPrice} from './functions.js';

window.onload = function() {
    renderConfirm();
};

function renderConfirm() {
    let orderId = localStorage.getItem('orderId');
    let contact = localStorage.getItem('contact');
    let totalPrice = localStorage.getItem('totalPrice');
    console.log(orderId, contact, totalPrice);

    let br = createDomElement({
        tagName: 'br',
    });

    let productOrderId = createDomElement({
        tagName: 'p',
        innerHTML: "Merci pour votre commande, celle-ci porte le <strong> n°orderId </strong>.",
    });

    let productPrice = createDomElement({
        tagName: 'p',
        textNode: ""+ br +"Le montant de "+ totalPrice +" sera débité a l'expédition des produits."
    });

    let confirmDiv = document.getElementById("orderconfirm-div");
    appendElementTo(confirmDiv, productOrderId);
    appendElementTo(confirmDiv, productPrice);
}
