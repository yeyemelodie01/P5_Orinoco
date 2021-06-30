import {createDomElement, appendElementTo, formatPrice} from './functions.js';

window.onload = function() {
    renderProduct();
};

function renderProduct()
{
    let id = localStorage.getItem('id');
    let type = localStorage.getItem('type');
    let apiUrl = "";
    let authorizedType = [
        'teddies',
        'furniture',
        'cameras',
    ];
    let baseUrl = "https://ab-p5-api.herokuapp.com/api/";
    if (true === authorizedType.includes(type)) {
        apiUrl = baseUrl+type+'/'+id;
    }

    if (apiUrl !== '') {
        fetch(apiUrl)
            .then(function (resp) {
                return resp.json();
            })
            .then(function (product) {

                let figureDiv = createDomElement({
                    tagName: 'div',
                    classList: ['figureDiv'],
                });
                appendElementTo(document.getElementById("products"), figureDiv);

                let figureImg = createDomElement({
                    tagName: 'figure',
                    classList: ['figure_img'],
                });
                appendElementTo(figureDiv, figureImg);

                let productImg = createDomElement({
                    tagName: 'img',
                    src: product.imageUrl,
                });
                appendElementTo(figureImg, productImg);

                let textDiv = createDomElement({
                    tagName: 'div',
                    classList: ['section-text', 'pl-6', 'pr-6'],
                });
                appendElementTo(document.getElementById("products"), textDiv);

                let title = createDomElement({
                    tagName: 'h1',
                    classList: ['mb-5'],
                    textNode: product.name,
                });
                appendElementTo(textDiv, title);

                let subtitle = createDomElement({
                    tagName: 'h2',
                    classList: ['section_text-h2','is-flex', 'is-justify-content-flex-start', 'mb-5'],
                    textNode: formatPrice(product.price/100),
                });
                appendElementTo(textDiv, subtitle);


                let starIcon = createDomElement({
                    tagName: 'div',
                    classList: ['icon-star', 'icon-star-product', 'mb-5'],
                });
                appendElementTo(textDiv, starIcon);

                for (let i = 0; i < 5; i++) {
                    let star = createDomElement({
                        tagName: 'i',
                        classList: ['fas', 'fa-star'],
                    });
                    appendElementTo(starIcon, star);
                }

                let colors = product.colors;
                if (typeof colors != 'undefined'){
                    createDetailByType(colors, textDiv, 'Couleurs', 'colors');
                }

                let varnish = product.varnish;
                if (typeof varnish != 'undefined'){
                    createDetailByType(varnish, textDiv, 'Vernis', 'varnish');
                }

                let lenses = product.lenses;
                if (typeof lenses != 'undefined'){
                    createDetailByType(lenses, textDiv, 'Lentilles', 'lenses');
                }

                let quantityTitle = createDomElement({
                    tagName: 'h3',
                    classList: ['mb-3'],
                    textNode: 'Quantité',
                });
                appendElementTo(textDiv, quantityTitle);

                let quantityDiv = createDomElement({
                    tagName: 'div',
                    classList: ['select', 'is-primary', 'mb-6'],
                });
                appendElementTo(textDiv, quantityDiv);

                let quantitySelect = createDomElement({
                    tagName: 'select',
                    id: 'quantity',
                });
                appendElementTo(quantityDiv, quantitySelect);

                let quantities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
                for (let i = 0; i < quantities.length; ++i) {
                    let quantityOption = createDomElement({
                        tagName: 'option',
                        text: quantities[i],
                        value: quantities[i],
                    });
                    quantitySelect.add(quantityOption);
                }

                let addToCartButton = createDomElement({
                    tagName: 'button',
                    id: 'button',
                    classList:['button', 'is-primary', 'ml-5'],
                    textNode: 'Ajouter au panier',
                });
                appendElementTo(textDiv, addToCartButton);

                addToCartButton.addEventListener('click', (event) =>{
                    event.preventDefault();

                    let itemQuantity = parseInt(document.getElementById('quantity').value);
                    let id = '';
                    if (product.colors) {
                        id = 'colors';
                    }else if(product.varnish) {
                        id = 'varnish';
                    } else if(product.lenses) {
                        id = 'lenses';
                    }

                    let detail = document.getElementById(id).value;
                    if (itemQuantity > 0) {
                        let itemToAddInBasket = {
                            'id': product._id,
                            'type': type,
                            'name': product.name,
                            'image': product.imageUrl,
                            'detail': detail,
                            'quantity': itemQuantity,
                            'price':  parseInt(product.price),
                            'totalPrice': parseInt(product.price * itemQuantity)
                        };
                        alert("produit ajouté au panier");
                        addToBasket(itemToAddInBasket)
                    } else if (itemQuantity === 0 ) {
                        let itemToRemove = {
                            'id': product._id,
                            'type': type,
                            'detail': detail,
                        }
                        removeInBasket(itemToRemove)
                        alert("produit retiré du panier");
                    }

                });

                let description = createDomElement({
                    tagName: 'h3',
                    classList: ['title', 'is-3', 'mb-3'],
                    textNode: 'Description :',
                });
                appendElementTo(textDiv, description);

                let text = createDomElement({
                    tagName: 'p',
                    classList: ['subtitle', 'is-5', 'mt-2'],
                    textNode: product.description,
                });
                appendElementTo(textDiv, text);
            })
    }
}

function createDetailByType(item, parentDiv, title, id)
{
    let itemTitle = createDomElement({
       tagName: 'h3',
       classList: ['mb-3'],
        textNode: title,
    });
    appendElementTo(parentDiv, itemTitle);

    let itemDiv = createDomElement({
        tagName: 'div',
        classList: ['select', 'is-primary', 'mb-6']
    });
    appendElementTo(parentDiv, itemDiv);

    let itemSelect = createDomElement({
        tagName: 'select',
        id: id,
    });
    appendElementTo(itemDiv, itemSelect);

    for (let i = 0; i < item.length; ++i) {
        let itemOption = createDomElement({
            tagName: 'option',
            text: item[i],
            value: item[i],
        });
        appendElementTo(itemSelect, itemOption);
    }
}

function addToBasket(itemToAdd) {
    let data = JSON.parse(localStorage.getItem("basket"))
    if(!data) {
        data = [];
    }
    let allReadyInBasket = false;
    if (data !== []) {
        for (let i = 0; i < data.length; ++i) {
            if (data[i].id === itemToAdd.id) {
                if (data[i].detail !== itemToAdd.detail) {
                    break;
                }

                allReadyInBasket = true;
                if (data[i].quantity !== itemToAdd.quantity) {
                    data[i].quantity += itemToAdd.quantity
                }
            }
        }
    }

    if (allReadyInBasket === false) {
        data.push(itemToAdd)
    }

    localStorage.setItem("basket", JSON.stringify(data));

}

function removeInBasket(itemToRemove) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    for (let i = 0; i < basket.length; i++) {
        let currentItem = basket[i];
        if (currentItem.id === itemToRemove.id && currentItem.type === itemToRemove.type && currentItem.detail === itemToRemove.detail) {
            basket.splice(i, 1);
            break;
        }
    }

    localStorage.setItem("basket", JSON.stringify(basket));
}
