window.onload = function() {
    renderShopping();
};

function renderShopping() {
    let data = JSON.parse(localStorage.getItem("basket"));
    console.log(data);
    const productBasket = document.querySelector("#panier");
    console.log(productBasket);
    let displayBasket = [];
    if(data === null){
        alert("le panier est vide");
    } else {
        for ( let i = 0; i< data.length; i++) {
            let type = data[i].type;
            let id = data[i].id;
            let detail = data[i].detail;
            let quantity = data[i].quantity;
            let price = data[i].price;
            let totalPrice = data[i].totalPrice;

            console.log(type, id, detail, quantity, price, totalPrice);

            displayBasket = displayBasket + '<div class="is-flex is-justify-content-space-between">\n' +
                '                <div class="div_panier-content pl-5">\n' +
                '                    <h1 class="pt-5 pb-5 has-text-weight-bold">Mon panier (1 article)</h1>\n' +
                '                    <div>\n' +
                '                        <img class="pr-5" src="images/teddy_1.jpg" alt="Robert">\n' +
                '                        <div  class="is-size-4">\n' +
                '                            <p class="has-text-weight-bold is-size-3 mb-4">Robert</p>\n' +
                '                            <div class="is-flex is-justify-content-space-between div_panier-width">\n' +
                '                                <p class="mb-2">Couleur: Red</p>\n' +
                '                                <label for="quantite"></label>\n' +
                '                                <select id="quantite">\n' +
                '                                    <option>0</option>\n' +
                '                                    <option>1</option>\n' +
                '                                    <option>2</option>\n' +
                '                                    <option>3</option>\n' +
                '                                    <option>4</option>\n' +
                '                                    <option>5</option>\n' +
                '                                    <option>6</option>\n' +
                '                                    <option>7</option>\n' +
                '                                    <option>8</option>\n' +
                '                                    <option>9</option>\n' +
                '                                    <option>10</option>\n' +
                '                                </select>\n' +
                '                            </div>\n' +
                '                            <div class="is-flex is-justify-content-space-between section-panier_marginbottom">\n' +
                '                                <p class="is-size-5"><i class="fas fa-trash-alt mr-3"></i>Supprimer</p>\n' +
                '                                <p class="has-text-primary has-text-weight-semibold div_panier-price">29€</p>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                    <div class="is-flex is-flex-align-items-center has-text-primary">\n' +
                '                        <i class="fas fa-info info-circle"></i>\n' +
                '                        <p>Les articles dans le panier ne sont pas réservés.</p>\n' +
                '                    </div>\n' +
                '                </div>';
            if(i === data.length){
                productBasket.innerHTML = displayBasket;
            }
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