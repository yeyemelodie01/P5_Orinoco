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
                console.log(product);
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
                if (typeof colors != 'undefined') {
                    let color = document.createElement("h3");
                    color.classList.add("title");
                    color.classList.add("is-3");
                    color.classList.add("mb-3");
                    color.appendChild(document.createTextNode("Couleur"));
                    divtext.appendChild(color);

                    let colorDiv = document.createElement("div");
                    colorDiv.classList.add("select");
                    colorDiv.classList.add("is-primary");
                    colorDiv.classList.add("mb-6");
                    divtext.appendChild(colorDiv);

                    let colorSelect = document.createElement("select");
                    colorSelect.id = 'colors';
                    colorDiv.appendChild(colorSelect);
                    for (let i = 0; i < colors.length; ++i) {
                        let selectOption = document.createElement("option");
                        selectOption.text = colors[i];
                        selectOption.value = colors[i];
                        colorSelect.add(selectOption);
                    }
                }

                let varnishs = product.varnish;
                if (typeof varnishs != 'undefined'){
                    let vernis = document.createElement("h3");
                    vernis.classList.add("title");
                    vernis.classList.add("is-3");
                    vernis.classList.add("mb-3");
                    vernis.appendChild(document.createTextNode("Vernis"));
                    divtext.appendChild(vernis);

                    let vernisDiv = document.createElement("div");
                    vernisDiv.classList.add("select");
                    vernisDiv.classList.add("is-primary");
                    vernisDiv.classList.add("mb-6");
                    divtext.appendChild(vernisDiv);

                    let vernisSelect = document.createElement("select");
                    vernisSelect.id = 'vernis';
                    vernisDiv.appendChild(vernisSelect);
                    for (let i = 0; i < varnishs.length; ++i) {
                        let vernisOption = document.createElement("option");
                        vernisOption.text = varnishs[i];
                        vernisOption.value = varnishs[i];
                        vernisSelect.add(vernisOption);
                    }
                }

                let lense = product.lenses;
                if (typeof lense != 'undefined'){
                    let lentilles = document.createElement("h3");
                    lentilles.classList.add("title");
                    lentilles.classList.add("is-3");
                    lentilles.classList.add("mb-3");
                    lentilles.appendChild(document.createTextNode("Lentilles"));
                    divtext.appendChild(lentilles);

                    let lentillesDiv = document.createElement("div");
                    lentillesDiv.classList.add("select");
                    lentillesDiv.classList.add("is-primary");
                    lentillesDiv.classList.add("mb-6");
                    divtext.appendChild(lentillesDiv);

                    let lentillesSelect = document.createElement("select");
                    lentillesSelect.id = 'lentilles';
                    lentillesDiv.appendChild(lentillesSelect);
                    for (let i = 0; i < lense.length; ++i) {
                        let lentillesOption = document.createElement("option");
                        lentillesOption.text = lense[i];
                        lentillesOption.value = lense[i];
                        lentillesSelect.add(lentillesOption);
                    }
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
                addToCartButton.classList.add("button");
                addToCartButton.classList.add("is-primary");
                addToCartButton.classList.add("ml-5");
                addToCartButton.appendChild(document.createTextNode("Ajouter au panier"));
                divtext.appendChild(addToCartButton);


                addToCartButton.addEventListener('click', function (){
                    let itemQuantity = document.getElementById('quantity').value;
                    let panier = [
                        {
                            'id' : product._id,
                            'type' : type,
                            'color' : document.getElementById('colors').length > 0,
                            'quantity' :itemQuantity,
                            'price' : String(product.price),
                            'totalPrice' : String(product.price * itemQuantity)
                        }
                    ]
                    let stocker = JSON.stringify(panier);
                    localStorage.setItem('panier', stocker);
                    /*localStorage.setItem('type', type);
                    localStorage.setItem('quantity', itemQuantity);
                    localStorage.setItem('price',String(product.price));
                    localStorage.setItem('totalPrice', String(product.price * itemQuantity));*/
                })

                let description = document.createElement("h3");
                    description.classList.add("title");
                    description.classList.add("is-3");
                    description.classList.add("mb-3");
                    description.appendChild(document.createTextNode("Description :"));
                    divtext.appendChild(description);

                let text = document.createElement("p");
                    text.classList.add("subtitle");
                    text.classList.add("is-5");
                    text.classList.add("has-text-justified");
                    text.classList.add("mt-2");
                    text.appendChild(document.createTextNode(product.description));
                    divtext.appendChild(text);



                    let sectionpro = document.getElementById("products");
                        sectionpro.appendChild(divfigure);
                        sectionpro.appendChild(divtext);
            })
    }
}


    /*
    <div class="section-flex-div">
        <figure class="figure_img">
          <img src="images/teddy_1.jpg" alt="Norbert">
        </figure>
      </div>
      <div class="section_text">
        <h1 class="title is-1 mb-5">Robert</h1>
        <h2 class="section_text-h2 title is-2 is-flex is-justify-content-flex-start mb-5">29€</h2>
        <div class="icon-star icon-star-product mb-5">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <h3 class="title is-3 mb-3">Couleur</h3>
        <div class="select is-primary mb-6">
          <select>
            <option>...</option>
            <option>Tan</option>
            <option>Chocolate</option>
            <option>Black</option>
            <option>White</option>
          </select>
        </div>
        <h3 class="title is-3 mb-3">Quantité</h3>
        <div class="select is-primary mb-6">
          <select>
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
        <button class="button is-primary ml-5">Ajouter au panier</button>
        <h3 class="title is-3 mb-3">Description :</h3>
        <p class="subtitle is-5 has-text-justified mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dui mauris, dignissim a blandit at, vehicula et mauris.
          Mauris varius accumsan tristique. Integer ex felis, mattis sit amet accumsan quis, tempus vitae lorem.
          Quisque at lacus pellentesque justo mollis porttitor a ac tellus.
          Phasellus volutpat porta orci, vitae egestas felis posuere et. Nullam sed lobortis mi.
          Nunc posuere ipsum tempor, sagittis purus vel, consequat magna. Ut finibus lacinia enim et sagittis.
          Suspendisse luctus orci non metus imperdiet facilisis. Mauris eget libero lacinia, pulvinar sem et, fermentum nulla.
          Morbi ut risus id sapien malesuada aliquet at in metus. Nulla consectetur tincidunt consequat.
          Nunc eleifend nulla dui, id finibus elit maximus eget. </p>
      </div>*/