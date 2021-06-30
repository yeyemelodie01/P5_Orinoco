import {createDomElement, appendElementTo, addClassToElement, formatPrice, removeClassToElement} from './functions.js';

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
            parentId: 'basket',
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
                classList: ['divSize'],
            });
            appendElementTo(divContent, divSize);

            let pProduct = createDomElement({
                tagName: 'p',
                id: 'productName',
                classList: ['has-text-weight-bold', 'is-size-3', 'mb-4'],
                textNode: basketData[i].name,
            });
            appendElementTo(divSize, pProduct);

            let divWidth = createDomElement({
                tagName: 'div',
                classList: ['is-flex', 'is-justify-content-space-between', 'divWidth'],
            });
            appendElementTo(divSize, divWidth);

            let pColor = createDomElement({
                tagName: 'p',
                classList: ['mb-2', 'is-justify-content-space-between'],
                textNode: "Couleur : " + basketData[i].detail,
            });
            appendElementTo(divWidth, pColor);

            let pQuantity = createDomElement({
                tagName: 'p',
                id: 'quantity',
                classList: ['mb-2'],
                textNode: "Quantité : " + basketData[i].quantity,
            });
            appendElementTo(divWidth, pQuantity);

            let divFlexJustify = createDomElement({
                tagName: 'div',
                classList: ['is-flex', 'is-justify-content-space-between', 'section-panier_marginbottom'],
            });
            appendElementTo(divSize, divFlexJustify);

            let divDeleteIcon = createDomElement({
                tagName: 'div',
                classList: ['is-flex', 'is-align-items-center'],
            });
            appendElementTo(divFlexJustify, divDeleteIcon);

            let deleteIcon = createDomElement({
                tagName: 'i',
                classList: ['fas', 'fa-trash-alt', 'mr-3'],
            });
            appendElementTo(divDeleteIcon, deleteIcon);

            let pSize = createDomElement({
                tagName: 'p',
                classList: ['is-size-5'],
                textNode: "Supprimer",
            });
            appendElementTo(divDeleteIcon, pSize);

            let pPrice = createDomElement({
                tagName: 'p',
                classList: ['has-text-primary', 'has-text-weight-semibold', 'div_panier-price'],
                textNode: formatPrice(totalPrice/100),
            });

            appendElementTo(divFlexJustify, pPrice);
            appendElementTo(basket, divContent);
            let submitProduct = {
                'id': document.querySelector('#productName').value,
                'quantité': document.querySelector('#quantity').value,

            }
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
        id: 'totalPrice',
        textNode: formatPrice((totalPrice + deliveryPrice)/100),
    });

    appendElementTo(document.getElementById("totalTVA"), totalPriceWithDelivery);
    console.log(formatPrice((totalPrice + deliveryPrice)/100));
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

    let controlDiv = createDomElement({
        tagName: 'div',
        classList: ['control'],
    });
    appendElementTo(div, controlDiv);

    let elementInput = createDomElement({
        tagName: 'input',
        classList: ['input'],
        id: input.name,
        placeholder: (input.placeholder !== undefined) ? input.placeholder : input.label,
        type: 'text',
    });
    appendElementTo(controlDiv, elementInput);
}

