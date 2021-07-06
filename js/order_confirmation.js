import {createDomElement, appendElementTo, formatPrice} from './functions.js';

window.onload = function() {
    renderConfirm();
};

function renderConfirm() {
    let orderId = localStorage.getItem('orderId');
    let contact = localStorage.getItem('contact');
    let totalPrice = localStorage.getItem('totalPrice');
    console.log(orderId, contact, totalPrice);



    let productOrderId = createDomElement({
        tagName: 'p',
        innerHTML: "Merci pour votre commande, celle-ci porte le <strong> n°orderId </strong>.",
    });

    let br = createDomElement({
        tagName: 'br',
    });
    appendElementTo(productOrderId, br);

    let productPrice = createDomElement({
        tagName: 'p',
        textNode: "Le montant de "+ totalPrice +" sera débité a l'expédition des produits."
    });

    let confirmDiv = document.getElementById("orderconfirm-div");
    appendElementTo(confirmDiv, productOrderId);
    appendElementTo(confirmDiv, productPrice);
}
