window.onload = function() {
    renderShopping();
};

function renderShopping() {
    let data = JSON.parse(localStorage.getItem("basket"));
    console.log(data);


    if(data === null){
        let empty = document.createElement("h1");
        empty.classList.add("is-flex");
        empty.classList.add("is-justify-content-center");
        empty.classList.add("is-align-items-center");
        empty.classList.add("empty");
        empty.appendChild(document.createTextNode("Le panier est vide"));

        let emptyBasket = document.getElementById("basket");
        emptyBasket.appendChild(empty);

    } else {
        let title = document.createElement("h1");
        title.classList.add("pt-5");
        title.classList.add("pb-5");
        title.classList.add("has-text-weight-bold");
        title.appendChild(document.createTextNode("Mon panier" + "(" + data.length + " article)"));

        let divAlignCenter = document.createElement("div");
        divAlignCenter.classList.add("is-flex");
        divAlignCenter.classList.add("is-flex-align-items-center");
        divAlignCenter.classList.add("has-text-primary");
        divAlignCenter.classList.add("mb-4");
        divAlignCenter.classList.add("div_align");

        let iconCircle = document.createElement("i");
        iconCircle.classList.add("fas");
        iconCircle.classList.add("fa-info");
        iconCircle.classList.add("info-circle");
        divAlignCenter.appendChild(iconCircle);

        let pText = document.createElement("p");
        pText.appendChild(document.createTextNode("Les articles dans le panier ne sont pas réservés."));
        divAlignCenter.appendChild(pText);

        let basket = document.getElementById("basket");
        basket.appendChild(title);
        basket.appendChild(divAlignCenter);

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
            let pPrice = document.createElement("p");
            pPrice.classList.add("has-text-primary");
            pPrice.classList.add("has-text-weight-semibold");
            pPrice.classList.add("div_panier-price");
            pPrice.appendChild(document.createTextNode(formatPrice + '€'));
            divflexJustify.appendChild(pPrice);

            let productbasket = document.getElementById("basket");
            productbasket.appendChild(divContent);

            // PARTIE PRIX TOTAL

            let pricesubTotal = document.createElement("p");
            pricesubTotal.appendChild(document.createTextNode(""));

            let basketPrice = document.getElementById("basketSubTotal");
            basketPrice.appendChild(pricesubTotal);
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

        let divRadio = document.createElement("div");
        divRadio.classList.add("control");
        divRadio.classList.add("mb-5");
        divHidden.appendChild(divRadio);

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
        divHidden.appendChild(divName);

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
        divHidden.appendChild(divUser);

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
        divHidden.appendChild(divPhone);

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
        divHidden.appendChild(divEmail);

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
        divHidden.appendChild(divAdress);

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
        divHidden.appendChild(divAdditional);

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
        divHidden.appendChild(divflexTown);

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

        let divcontrolCountry = document.createElement("div");
        divcontrolCountry.classList.add("control");
        divHidden.appendChild(divcontrolCountry);

        let divselectCountry = document.createElement("div");
        divselectCountry.classList.add("select");
        divselectCountry.classList.add("mb-5");
        divcontrolCountry.appendChild(divselectCountry);

        let labelCountry = document.createElement("label");
        labelCountry.setAttribute('for', 'pays');
        divselectCountry.appendChild(labelCountry);

        let selectCountry = document.createElement("select");
        selectCountry.id = 'pays';
        divselectCountry.appendChild(selectCountry);

        let countries = ["Pays", "France", "Allemagne", "Italie", "Espagne", "Portugal", "Suisse", "Belgique"];
        for(let i = 0; i < countries.length; ++i){
            let countryOption = document.createElement("option");
            countryOption.text = String(countries[i]);
            countryOption.value = String(countries[i]);
            selectCountry.add(countryOption);
        }

        let divCheckbox = document.createElement("div");
        divCheckbox.classList.add("field");
        divCheckbox.classList.add("mb-4");
        divHidden.appendChild(divCheckbox);

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
        divHidden.appendChild(divButton);

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
}

/*       <div class="field is-grouped">
                            <div class="control">
                                <button class="button is-primary">Submit</button>
                            </div>
                            <div class="control">
                                <button class="button is-link is-light">Cancel</button>
                            </div>
                        </div>
*/