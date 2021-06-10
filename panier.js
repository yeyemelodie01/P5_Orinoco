window.onload = function() {
    renderShopping();
};

function renderShopping() {
    let data = JSON.parse(localStorage.getItem("basket"));
    console.log(data);


    if(data === null){
        alert("le panier est vide");
    } else {
        //let displayBasket = [];
        for (let i = 0; i < data.length; i++) {
            let type = data[i].type;
            let id = data[i].id;
            let name = data[i].name;
            let image = data[i].image;
            let detail = data[i].detail;
            let quantity = data[i].quantity;
            let price = data[i].price;
            let totalPrice = data[i].totalPrice;

            console.log(type, id, name, image, detail, quantity, price, totalPrice);

            let divContent = document.createElement("div");
            divContent.classList.add("div_product");
            divContent.classList.add("mb-5");

            let imgBasket = document.createElement("img");
            imgBasket.classList.add("pr-5");
            imgBasket.src = image;
            divContent.appendChild(imgBasket);

            let divSize = document.createElement("div");
            divSize.classList.add("is-size-4");
            divContent.appendChild(divSize);

            let pProduct = document.createElement("p");
            pProduct.classList.add("has-text-weight-bold");
            pProduct.classList.add("is-size-3");
            pProduct.classList.add("mb-4");
            pProduct.appendChild(document.createTextNode(name));
            divSize.appendChild(pProduct);

            let divWitdth = document.createElement("div");
            divWitdth.classList.add("is-flex");
            divWitdth.classList.add("is-justify-content-space-between");
            divWitdth.classList.add("div_panier-width");
            divContent.appendChild(divWitdth);

            let pColor = document.createElement("p");
            pColor.classList.add("mb-2");
            pColor.appendChild(document.createTextNode("Couleur : " + detail));
            divWitdth.appendChild(pColor);

            let pQuantite = document.createElement("p");
            pQuantite.classList.add("mb-2");
            pQuantite.appendChild(document.createTextNode("Quantité : " + quantity));
            divWitdth.appendChild(pQuantite);

            let divflexJustify = document.createElement("div");
            divflexJustify.classList.add("is-flex");
            divflexJustify.classList.add("is-justify-content-space-between");
            divflexJustify.classList.add("section-panier_marginbottom");
            divSize.appendChild(divflexJustify);

            let pSize = document.createElement("p");
            pSize.classList.add("is-size-5");
            pSize.appendChild(document.createTextNode("Supprimer"));
            divflexJustify.appendChild(pSize);

            let icon = document.createElement("i");
            icon.classList.add("fas");
            icon.classList.add("fa-trash-alt");
            icon.classList.add("mr-3");
            pSize.appendChild(icon);

            let productbasket = document.getElementById("basket");
            productbasket.appendChild(divContent);



                /*
                    <div>
                        <img class="pr-5" src="images/teddy_1.jpg" alt="Robert">
                            <div  class="is-size-4">
                                <p class="has-text-weight-bold is-size-3 mb-4">Robert</p>
                                <div class="is-flex is-justify-content-space-between div_panier-width">
                                    <p class="mb-2">Couleur: ${detail}</p>
                                    <label for="quantite"></label>
                                    <select id="quantite">
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </div>
                                <div class="is-flex is-justify-content-space-between section-panier_marginbottom">
                                    <p class="is-size-5"><i class="fas fa-trash-alt mr-3"></i>Supprimer</p>
                                    <p class="has-text-primary has-text-weight-semibold div_panier-price">${price}</p>
                                </div>
                            </div>
                    </div>
                    <div class="is-flex is-flex-align-items-center has-text-primary">
                        <i class="fas fa-info info-circle"></i>
                        <p>Les articles dans le panier ne sont pas réservés.</p>
                    </div>
                </div> `;*/
        }

    }





        /*let productUrl = "";
        let authorizedType = [
            'teddies',
            'furniture',
            'cameras',
        ];

        let baseUrl = "https://ab-p5-api.herokuapp.com/api/";
        if (true === authorizedType.includes(type)) {
            productUrl = baseUrl + type + '/' + id + '/' + quantity + '/' + price + '/' + totalPrice;
        }
        console.log(productUrl);
        if (productUrl !== '') {
            fetch(productUrl)
                .then(function (resp) {
                    return resp.json();
                })
                .then(function (article) {
                    console.log(article);

                    let div = document.createElement('div');
                    div.classList.add("is-flex");
                    div.classList.add("is-justify-content-space-between");

                    let sectionpanier = document.getElementById("panier");
                    sectionpanier.appendChild(div);

                })
        }*/
    }