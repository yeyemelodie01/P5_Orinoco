import {createDomElement, appendElementTo, formatPrice} from './functions.js';

window.onload = function() {
    renderConfirm();
};

function renderConfirm() {
    let orderid = localStorage.getItem('orderconfirm');
    console.log(orderid);
    for(const order in orderid){
        console.log(orderid [order]);
    }
        /*if(orderConfirmation !== null) {
            for(let i = 0; i < orderConfirmation; i++){
                let productId = orderConfirmation[i];

                console.log(productId);


                let productNumber = createDomElement({
                    tagName: 'p',
                    classList: 'textProduct',
                    textNode: "Merci pour votre commande n°132345, avec un montant de 345€ a bien été enregistré",
                });

                let confirmMain = document.getElementById("orderconfirm");
                appendElementTo(confirmMain, productNumber);
            }
        }*/
    }
//<p>Merci pour votre commande n°123456, avec un montant de 850€ a bien été enregistré</p>
