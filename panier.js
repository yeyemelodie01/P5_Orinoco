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

            let title = document.createElement("h1");
            title.classList.add("pt-5");
            title.classList.add("pb-5");
            title.classList.add("has-text-weight-bold");
            title.appendChild(document.createTextNode("Mon panier" + "(" + data.length + " article)"));

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
            divSize.appendChild(divWitdth);

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

            let formatPrice = new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 2 }).format(totalPrice/100);
            console.log(formatPrice);
            let pPrice = document.createElement("p");
            pPrice.classList.add("has-text-primary");
            pPrice.classList.add("has-text-weight-semibold");
            pPrice.classList.add("div_panier-price");
            pPrice.appendChild(document.createTextNode(formatPrice + '€'));
            divflexJustify.appendChild(pPrice);

            let divAlignCenter = document.createElement("div");
            divAlignCenter.classList.add("is-flex");
            divAlignCenter.classList.add("is-flex-align-items-center");
            divAlignCenter.classList.add("has-text-primary");

            let iconCircle = document.createElement("i");
            iconCircle.classList.add("fas");
            iconCircle.classList.add("fa-info");
            iconCircle.classList.add("info-circle");
            divAlignCenter.appendChild(iconCircle);

            let pText = document.createElement("p");
            pText.appendChild(document.createTextNode("Les articles dans le panier ne sont pas réservés."));
            divAlignCenter.appendChild(pText);

            let productbasket = document.getElementById("basket");
            productbasket.appendChild(title);
            productbasket.appendChild(divContent);
            productbasket.appendChild(divAlignCenter);

            // PARTIE PRIX TOTAL

            let total = document.createElement("p");
            total.classList.add("is-size-2");
            total.classList.add("pt-5");
            total.classList.add("pb-5");
            total.classList.add("has-text-weight-bold");
            total.appendChild(document.createTextNode("Total"));

            let spanJustify = document.createElement("span");
            spanJustify.classList.add("is-flex");
            spanJustify.classList.add("is-justify-content-space-between");
            spanJustify.classList.add("mb-4");

            let subTotal = document.createElement("p");
            subTotal.appendChild(document.createTextNode("Sous-Total"));
            spanJustify.appendChild(subTotal);

            let pricesubTotal = document.createElement("p");
            pricesubTotal.appendChild(document.createTextNode(""));
            spanJustify.appendChild(pricesubTotal);

            let spanSpaceBetween = document.createElement("span");
            spanSpaceBetween.classList.add("is-flex");
            spanSpaceBetween.classList.add("is-justify-content-space-between");
            spanSpaceBetween.classList.add("mb-3");

            let basketPrice = document.getElementById("basketPrice");
            basketPrice.appendChild(total);
            basketPrice.appendChild(spanJustify);
                /*
                <div>
                        <img class="pr-5" src="images/teddy_1.jpg" alt="Robert">
                        <div  class="is-size-4">
                            <p class="has-text-weight-bold is-size-3 mb-4">Robert</p>
                            <div class="is-flex is-justify-content-space-between div_panier-width">
                                <p class="mb-2">Couleur: Red</p>
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
                                <p class="has-text-primary has-text-weight-semibold div_panier-price">29€</p>
                            </div>
                        </div>
                    </div>
                    <div class="is-flex is-flex-align-items-center has-text-primary">
                        <i class="fas fa-info info-circle"></i>
                        <p>Les articles dans le panier ne sont pas réservés.</p>
                    </div>
                </div>

                    <p class="is-size-2 pt-5 pb-5 has-text-weight-bold">Total</p>
                    <span class="is-flex is-justify-content-space-between mb-4">
                        <p>Sous-Total</p>
                        <p>29€</p>
                    </span>
                    <span class="is-flex is-justify-content-space-between mb-3">
                        <p>Livraison</p>
                        <p>3,50€</p>
                    </span>
                    <span class="divider mb-3"></span>
                    <span class="is-flex is-justify-content-space-between mb-3">
                        <p class="has-text-weight-bold">Total (TVA incluse)</p>
                        <p class="has-text-weight-bold">32,50€</p>
                    </span>
                    <button class="button is-primary button-panier">Commander</button>
                </div>
            </div>
            <div class="content-hidden is-flex is-flex-direction-column is-align-items-center">
                <div class="pl-5 content-hidden_width">
                    <h2 class="title is-2 is-flex is-justify-content-flex-start">Mon adresse</h2>
                    <div class="control mb-5">
                        <label class="radio">
                            <input type="radio" name="answer">
                            Mme
                        </label>
                        <label class="radio">
                            <input type="radio" name="answer">
                            Mlle
                        </label>
                        <label class="radio">
                            <input type="radio" name="answer">
                            Mr
                        </label>
                    </div>
                    <div class="field mb-5">
                        <label for="name" class="label">Nom*</label>
                        <div class="control">
                            <input id="name" class="input" type="text" placeholder="Nom">
                        </div>
                    </div>
                    <div class="field mb-5">
                        <label for="username" class="label">Prénom*</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id="username" class="input is-success" type="text" placeholder="Prénom" value="">
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                        </div>
                        <p class="help is-success">This username is available</p>
                    </div>
                    <div class="field mb-5">
                        <label for="telephone" class="label">Téléphone*</label>
                        <div class="control">
                            <input id="telephone" class="input" type="text" placeholder="Numéro de Téléphone">
                        </div>
                    </div>

                    <div class="field mb-5">
                        <label for="email" class="label">Email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id="email" class="input is-danger" type="email" placeholder="Email input" value="hello@">
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>
                        <p class="help is-danger">This email is invalid</p>
                    </div>

                    <div class="field mb-5">
                        <label for="adresse" class="label">Adresse (numéros et rue)*</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id="adresse" class="input is-success" type="text" placeholder="Adresse" value="">
                            <span class="icon is-small is-left">
                                <i class="fas fa-map-marker-alt"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field mb-5">
                        <label for="complementadresse" class="label">Complément d'adresse (facultatif)</label>
                        <div class="control has-icons-left has-icons-right">
                            <input id="complementadresse" class="input is-success" type="text" placeholder="Complément d'adresse" value="">
                            <span class="icon is-small is-left">
                                <i class="fas fa-map-marker-alt"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                        </div>
                    </div>
                    <div class="is-flex">
                        <div class="field mb-5 mr-6">
                            <label for="codepostal" class="label">Code Postal</label>
                            <div class="control has-icons-left has-icons-right">
                                <input id="codepostal" class="input is-success" type="text" placeholder="Code Postal" value="">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-map-marker-alt"></i>
                                </span>
                                <span class="icon is-small is-right">
                                    <i class="fas fa-check"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field mb-5">
                            <label for="ville" class="label">Ville</label>
                            <div class="control has-icons-left has-icons-right">
                                <input id="ville" class="input is-success" type="text" placeholder="Ville" value="">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-map-marker-alt"></i>
                                </span>
                                <span class="icon is-small is-right">
                                    <i class="fas fa-check"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="control has-icons-left">
                        <div class="select mb-5">
                            <label for="pays">
                                <select id="pays">
                                    <option selected>Pays</option>
                                    <option>France</option>
                                    <option>Allemagne</option>
                                    <option>Royaume-Uni</option>
                                    <option>Espagne</option>
                                    <option>Italie</option>
                                    <option>Suisse</option>
                                </select>
                            </label>
                        </div>
                        <div class="icon is-small is-left">
                            <i class="fas fa-globe"></i>
                        </div>
                    </div>
                    <div class="pl-5">
                        <h2 class="title is-2 is-flex is-justify-content-flex-start">Procéder au paiement</h2>
                        <div class="is-flex is-flex-direction-column">
                            <h3>Veuillez saisir les coordonnées de votre carte</h3>
                                <label class="label has-text-weight-bold">Numéro de carte</label>
                                    <input type="text" placeholder="0000 1111 2222 3333" value="">
                                    <i class="fab fa-cc-mastercard m-5"></i>
                                    <i class="fab fa-cc-visa m-5"></i>

                                <label for="date" class="label has-text-weight-bold mb-4">Date d'expiration</label>
                                    <input id="date" type="text" placeholder="MM/AA" value="">

                                <label for="code" class="label has-text-weight-bold mb-4">Code de sécurité (Cvv)</label>
                                    <input id="code" type="text" placeholder="123" value="">

                        <div class="field mb-4">
                            <div class="control">
                                <label class="checkbox">
                                    <input type="checkbox">
                                    I agree to the terms and conditions
                                </label>
                            </div>
                        </div>
                        <div class="field is-grouped">
                            <div class="control">
                                <button class="button is-primary">Submit</button>
                            </div>
                            <div class="control">
                                <button class="button is-link is-light">Cancel</button>
                            </div>
                        </div>
                    </div>*/
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