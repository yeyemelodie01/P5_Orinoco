export function createDomElement(elementDetail)
{
    let element = document.createElement(elementDetail.tagName);
    for (let className in elementDetail.classList) {
        addClassToElement(element, className);
    }
    appendElementTo(document.getElementById(elementDetail.parentId), element);
}

export function addClassToElement(element, className)
{
    element.classList.add(className);
}

export function appendElementTo(parent, child)
{
    parent.appendChild(child);
}
