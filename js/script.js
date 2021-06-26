window.onload = function() {
    let items = [
        'teddies',
        'cameras',
        'furniture',
    ]
    for (let item of items) {
        renderItems(item);
    }
};

function renderItems(type) {
    let fetchUrl = "";
    let authorizedType = [
        'teddies',
        'furniture',
        'cameras',
    ];
    let baseUrl = "https://ab-p5-api.herokuapp.com/api/";
    if (true === authorizedType.includes(type)) {
        fetchUrl = baseUrl+type;
    }

    if (fetchUrl !== '') {
        fetch(fetchUrl)
            .then(function (resp) {
                return resp.json();
            })
            .then(function (items){
                let itemPos = 1;
                for (let itemObject of items){
                    let item = document.createElement("div");
                    item.classList.add("item-"+itemPos);

                    let card = document.createElement("div");
                    card.classList.add("card");
                    item.appendChild(card);

                    let cardImg = document.createElement("div");
                    cardImg.classList.add("card-image");
                    card.appendChild(cardImg);

                    let figure = document.createElement("figure");
                    figure.classList.add("is-4by3");
                    figure.classList.add("image");
                    cardImg.appendChild(figure);

                    let img = document.createElement("img");
                    img.src = itemObject.imageUrl;
                    figure.appendChild(img);

                    let cardContent = document.createElement("div");
                    cardContent.classList.add("card-content");
                    cardContent.classList.add("has-text-centered");
                    cardContent.classList.add("is-flex");
                    cardContent.classList.add("is-flex-direction-column");
                    card.appendChild(cardContent);

                    let media = document.createElement("div");
                    media.classList.add("media");
                    cardContent.appendChild(media);

                    let mediaContent = document.createElement("div");
                    mediaContent.classList.add("media-content");
                    media.appendChild(mediaContent);

                    let norbert = document.createElement("p");
                    norbert.classList.add("title");
                    norbert.classList.add("is-4");
                    norbert.classList.add("mb-4");
                    norbert.appendChild(document.createTextNode(itemObject.name));
                    mediaContent.appendChild(norbert);

                    let price = document.createElement("p");
                    price.classList.add("subtitle");
                    price.classList.add("is-6");
                    price.classList.add("mb-4");
                    price.classList.add("mt-4");
                    let formattedPrice = new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 2 }).format(itemObject.price/100);
                    price.appendChild(document.createTextNode(formattedPrice+' €'));
                    mediaContent.appendChild(price);

                    let starIcon = document.createElement("div");
                    starIcon.classList.add("icon-star");
                    mediaContent.appendChild(starIcon);

                    for (let i = 0; i < 5; i++) {
                        let icon = document.createElement("i");
                        icon.classList.add("fas");
                        icon.classList.add("fa-star");
                        starIcon.appendChild(icon);
                    }

                    let a = document.createElement("a");
                    a.title = "en savoir plus";
                    a.href = "produit.html";
                    a.classList.add("mb-4");
                    a.classList.add("lien-font");
                    a.appendChild(document.createTextNode("En savoir plus..."));
                    cardContent.appendChild(a);

                    a.addEventListener('click', function (){
                        localStorage.setItem('id', itemObject._id);
                        localStorage.setItem('type', type);
                    })

                    let itemsCarousel = document.getElementById("carousel-"+type);
                    itemsCarousel.appendChild(item);
                    itemPos++;
                }

                bulmaCarousel.attach('#carousel-'+type, {
                    slidesToScroll: 1,
                    slidesToShow: 2
                });
            })
            .catch(error => alert("Erreur : " + error));
    }
}
