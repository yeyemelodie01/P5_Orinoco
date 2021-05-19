fetch("http://localhost:3000/api/teddies")
    .then(function (resp) {
    return resp.json();
})
    .then(function (items){
        console.log(items);
        for (let toto of items){
            console.log(toto.price);
        }
    })
    .catch(error => alert("Erreur : " + error));

// Initialisation avant chargement du DOM
window.addEventListener('DOMContentLoaded', (event)  => {
    // mettre ici le code à exécuter
    let item = document.createElement("div");
    item.classList.add("item-1");
    document.getElementById("carousel-teddies")

    let card = document.createElement("div");
    document.getElementsByClassName("item-1")
    item.appendChild(div1);
    card.classList.add("card");

    let cardimg = document.createElement("div");
    document.getElementsByClassName("card");
    card.appendChild(cardimg);
    cardimg.classList.add("card-image");

    let figure = document.createElement("figure");
    document.getElementsByClassName("card-image");
    div2.appendChild(figure);
    figure.classList.add("image");
    figure.classList.add("is-4by3");

    let img = document.createElement("img");
    img.src = "images/teddy_1.jpg";
    document.getElementsByClassName("image is-4by3");
    figure.appendChild(img);

    let cardcontent = document.createElement("div");
    document.getElementsByClassName("card");
    cardcontent.classList.add("card-content");
    cardcontent.classList.add("has-text-centered");
    div1.appendChild(cardcontent);

    let media = document.createElement("div");
    document.getElementsByClassName("card-content");
    media.classList.add("media");
    cardcontent.appendChild(media);

    let mediacontent = document.createElement("div");
    document.getElementsByClassName("media");
    mediacontent.classList.add("media-content");
    media.appendChild(mediacontent);

    let norbert = document.createElement("p");
    document.getElementsByClassName("media-content");
    norbert.appendChild(document.createTextNode("Norbert"));
    norbert.classList.add("title");
    norbert.classList.add("is-4");
    mediacontent.appendChild(norbert);

    let prix = document.createElement("p");
    document.getElementsByClassName("media-content");
    prix.appendChild(document.createTextNode("29€"));
    prix.classList.add("subtitle");
    prix.classList.add("is-6");
    mediacontent.appendChild(prix);

    let iconetoile = document.createElement("div");
    document.getElementsByClassName("media-content");
    iconetoile.classList.add("icon-star");
    mediacontent.appendChild(iconetoile);

    let icon = document.createElement("i");
    document.getElementsByClassName("icon-star");
    icon.classList.add("fas");
    icon.classList.add("fa-star");
    iconetoile.appendChild(icon);


});


/*
    <div class="item-1">
        <div class="card">
             <div class="card-image">
                  <figure class="image is-4by3">
                       <img src="images/teddy_1.jpg" alt="Norbert">
                  </figure>
             </div>
             <div class="card-content has-text-centered">
                  <div class="media">
                           <div class="media-content">
                                <p class="title is-4">Norbert</p>
                                <p class="subtitle is-6">29€</p>
                                <div class="">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                    <i class="far fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <button class="button is-primary">Ajouter au panier</button>
                    </div>
                </div>
            </div>
*/
