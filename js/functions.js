export function createDomElement(elementDetail) {
    let element = document.createElement(elementDetail.tagName);
    if (elementDetail.classList !== undefined && elementDetail.classList.length > 0) {
        for (let i = 0; i < elementDetail.classList.length; i++) {
            addClassToElement(element, elementDetail.classList[i]);
        }
    }

    if (elementDetail.id !== undefined) {
        element.id = elementDetail.id;
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
