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
                classList: ['mb-2', 'text_width'],
                textNode: "Quantité : " + basketData[i].quantity,
            });
            appendElementTo(divWidth, pQuantity);

            let divFlexJustify = createDomElement({
                tagName: 'div',
                classList: ['is-flex', 'is-justify-content-space-between', 'section-panier_marginbottom'],
            });
            appendElementTo(divSize, divFlexJustify);

            let diviconText = createDomElement({
                tagName: 'div',
                classList: ['is-flex'],
            });
            appendElementTo(divFlexJustify,diviconText);

            let deleteIcon = createDomElement({
                tagName: 'i',
                classList: ['fas', 'fa-trash-alt', 'mr-3'],
            });
            appendElementTo(diviconText, deleteIcon);

            let pSize = createDomElement({
                tagName: 'p',
                classList: ['is-size-5'],
                textNode: "Supprimer",
            });
            appendElementTo(diviconText, pSize);

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
    for(let i = 0; i < basketData.length; i++){
        totalPrice += basketData[i].totalPrice;
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

function renderForm() {
    let divContent = document.getElementById('divContent');

    let hidden = document.createElement("div");
    hidden.id = 'hiddenContent';
    hidden.classList.add("content-hidden");
    divContent.appendChild(hidden);
    //hidden.classList.add("is-flex");
    //hidden.classList.add("is-flex-direction-column");
    //hidden.classList.add("s-align-items-center");

    let divHidden = document.createElement("div");
    divHidden.classList.add("pl-5");
    divHidden.classList.add("content-hidden_width");
    hidden.appendChild(divHidden);

    let titleAdress = document.createElement("h2");
    titleAdress.classList.add("title");
    titleAdress.classList.add("is-2");
    titleAdress.classList.add("is-flex");
    titleAdress.classList.add("is-justify-content-flex-start");
    titleAdress.appendChild(document.createTextNode("Mon adresse"));
    divHidden.appendChild(titleAdress);

    let form = document.createElement("form");
    divHidden.appendChild(form);

    let divRadio = document.createElement("div");
    divRadio.classList.add("control");
    divRadio.classList.add("mb-5");
    form.appendChild(divRadio);

    let labelMme = document.createElement("label");
    labelMme.classList.add("radio");
    labelMme.appendChild(document.createTextNode("Mme"));
    divRadio.appendChild(labelMme);

    let inputMme = document.createElement("input");
    inputMme.setAttribute('type', 'radio');
    inputMme.setAttribute('name', 'answer');
    inputMme.appendChild(document.createTextNode("Mme"));
    labelMme.appendChild(inputMme);

    let labelMlle = document.createElement("label");
    labelMlle.classList.add("radio");
    divRadio.appendChild(labelMlle);

    let inputMlle = document.createElement("input");
    inputMlle.setAttribute('type', 'radio');
    inputMlle.setAttribute('name', 'answer');
    inputMlle.appendChild(document.createTextNode("Mlle"));
    labelMlle.appendChild(inputMlle);

    let labelMr = document.createElement("label");
    labelMr.classList.add("radio");
    divRadio.appendChild(labelMr);

    let inputMr = document.createElement("input");
    inputMr.setAttribute('type', 'radio');
    inputMr.setAttribute('name', 'answer');
    inputMr.innerHTML = "Mr";
    labelMr.appendChild(inputMr);

    let divName = document.createElement("div");
    divName.classList.add("field");
    divName.classList.add("mb-5");
    form.appendChild(divName);

    let labelName = document.createElement("label");
    labelName.classList.add("label");
    labelName.setAttribute('for', 'name');
    labelName.appendChild(document.createTextNode("Nom*"));
    divName.appendChild(labelName);

    let divControl = document.createElement("div");
    divControl.classList.add("control");
    divName.appendChild(divControl);

    let inputName = document.createElement("input");
    inputName.classList.add("input");
    inputName.id = 'name';
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('placeholder', 'Nom');
    divControl.appendChild(inputName);

    let divUser = document.createElement("div");
    divUser.classList.add("field");
    divUser.classList.add("mb-5");
    form.appendChild(divUser);

    let labelUser = document.createElement("label");
    labelUser.classList.add("label");
    labelUser.setAttribute('for', 'username');
    labelUser.appendChild(document.createTextNode("Prénom*"));
    divUser.appendChild(labelUser);

    let divcontrolIcon = document.createElement("div");
    divcontrolIcon.classList.add("control");
    divcontrolIcon.classList.add("has-icons-right");
    divUser.appendChild(divcontrolIcon);

    let inputUser = document.createElement("input");
    inputUser.classList.add("input");
    inputUser.classList.add("is-success");
    inputUser.id = 'username';
    inputUser.setAttribute('type', 'text');
    inputUser.setAttribute('placeholder', 'Prénom');
    inputUser.setAttribute('value', '');
    divcontrolIcon.appendChild(inputUser);

    let divPhone = document.createElement("div");
    divPhone.classList.add("field");
    divPhone.classList.add("mb-5");
    form.appendChild(divPhone);

    let labelPhone = document.createElement("label");
    labelPhone.classList.add("label");
    labelPhone.setAttribute('for', 'telephone');
    labelPhone.appendChild(document.createTextNode("Téléphone*"));
    divPhone.appendChild(labelPhone);

    let divcontrolPhone = document.createElement("div");
    divcontrolPhone.classList.add("control");
    divPhone.appendChild(divcontrolPhone);

    let inputPhone = document.createElement("input");
    inputPhone.classList.add("input");
    inputPhone.id = 'telephone';
    inputPhone.setAttribute('type', 'text');
    inputPhone.setAttribute('placeholder', 'Numéro de Téléphone');
    divcontrolPhone.appendChild(inputPhone);

    let divEmail = document.createElement("div");
    divEmail.classList.add("field");
    divEmail.classList.add("mb-5");
    form.appendChild(divEmail);

    let labelEmail = document.createElement("label");
    labelEmail.classList.add("label");
    labelEmail.setAttribute('for', 'email');
    labelEmail.appendChild(document.createTextNode("Email"));
    divEmail.appendChild(labelEmail);

    let divcontrolEmail = document.createElement("div");
    divcontrolEmail.classList.add("control");
    divcontrolEmail.classList.add("has-icons-right");
    divEmail.appendChild(divcontrolEmail);

    let inputEmail = document.createElement("input");
    inputEmail.classList.add("input");
    inputEmail.id = 'email';
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('placeholder', 'hello@outlook.com');
    divcontrolEmail.appendChild(inputEmail);

    let divAdress = document.createElement("div");
    divAdress.classList.add("field");
    divAdress.classList.add("mb-5");
    form.appendChild(divAdress);

    let labelAdress = document.createElement("label");
    labelAdress.classList.add("label");
    labelAdress.setAttribute('for', 'adresse');
    labelAdress.appendChild(document.createTextNode("Adresse (numéros et rue)*"));
    divAdress.appendChild(labelAdress);

    let divcontrolAdress = document.createElement("div");
    divcontrolAdress.classList.add("control");
    divcontrolAdress.classList.add("has-icons-right");
    divAdress.appendChild(divcontrolAdress);

    let inputAdress = document.createElement("input");
    inputAdress.classList.add("input");
    inputAdress.classList.add("is-success");
    inputAdress.id = 'adresse';
    inputAdress.setAttribute('type', 'text');
    inputAdress.setAttribute('placeholder', 'Adresse');
    divcontrolAdress.appendChild(inputAdress);

    let divAdditional = document.createElement("div");
    divAdditional.classList.add("field");
    divAdditional.classList.add("mb-5");
    form.appendChild(divAdditional);

    let labelAdditional = document.createElement("label");
    labelAdditional.classList.add("label");
    labelAdditional.setAttribute('for', 'complementadresse');
    labelAdditional.appendChild(document.createTextNode("Complément d'adresse (facultatif)"));
    divAdditional.appendChild(labelAdditional);

    let divcontrolAdditional = document.createElement("div");
    divcontrolAdditional.classList.add("control");
    divAdditional.appendChild(divcontrolAdditional);

    let inputAdditional = document.createElement("input");
    inputAdditional.classList.add("input");
    inputAdditional.id = 'complementadresse';
    inputAdditional.setAttribute('type', 'text');
    inputAdditional.setAttribute('placeholder', 'Complément d adresse');
    divcontrolAdditional.appendChild(inputAdditional);

    let divflexTown = document.createElement("div");
    divflexTown.classList.add("is-flex");
    form.appendChild(divflexTown);

    let divPostcode = document.createElement("div");
    divPostcode.classList.add("field");
    divPostcode.classList.add("mb-5");
    divPostcode.classList.add("mr-6");
    divflexTown.appendChild(divPostcode);

    let labelPostcode = document.createElement("label");
    labelPostcode.classList.add("label");
    labelPostcode.setAttribute('for', 'codepostal');
    labelPostcode.appendChild(document.createTextNode("Code Postal"));
    divPostcode.appendChild(labelPostcode);

    let divcontrolPostcode = document.createElement("div");
    divcontrolPostcode.classList.add("control");
    divPostcode.appendChild(divcontrolPostcode);

    let inputPostcode = document.createElement("input");
    inputPostcode.classList.add("input");
    inputPostcode.setAttribute('type', 'text');
    inputPostcode.setAttribute('placeholder', 'Code Postal');
    divcontrolPostcode.appendChild(inputPostcode);

    let divTown = document.createElement("div");
    divTown.classList.add("field");
    divTown.classList.add("mb-5");
    divflexTown.appendChild(divTown);

    let labelTown = document.createElement("label");
    labelTown.classList.add("label");
    labelTown.setAttribute('for', 'ville');
    labelTown.appendChild(document.createTextNode("Ville"));
    divTown.appendChild(labelTown);

    let divcontrolTown = document.createElement("div");
    divcontrolTown.classList.add("control");
    divTown.appendChild(divcontrolTown);

    let inputTown = document.createElement("input");
    inputTown.classList.add("input");
    inputTown.id = 'ville';
    inputTown.setAttribute('type', 'text');
    inputTown.setAttribute('placeholder', 'Ville');
    divcontrolTown.appendChild(inputTown);

    let divCheckbox = document.createElement("div");
    divCheckbox.classList.add("field");
    divCheckbox.classList.add("mb-4");
    form.appendChild(divCheckbox);

    let divcontrolCheckbox = document.createElement("div");
    divcontrolCheckbox.classList.add("control");
    divCheckbox.appendChild(divcontrolCheckbox);

    let labelCheckbox = document.createElement("label");
    labelCheckbox.classList.add("checkbox");
    labelCheckbox.appendChild(document.createTextNode("J'accepte les termes et conditions"));
    divcontrolCheckbox.appendChild(labelCheckbox);

    let inputCheckbox = document.createElement("input");
    inputCheckbox.setAttribute('type', 'checkbox');
    labelCheckbox.appendChild(inputCheckbox);

    let divButton = document.createElement("div");
    divButton.classList.add("field");
    divButton.classList.add("is-grouped");
    form.appendChild(divButton);

    let divcontrolSubmit = document.createElement("div");
    divcontrolSubmit.classList.add("control");
    divButton.appendChild(divcontrolSubmit);

    let buttonSubmit = document.createElement("button");
    buttonSubmit.classList.add("button");
    buttonSubmit.classList.add("is-primary");
    buttonSubmit.appendChild(document.createTextNode("Envoyer"));
    divcontrolSubmit.appendChild(buttonSubmit);

    let divcontrolCancel = document.createElement("div");
    divcontrolCancel.classList.add("control");
    divButton.appendChild(divcontrolCancel);

    let buttonCancel = document.createElement("button");
    buttonCancel.classList.add("button");
    buttonCancel.classList.add("is-link");
    buttonCancel.classList.add("is-light");
    buttonCancel.appendChild(document.createTextNode("Annuler"));
    divcontrolCancel.appendChild(buttonCancel);
}

function renderShopping() {
    checkIfEmptyBasket();
    renderBasketItems();
    renderPrice();
    renderForm();
}
