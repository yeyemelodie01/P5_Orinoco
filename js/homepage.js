import {createDomElement, appendElementTo, formatPrice} from './functions.js';

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
                    let item = createDomElement({
                        tagName: 'div',
                        classList: ['item-'+itemPos],
                    })
                    appendElementTo(document.getElementById("carousel-teddies"), item);

                    let card = createDomElement({
                        tagName: 'div',
                        classList: ['card'],
                    });
                    appendElementTo(item, card);

                    let cardImg = createDomElement({
                        tagName: 'div',
                        classList: ['card-image'],
                    });
                    appendElementTo(card, cardImg);

                    let figure = createDomElement({
                        tagName: 'figure',
                        classList: ['is-4by3', 'image'],
                    });
                    appendElementTo(cardImg, figure);

                    let img = createDomElement({
                        tagName: 'img',
                        src: itemObject.imageUrl,
                    });
                    appendElementTo(figure, img);

                    let cardContent = createDomElement({
                        tagName: 'div',
                        classList: ['card-content', 'has-text-centered', 'is-flex', 'is-flex-direction-column'],
                    });
                    appendElementTo(card, cardContent);

                    let media = createDomElement({
                        tagName: 'div',
                        classList: ['media'],
                    });
                    appendElementTo(cardContent, media);

                    let mediaContent = createDomElement({
                        tagName: 'div',
                        classList: ['media-content'],
                    });
                    appendElementTo(media, mediaContent);

                    let objectName = createDomElement({
                        tagName: 'p',
                        classList: ['title', 'is-4', 'mb-4'],
                        textNode: itemObject.name,
                    });
                    appendElementTo(mediaContent, objectName);

                    let price = createDomElement({
                        tagName: 'p',
                        classList: ['subtitle', 'is-6', 'mb-4', 'mt-4'],
                        textNode: formatPrice(itemObject.price/100),
                    });
                    appendElementTo(mediaContent, price);
                    //let formattedPrice = new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 2 }).format(itemObject.price/100);
                    //price.appendChild(document.createTextNode(formattedPrice+' €'));
                    //mediaContent.appendChild(price);

                    let starIcon = createDomElement({
                        tagName: 'div',
                        classList: ['icon-star'],
                    });
                    appendElementTo(mediaContent, starIcon);

                    for (let i = 0; i < 5; i++) {
                        let icon = createDomElement({
                            tagName: 'i',
                            classList: ['fas', 'fa-star'],
                        });
                        appendElementTo(starIcon, icon);
                    }

                    let a = createDomElement({
                        tagName: 'a',
                        classList: ['mb-4', 'lien-font'],
                        title: 'en savoir plus',
                        href: 'product_page.html',
                        textNode: 'En savoir plus...',
                    });
                    appendElementTo(cardContent, a);

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
