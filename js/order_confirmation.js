import {createDomElement, appendElementTo, formatPrice} from './functions.js';

let orderConfirmation = JSON.parse(localStorage.getItem("orderconfirm"));

console.log(orderConfirmation);

window.onload = function() {
    renderConfirm();
};

//<p>Merci pour votre commande n°123456, avec un montant de 850€ a bien été enregistré</p>

    for(let i = 0; i < orderConfirmation; i++){
    let productId = orderConfirmation[i]._id;

    console.log(productId);


    let productNumber = createDomElement({
        tagName: 'p',
        classList: 'textProduct',
        textNode: "Merci pour votre commande ("+ orderConfirmation[i]._id + ", avec un montant de" + orderConfirmation[i].totalPrice + "a bien été enregistré" + ")",
    });

    let confirmMain = document.getElementById("orderconfirm");
    appendElementTo(confirmMain, productNumber);
}

function renderConfirm() {

}
