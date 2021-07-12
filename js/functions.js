export function createDomElement(elementDetail) { /* utilisation de l'export avec la fonction nommée createDomElement et son parametre elementDetail*/
    let element = document.createElement(elementDetail.tagName); /* creation de la variable element qui permet de créer dans le DOM un élément html*/
    if (elementDetail.classList !== undefined && elementDetail.classList.length > 0) { /* on utilise la condition if Si elementDetail.classList est strictement différent de indéfinie et que elementDetail.classList.length est plus grand que zero*/
        for (let i = 0; i < elementDetail.classList.length; i++) { /* utilisation de la boucle for avec trois expression */
            addClassToElement(element, elementDetail.classList[i]); /* instruction a utiliser dans la boucle*/
        }
    }

    if (elementDetail.id !== undefined) { /* condition if. si element Detail.id est strictement  différent de indéfinie*/
        element.id = elementDetail.id; // création de la variable element.id qui affichera elementDetail.id
    }

    if (elementDetail.src !== undefined) {
        element.src = elementDetail.src;
    }

    if (elementDetail.href !== undefined) {
        element.href = elementDetail.href;
    }

    if (elementDetail.text !== undefined) {
        element.text = elementDetail.text;
    }

    if (elementDetail.innerHTML !== undefined) {
        element.innerHTML = elementDetail.innerHTML;
    }

    if (elementDetail.onclick !== undefined) {
        element.onclick = elementDetail.onclick;
    }

    if (elementDetail.textNode !== undefined) {
        appendElementTo(element, null, elementDetail.textNode)
    }

    if (elementDetail.parentId !== undefined) {
        appendElementTo(document.getElementById(elementDetail.parentId), element);
    }

    if (elementDetail.type !== undefined) {
        element.setAttribute('type', elementDetail.type);
    }

    if (elementDetail.value !== undefined) {
        element.setAttribute('value', elementDetail.value);
    }

    if (elementDetail.name !== undefined) {
        element.setAttribute('name', elementDetail.name);
    }

    if (elementDetail.for !== undefined) {
        element.setAttribute('for', elementDetail.for);
    }

    if (elementDetail.placeholder !== undefined) {
        element.setAttribute('placeholder', elementDetail.placeholder);
    }

    return element;
}

export function addClassToElement(element, className) {
    element.classList.add(className);
}

export function removeClassToElement(element, className) {
    element.classList.remove(className);
}

export function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR', {style: 'currency',currency: 'EUR', minimumFractionDigits: 2}).format(price);
}

export function appendElementTo(parent, child = null, textNode = '') {
    if (textNode !== '' && child === null) {
        parent.appendChild(document.createTextNode(textNode))
    }

    if (child !== null) {
        parent.appendChild(child);
    }
}