function showOrderForm() {
    let sectionContent = document.getElementById('divContent');
    let hidden = createDomElement({
        id: 'hiddenContent',
        tagName: 'div',
        classList: ['content-hidden', 'is-flex', 'is-justify-content-center'],
    });
    appendElementTo(sectionContent, hidden);

    let hiddenDiv = createDomElement({
        tagName: 'div',
        classList: ['content-hidden_width'],
    });
    appendElementTo(hidden, hiddenDiv);

    let addressTitle = createDomElement({
        tagName: 'h2',
        classList: ['title', 'is-2', 'is-flex', 'is-justify-content-flex-start'],
        textNode: 'Mon adresse',
    });
    appendElementTo(hiddenDiv, addressTitle);

    let form = createDomElement({
        tagName: 'form',
    });
    appendElementTo(hiddenDiv, form);

    let radioDiv = createDomElement({
        tagName: 'div',
        classList: ['control', 'mb-5', 'is-flex'],
    });
    appendElementTo(form, radioDiv);

    let radios = ['Mme', 'Mlle', 'Mr'];
    for (let i = 0; i < radios.length; i++) {
        let radioFlex = createDomElement({
            tagName: 'div',
            classList: ['is-flex'],
        });
        appendElementTo(radioDiv,radioFlex);

        let radioLabel = createDomElement({
            tagName: 'label',
            classList: ['radio'],
            textNode: radios[i],
        });
        appendElementTo(radioFlex, radioLabel);

        let radioInput = createDomElement({
            tagName: 'input',
            classList: ['radio', 'radio-flex'],
            id: 'radioInput',
            name: 'radioInput',
            value: radios[i],
            type: 'radio',
            textNode: radios[i],
        });
        appendElementTo(radioFlex, radioInput);
    }

    createFormInput(form, {name: 'lastName', label: 'Nom'});
    createFormInput(form, {name: 'firstName', label: 'Prénom'});
    createFormInput(form, {name: 'phoneNumber', label: 'Numéro de téléphone'});
    createFormInput(form, {name: 'email', label: 'Email', placeholder: 'hello@outlook.com'});
    createFormInput(form, {name: 'address', label: 'Adresse (numéros et rue)', placeholder: 'Adresse'});
    createFormInput(form, {name: 'additionalAddress', label: 'Complément d\'adresse (facultatif)', placeholder: 'Complement d\'adresse'});
    
    let townFlex = createDomElement({
        tagName: 'div',
        classList: ['is-flex'],
    });
    appendElementTo(form, townFlex);

    let postcodeDiv = createDomElement({
        tagName: 'div',
        classList: ['field', 'mb-5', 'mr-6'],
    });
    appendElementTo(townFlex, postcodeDiv);

    let postcodeLabel = createDomElement({
        tagName: 'label',
        classList: ['label'],
        for: 'postcode',
        textNode: 'Code Postal',
    });
    appendElementTo(postcodeDiv, postcodeLabel);

    let postcodeControl = createDomElement({
        tagName: 'div',
        classList: ['control'],
    });
    appendElementTo(postcodeDiv, postcodeControl);

    let postcodeInput = createDomElement({
        tagName: 'input',
        classList: ['input'],
        id: 'postCode',
        type: 'text',
        placeholder: 'Code Postal',
    });
    appendElementTo(postcodeControl, postcodeInput);

    let townDiv = createDomElement({
        tagName: 'div',
        classList: ['field', 'mb-5'],
    });
    appendElementTo(townFlex, townDiv);

    let townLabel = createDomElement({
        tagName: 'label',
        classList: ['label'],
        for: 'ville',
        textNode: 'Ville',
    });
    appendElementTo(townDiv, townLabel);

    let townControl = createDomElement({
        tagName: 'div',
        classList: ['control'],
    });
    appendElementTo(townDiv, townControl);

    let townInput = createDomElement({
        tagName: 'input',
        classList: ['input'],
        id: 'ville',
        type: 'text',
        placeholder: 'Ville',
    });
    appendElementTo(townControl, townInput);

    let checkboxDiv = createDomElement({
        tagName: 'div',
        classList: ['field', 'mb-4'],
    });
    appendElementTo(form, checkboxDiv);

    let checkboxControl = createDomElement({
        tagName: 'div',
        classList: ['control', 'is-flex'],
    });
    appendElementTo(checkboxDiv, checkboxControl);

    let checkboxLabel = createDomElement({
        tagName: 'label',
        classList: ['checkbox'],
        textNode: 'J\'accepte les termes et conditions',
    });
    appendElementTo(checkboxControl, checkboxLabel);

    let checkboxInput = createDomElement({
        tagName: 'input',
        classList: ['checkboxInput'],
        type: 'checkbox',
    });
    appendElementTo(checkboxControl, checkboxInput);

    let buttonDiv = createDomElement({
        tagName: 'div',
        classList: ['field', 'is-grouped'],
    });
    appendElementTo(form, buttonDiv);

    let submitControl = createDomElement({
        tagName: 'div',
        classList: ['control'],
    });
    appendElementTo(buttonDiv, submitControl);

    let submitButton = createDomElement({
        tagName: 'button',
        id:'submitButton',
        classList: ['button', 'is-primary', 'submitButton'],
        textNode: 'Envoyer',
    });
    appendElementTo(submitControl, submitButton);

    let cancelControl = createDomElement({
        tagName: 'div',
        classList: ['control'],
    });
    appendElementTo(buttonDiv, cancelControl);

    let cancelButton = createDomElement({
        tagName: 'button',
        classList: ['button', 'is-link', 'is-light'],
        textNode: 'Annuler',
    });
    appendElementTo(cancelControl, cancelButton);

    let btnSubmit = document.getElementById("submitButton");
    btnSubmit.addEventListener('click', (e)=>{
        let element = document.getElementsByName('radioInput');
        let civility = '';
        for(let i = 0; i < element.length; i++) {
            if(element[i].checked) {
                civility = element[i].value;
            }
        }
        let formData = {
            'civilite': civility,
            'firstName': document.querySelector("#lastName").value,
            'lastName': document.querySelector("#firstName").value,
            'telephone': document.querySelector("#phoneNumber").value,
            'email': document.querySelector("#email").value,
            'adress': document.querySelector("#address").value,
            'codepostal': document.querySelector("#postCode").value,
            'city': document.querySelector("#ville").value
        };

        localStorage.setItem("form", JSON.stringify(formData))
    })
    checkFormFields(form);
}

function renderForm() {
    let orderButton = document.getElementById("hiddenDisplay");
    orderButton.onclick = function () {
        showOrderForm();
    };
}

function checkFormFields(form) {
    let textInputs = form.querySelectorAll("input[type='text']");
    for (let i = 0; i < textInputs.length; i++) {
        if (textInputs[i].value.trim() === '') {
            addClassToElement(textInputs[i], 'is-danger');
        }

        textInputs[i].onkeyup = function() {
            checkFieldValue(this);
        }
    }
}

function checkFieldValue(field) {
    console.log(field.getAttribute('id'))
    if (field.getAttribute('id') === 'email') {
        let emailRegex = /\S+@\S+\.\S+/;
        if (emailRegex.test(field.value) === false) {
            removeClassToElement(field, 'is-success');
            addClassToElement(field, 'is-danger');
        } else {
            removeClassToElement(field, 'is-danger');
            addClassToElement(field, 'is-success');
        }
    }
}



function renderShopping() {
    checkIfEmptyBasket();
    renderBasketItems();
    renderPrice();
    renderForm();
}
