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
                let divfigure = document.createElement("div");
                divfigure.classList.add("divfigure");

                let figureimg = document.createElement("figure");
                figureimg.classList.add("figure_img");
                divfigure.appendChild(figureimg);

                let imgpro = document.createElement("img");
                imgpro.src = product.imageUrl;
                figureimg.appendChild(imgpro);

                let divtext = document.createElement("div");
                divtext.classList.add("section-text");
                divtext.classList.add("pl-6");
                divtext.classList.add("pr-6");

                let title = document.createElement("h1");
                title.classList.add("title");
                title.classList.add("is-1");
                title.classList.add("mb-5");
                title.appendChild(document.createTextNode(product.name));
                divtext.appendChild(title);

                let subtitle = document.createElement("h2");
                subtitle.classList.add("section_text-h2");
                subtitle.classList.add("title");
                subtitle.classList.add("is-2");
                subtitle.classList.add("is-flex");
                subtitle.classList.add("is-justify-content-flex-start");
                subtitle.classList.add("mb-5");

                let formattedPrice = new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 2 }).format(product.price/100);
                subtitle.appendChild(document.createTextNode(formattedPrice+' €'));
                divtext.appendChild(subtitle);

                let starIcon = document.createElement("div");
                starIcon.classList.add("icon-star");
                starIcon.classList.add("icon-star-product");
                starIcon.classList.add("mb-5");
                divtext.appendChild(starIcon);

                for (let i = 0; i < 5; i++) {
                    let star = document.createElement("i");
                    star.classList.add("fas");
                    star.classList.add("fa-star");
                    starIcon.appendChild(star);
                }

                let colors = product.colors;
                if (typeof colors != 'undefined'){
                    createDetailByType(colors, divtext, 'Couleurs', 'colors');
                }

                let varnish = product.varnish;
                if (typeof varnish != 'undefined'){
                    createDetailByType(varnish, divtext, 'Vernis', 'varnish');
                }

                let lenses = product.lenses;
                if (typeof lenses != 'undefined'){
                    createDetailByType(lenses, divtext, 'Lentilles', 'lenses');
                }

                let quantityTitle = document.createElement("h3");
                quantityTitle.classList.add("title");
                quantityTitle.classList.add("is-3");
                quantityTitle.classList.add("mb-3");
                quantityTitle.appendChild(document.createTextNode("Quantité"));
                divtext.appendChild(quantityTitle);

                let quantityDiv = document.createElement("div");
                quantityDiv.classList.add("select");
                quantityDiv.classList.add("is-primary");
                quantityDiv.classList.add("mb-6");
                divtext.appendChild(quantityDiv);

                let quantitySelect = document.createElement("select");
                quantitySelect.id = 'quantity';
                quantityDiv.appendChild(quantitySelect);

                let quantities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
                for (let i = 0; i < quantities.length; ++i) {
                    let quantityOption = document.createElement("option");
                    quantityOption.text = String(quantities[i]);
                    quantityOption.value = String(quantities[i]);
                    quantitySelect.add(quantityOption);
                }

                let addToCartButton = document.createElement("button");
                addToCartButton.id = 'button';
                addToCartButton.classList.add("button");
                addToCartButton.classList.add("is-primary");
                addToCartButton.classList.add("ml-5");
                addToCartButton.appendChild(document.createTextNode("Ajouter au panier"));
                divtext.appendChild(addToCartButton);


                addToCartButton.addEventListener('click', (event) =>{
                    event.preventDefault();

                    let itemQuantity = parseInt(document.getElementById('quantity').value);
                    let id = '';
                    if (product.colors) {
                        id = 'color';
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
                            'detail': detail,
                            'quantity': itemQuantity,
                            'price':  parseInt(product.price),
                            'totalPrice': parseInt(product.price * itemQuantity)
                        };
                        addToBasket(itemToAddInBasket)
                    } else if (itemQuantity === 0 ) {
                        let itemToRemove = {
                            'id': product._id,
                            'type': type,
                            'detail': detail,
                        }
                        removeInBasket(itemToRemove)
                    }
                });

                let description = document.createElement("h3");
                description.classList.add("title");
                description.classList.add("is-3");
                description.classList.add("mb-3");
                description.appendChild(document.createTextNode("Description :"));
                divtext.appendChild(description);

                let text = document.createElement("p");
                text.classList.add("subtitle");
                text.classList.add("is-5");
                text.classList.add("mt-2");
                text.appendChild(document.createTextNode(product.description));
                divtext.appendChild(text);

                let sectionpro = document.getElementById("products");
                sectionpro.appendChild(divfigure);
                sectionpro.appendChild(divtext);
            })
    }
}

function createDetailByType(item, parentDiv, title, id)
{
    let itemTitle = document.createElement("h3");
    itemTitle.classList.add("title");
    itemTitle.classList.add("is-3");
    itemTitle.classList.add("mb-3");
    itemTitle.appendChild(document.createTextNode(title));
    parentDiv.appendChild(itemTitle);

    let itemDiv = document.createElement("div");
    itemDiv.classList.add("select");
    itemDiv.classList.add("is-primary");
    itemDiv.classList.add("mb-6");
    parentDiv.appendChild(itemDiv);

    let itemSelect = document.createElement("select");
    itemSelect.id = id;
    itemDiv.appendChild(itemSelect);
    for (let i = 0; i < item.length; ++i) {
        let itemOption = document.createElement("option");
        itemOption.text = item[i];
        itemOption.value = item[i];
        itemSelect.add(itemOption);
    }
}

function addToBasket(itemToAdd)
{
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

function removeInBasket(itemToRemove){
    let remove = JSON.parse(localStorage.getItem("basket"))
        for(let i = 0; i < remove.length; i++){
            if(localStorage.getItem('basket') != null){
                localStorage.removeItem('basket');
            }
        }
        itemToRemove = JSON.stringify(remove);
    localStorage.setItem("newBasket", itemToRemove);
    console.log();


        /*localStorage.removeItem("basket", remove.id);*/

    }