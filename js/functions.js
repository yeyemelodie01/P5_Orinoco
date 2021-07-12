export function createDomElement(elementDetail) { // utilisation de l'export avec la fonction nommée createDomElement et son parametre elementDetail
    let element = document.createElement(elementDetail.tagName); // creation de la variable element qui permet de créer dans le DOM un élément html
    if (elementDetail.classList !== undefined && elementDetail.classList.length > 0) { //on utilise la condition if Si elementDetail.classList est strictement différent de indéfinie et que elementDetail.classList.length est plus grand que zero
        for (let i = 0; i < elementDetail.classList.length; i++) { // utilisation de la boucle for avec entre parenthèse l'initialisation de l'itérateur i qui a pour valeur 0 , ensuite la terminaison i plus petit que elementDetail.classList.length (longueur du tableau ou collection) pour finir on incrémente i++ qui rajoute 1 a la valeur de i a chaque boucle
            addClassToElement(element, elementDetail.classList[i]); // instruction a utiliser dans la boucle. ajoute a element la class contenue dans elementDetail.classList[i]
        }
    }

    if (elementDetail.id !== undefined) { // condition if. si element Detail.id est strictement  différent de indéfinie*/
        element.id = elementDetail.id; // création de l'attribut id pour element avec la valeur contenu dans  elementDetail.id
    }

    if (elementDetail.src !== undefined) { // si elementDetail.src est strictement différent de indéfinie
        element.src = elementDetail.src; // création de l'attibut src pour element avec la valeur contenue dans elementDetail.src
    }

    if (elementDetail.href !== undefined) { // si elementDetail.href est strictement différent de indéfinie
        element.href = elementDetail.href; // création de l'attibut href pour element avec la valeur contenue dans elementDetail.href
    }

    if (elementDetail.text !== undefined) { // si elementDetail.text est strictement différent de indéfinie
        element.text = elementDetail.text; // création de l'attibut text pour element avec la valeur contenue dans elementDetail.text
    }

    if (elementDetail.innerHTML !== undefined) { // si elementDetail.innerHTML est strictement différent de indéfinie
        element.innerHTML = elementDetail.innerHTML; // création de l'attibut innerHTML pour element avec la valeur contenue dans elementDetail.innerHTML
    }

    if (elementDetail.onclick !== undefined) { // si elementDetail.onclick est strictement différent de indéfinie
        element.onclick = elementDetail.onclick; // création de l'attibut onclick pour element avec la valeur contenue dans elementDetail.onclick
    }

    if (elementDetail.textNode !== undefined) { // si elementDetail.textNode est strictement différent de indéfinie
        appendElementTo(element, null, elementDetail.textNode) // element est parent de la valeur contenue dans elementDetail.textNode
    }

    if (elementDetail.parentId !== undefined) { // si elementdetail.parentid est strictement différent de indéfinie
        appendElementTo(document.getElementById(elementDetail.parentId), element); // on récupère la valeur de l'id contenue dans elementDetail.parentId qui sera parent de element
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
