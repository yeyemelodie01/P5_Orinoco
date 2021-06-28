import {createDomElement, appendElementTo, formatPrice} from './functions.js';

let basketData = JSON.parse(localStorage.getItem("basket"));
let deliveryPrice = 350;

window.onload = function() {
    renderShopping();
};

function checkIfEmptyBasket() {
    if (basketData === null) {
        createDomElement({
            tagName: 'h1',
            classList: ['is-flex', 'is-justify-content-center', 'is-align-items-center', 'empty'],
            textNode: 'Le panier est vide',
            parentId: 'basket'
        });
    }
}

function renderBasketItems() {
    if (basketData !== null) {
        let title = createDomElement({
            tagName: 'h1',
            classList: ['pt-5', 'pb-5', 'has-text-weight-bold'],
            textNode: "Mon panier (" + basketData.length + " article"+ (basketData.length > 1 ? 's': '') +")",
        });

        let divAlignCenter = createDomElement({
            tagName: 'div',
            classList: ['is-flex', 'is-flex-align-items-center', 'has-text-primary', 'mb-4', 'div_align'],
        });

        let iconCircle = createDomElement({
            tagName: 'i',
            classList: ['fas', 'fa-info', 'info-circle'],
        });
        appendElementTo(divAlignCenter, iconCircle);

        let pText = createDomElement({
            tagName: 'p',
            textNode: "Les articles dans le panier ne sont pas réservés.",
        });
        appendElementTo(divAlignCenter, pText);

        let basket = document.getElementById("basket");
        appendElementTo(basket, title);
        appendElementTo(basket, divAlignCenter);

        for (let i = 0; i < basketData.length; i++) {
            let totalPrice = basketData[i].totalPrice;

            let divContent = createDomElement({
                tagName: 'div',
                classList: ['div_product', 'mb-5'],
            });

            let imgBasket =  createDomElement({
                tagName: 'img',
                classList: ['pr-5'],
                src: basketData[i].image,
            });
            appendElementTo(divContent, imgBasket);

            let divSize = createDomElement({
                tagName: 'div',
                classList: ['is-size-4'],
            });
            appendElementTo(divContent, divSize);

            let pProduct = createDomElement({
                tagName: 'p',
                classList: ['has-text-weight-bold', 'is-size-3', 'mb-4'],
                textNode: basketData[i].name,
            });
            appendElementTo(divSize, pProduct);

            let divWidth = createDomElement({
                tagName: 'div',
                classList: ['is-flex', 'is-justify-content-space-between', 'div_panier-width'],
            });
            appendElementTo(divSize, divWidth);

            let pColor = createDomElement({
                tagName: 'p',
                classList: ['mb-2', 'is-justify-content-space-between', 'div_panier-width'],
                textNode: "Couleur : " + basketData[i].detail,
            });
            appendElementTo(divWidth, pColor);

            let pQuantity = createDomElement({
                tagName: 'p',
                classList: ['mb-2'],
                textNode: "Quantité : " + basketData[i].quantity,
            });
            appendElementTo(divWidth, pQuantity);

            let divFlexJustify = createDomElement({
                tagName: 'div',
                classList: ['is-flex', 'is-justify-content-space-between', 'section-panier_marginbottom'],
            });
            appendElementTo(divSize, divFlexJustify);

            let pSize = createDomElement({
                tagName: 'p',
                classList: ['is-size-5'],
                textNode: "Supprimer",
            });
            appendElementTo(divFlexJustify, pSize);

            let deleteIcon = createDomElement({
                tagName: 'i',
                classList: ['fas', 'fa-trash-alt', 'mr-3'],
            });
            appendElementTo(pSize, deleteIcon);

            let pPrice = createDomElement({
                tagName: 'p',
                classList: ['has-text-primary', 'has-text-weight-semibold', 'div_panier-price'],
                textNode: formatPrice(totalPrice/100)
            });

            appendElementTo(divFlexJustify, pPrice);
            appendElementTo(basket, divContent);
        }
    }
}

function renderPrice() {
    let totalPrice = 0;
    if (basketData !== null) {
        for (let i = 0; i < basketData.length; i++) {
            totalPrice += basketData[i].totalPrice;
        }
    }

    let subTotalPrice = createDomElement({
        tagName: 'p',
        textNode: formatPrice(totalPrice/100),
    });
    appendElementTo(document.getElementById("basketSubTotal"), subTotalPrice);

    let totalPriceWithDelivery = createDomElement({
        tagName: 'p',
        textNode: formatPrice((totalPrice + deliveryPrice)/100),
    });

    appendElementTo(document.getElementById("totalTVA"), totalPriceWithDelivery);
}

function createFormInput(form, input)
{
    let div = createDomElement({
        tagName: 'div',
        classList: ['field', 'mb-5'],
    });
    appendElementTo(form, div);

    let label = createDomElement({
        tagName: 'label',
        classList: ['label'],
        for: input.name,
        textNode: input.label + ' *',
    });
    appendElementTo(div, label);

    let divControl = createDomElement({
        tagName: 'div',
        classList: ['control'],
    });
    appendElementTo(div, divControl);

    let inputElement = createDomElement({
        tagName: 'input',
        classList: ['input'],
        id: input.name,
        placeholder: (input.placeholder !== undefined) ? input.placeholder : input.label,
        type: 'text',
    });
    appendElementTo(divControl, inputElement);
}

