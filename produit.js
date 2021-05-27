window.onload = function() {
        renderProduct();

};

function renderProduct()
{
    let id = localStorage.getItem('id');
    console.log(id);

    let type = localStorage.getItem('type');
    console.log(type);

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
    console.log(apiUrl);

    if (apiUrl !== '') {
        fetch(apiUrl)
            .then(function (resp) {
                return resp.json();
            })
            .then(function (produit) {
                console.log(produit);
                let divfigure = document.createElement("div");
                    divfigure.classList.add("divfigure");

                let figureimg = document.createElement("figure");
                    figureimg.classList.add("figure_img");
                    divfigure.appendChild(figureimg);

                let imgpro = document.createElement("img");
                    imgpro.src = produit.imageUrl;
                    figureimg.appendChild(imgpro);

                let divtext = document.createElement("div");
                    divtext.classList.add("section-text");
                    divtext.classList.add("pl-6");

                let titre = document.createElement("h1");
                    titre.classList.add("title");
                    titre.classList.add("is-1");
                    titre.classList.add("mb-5");
                    titre.appendChild(document.createTextNode(produit.name));
                    divtext.appendChild(titre);

                let soustitre = document.createElement("h2");
                    soustitre.classList.add("section_text-h2");
                    soustitre.classList.add("title");
                    soustitre.classList.add("is-2");
                    soustitre.classList.add("is-flex");
                    soustitre.classList.add("is-justify-content-flex-start");
                    soustitre.classList.add("mb-5");
                let formattedPrice = new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 2 }).format(produit.price/100);
                    soustitre.appendChild(document.createTextNode(formattedPrice+' €'));
                    divtext.appendChild(soustitre);

                let starIcon = document.createElement("div");
                starIcon.classList.add("icon-star");
                starIcon.classList.add("icon-star-produit");
                starIcon.classList.add("mb-5");
                divtext.appendChild(starIcon);

                    for (let i = 0; i < 5; i++) {
                        let star = document.createElement("i");
                        star.classList.add("fas");
                        star.classList.add("fa-star");
                        starIcon.appendChild(star);
                    }

                let color = document.createElement("h3");
                    color.classList.add("title");
                    color.classList.add("is-3");
                    color.classList.add("mb-3");
                    color.appendChild(document.createTextNode("Couleur"));
                    divtext.appendChild(color);

                let divselect = document.createElement("div");
                    divselect.classList.add("select");
                    divselect.classList.add("is-primary");
                    divselect.classList.add("mb-6");
                    divtext.appendChild(divselect);

                let select = document.createElement("select");
                    divselect.appendChild(select);
                let colors = produit.colors;
                if (typeof colors != 'undefined'){
                    for (let i = 0; i < colors.length; ++i) {
                        let opt = colors[i];
                        let option = document.createElement("option");
                        option.text = opt;
                        option.value = opt;
                        select.add(option);
                    }
                }

                let quantite = document.createElement("h3");
                    quantite.classList.add("title");
                    quantite.classList.add("is-3");
                    quantite.classList.add("mb-3");
                    quantite.appendChild(document.createTextNode("Quantité"));
                    divtext.appendChild(quantite);


                let numero = document.createElement("div");
                    numero.classList.add("select");
                    numero.classList.add("is-primary");
                    numero.classList.add("mb-6");
                    divtext.appendChild(numero);

                let selectnum = document.createElement("select");
                    numero.appendChild(selectnum);

                let myNum = ["0", "1", "3", "4", "5", "6", "7", "8", "9", "10"];

                    for(let i = 0; i < myNum.length; ++i){
                        let num = myNum[i];
                        let numquant = document.createElement("option");
                        numquant.text = num;
                        numquant.value = num;
                        selectnum.add(numquant);
                    }

                let buttonpPro = document.createElement("button");
                    buttonpPro.classList.add("button");
                    buttonpPro.classList.add("is-primary");
                    buttonpPro.classList.add("ml-5");
                    buttonpPro.appendChild(document.createTextNode("Ajouter au panier"));
                    divtext.appendChild(buttonpPro);

                let description = document.createElement("h3");
                    description.classList.add("title");
                    description.classList.add("is-3");
                    description.classList.add("mb-3");
                    description.appendChild(document.createTextNode("Description :"));
                    divtext.appendChild(description);

                let pProduit = document.createElement("p");
                    pProduit.classList.add("subtitle");
                    pProduit.classList.add("is-5");
                    pProduit.classList.add("has-text-justified");
                    pProduit.classList.add("mt-2");
                    pProduit.appendChild(document.createTextNode(produit.description));
                    divtext.appendChild(pProduit);



                    let sectionpro = document.getElementById("produits");
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
        <div class="icon-star icon-star-produit mb-5">
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