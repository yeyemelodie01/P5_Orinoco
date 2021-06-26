export function createDomElement(elementDetail)
{
    let element = document.createElement(elementDetail.tagName);
    if (elementDetail.classList !== undefined && elementDetail.classList.length > 0) {
        for (let i = 0; i < elementDetail.classList.length; i++) {
            addClassToElement(element, elementDetail.classList[i]);
        }
    }

    if (elementDetail.src !== undefined) {
        element.src = elementDetail.src;
    }

    if (elementDetail.textNode !== undefined) {
        appendElementTo(element, null, elementDetail.textNode)
    }

    if (elementDetail.parentId !== undefined) {
        appendElementTo(document.getElementById(elementDetail.parentId), element);
    }

    return element;
}

export function addClassToElement(element, className)
{
    element.classList.add(className);
}

export function appendElementTo(parent, child = null, textNode = '')
{
    if (textNode !== '' && child === null) {
        parent.appendChild(document.createTextNode(textNode))
    }

    if (child !== null) {
        parent.appendChild(child);
    }
}