function showOrderForm() {
    let sectionContent = document.getElementById('divContent');
    let hidden = createDomElement({
        id: 'hiddenContent',
        tagName: 'div',
        classList: ['content-hidden', 'is-flex', 'is-justify-content-center'],
    });
    appendElementTo(sectionContent, hidden);

    let divHidden = createDomElement({
        tagName: 'div',
        classList: ['pl-5', 'content-hidden_width'],
    });
    appendElementTo(hidden, divHidden);

    let addressTitle = createDomElement({
        tagName: 'h2',
        classList: ['title', 'is-2', 'is-flex', 'is-justify-content-flex-start'],
        textNode: 'Mon adresse',
    });
    appendElementTo(divHidden, addressTitle);

    let form = createDomElement({
        tagName: 'form',
    });
    appendElementTo(divHidden, form);

    let divRadio = createDomElement({
        tagName: 'div',
        classList: ['control', 'mb-5', 'is-flex'],
    });
    appendElementTo(form, divRadio);

    let radios = ['Mme', 'Mlle', 'Mr'];
    for (let i = 0; i < radios.length; i++) {
        let divRadioflex = createDomElement({
            tagName: 'div',
            classList: ['is-flex'],
        });
        appendElementTo(divRadio,divRadioflex);

        let radioLabel = createDomElement({
            tagName: 'label',
            classList: ['radio'],
            textNode: radios[i],
        });
        appendElementTo(divRadioflex, radioLabel);

        let radioInput = createDomElement({
            tagName: 'input',
            classList: ['radio', 'radio-flex'],
            name: radios[i],
            value: radios[i],
            type: 'radio',
            textNode: radios[i],
        });
        appendElementTo(divRadioflex, radioInput);
    }

    createFormInput(form, {name: 'lastName', label: 'Nom'});
    createFormInput(form, {name: 'firstName', label: 'Prénom'});
    createFormInput(form, {name: 'phoneNumber', label: 'Numéro de téléphone'});
    createFormInput(form, {name: 'email', label: 'Email', placeholder: 'hello@outlook.com'});
    createFormInput(form, {name: 'address', label: 'Adresse (numéros et rue)', placeholder: 'Adresse'});
    createFormInput(form, {name: 'additionalAddress', label: 'Complément d\'adresse (facultatif)', placeholder: 'Complément d\'adresse'});
    
    let divflexTown = createDomElement({
        tagName: 'div',
        classList: ['is-flex'],
    });
    appendElementTo(form, divflexTown);

    let divPostcode = createDomElement({
        tagName: 'div',
        classList: ['field', 'mb-5', 'mr-6'],
    });
    appendElementTo(divflexTown, divPostcode);

    let labelPostcode = createDomElement({
        tagName: 'label',
        classList: ['label'],
        for: 'codepostal',
        textNode: 'Code Postal',
    });
    appendElementTo(divPostcode, labelPostcode);
    labelPostcode.setAttribute('for', 'codepostal');

    let divcontrolPostcode = createDomElement({
        tagName: 'div',
        classList: ['control'],
    });
    appendElementTo(divPostcode, divcontrolPostcode);

    let inputPostcode = createDomElement({
        tagName: 'input',
        classList: ['input'],
        type: 'text',
        placeholder: 'Code Postal',
    });
    appendElementTo(divcontrolPostcode, inputPostcode);

    let divTown = createDomElement({
        tagName: 'div',
        classList: ['field', 'mb-5'],
    });
    appendElementTo(divflexTown, divTown);

    let labelTown = createDomElement({
        tagName: 'label',
        classList: ['label'],
        for: 'ville',
        textNode: 'Ville',
    });
    appendElementTo(divTown, labelTown);

    let divcontrolTown = createDomElement({
        tagName: 'div',
        classList: ['control'],
    });
    appendElementTo(divTown, divcontrolTown);

    let inputTown = createDomElement({
        tagName: 'input',
        classList: ['input'],
        id: 'ville',
        type: 'text',
        placeholder: 'Ville',
    });
    appendElementTo(divcontrolTown, inputTown);

    let divCheckbox = createDomElement({
        tagName: 'div',
        classList: ['field', 'mb-4'],
    });
    appendElementTo(form, divCheckbox);

    let divcontrolCheckbox = createDomElement({
        tagName: 'div',
        classList: ['control', 'is-flex'],
    });
    appendElementTo(divCheckbox, divcontrolCheckbox);

    let labelCheckbox = createDomElement({
        tagName: 'label',
        classList: ['checkbox'],
        textNode: 'J\'accepte les termes et conditions',
    });
    appendElementTo(divcontrolCheckbox, labelCheckbox);

    let inputCheckbox = createDomElement({
        tagName: 'input',
        classList: ['inputCheckbox'],
        type: 'checkbox',
    });
    appendElementTo(divcontrolCheckbox, inputCheckbox);

    let divButton = createDomElement({
        tagName: 'div',
        classList: ['field', 'is-grouped'],
    });
    appendElementTo(form, divButton);

    let divcontrolSubmit = createDomElement({
        tagName: 'div',
        classList: ['control'],
    });
    appendElementTo(divButton, divcontrolSubmit);

    let buttonSubmit = createDomElement({
        tagName: 'button',
        classList: ['button', 'is-primary'],
        textNode: 'Envoyer',
    });
    appendElementTo(divcontrolSubmit, buttonSubmit);

    let divcontrolCancel = createDomElement({
        tagName: 'div',
        classList: ['control'],
    });
    appendElementTo(divButton, divcontrolCancel);

    let buttonCancel = createDomElement({
        tagName: 'button',
        classList: ['button', 'is-link', 'is-light'],
        textNode: 'Annuler',
    });
    appendElementTo(divcontrolCancel, buttonCancel);
}

function renderForm() {
    let orderButton = document.getElementById("hiddenDisplay");
    orderButton.onclick = function () {
        showOrderForm();
    };
}

function renderShopping() {
    checkIfEmptyBasket();
    renderBasketItems();
    renderPrice();
    renderForm();
}