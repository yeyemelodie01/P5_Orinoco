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

// Initialisation après chargement du DOM
document.addEventListener("DOMContentLoaded", function() {
    // mettre ici le code à exécuter
    let div = document.createElement("div");
    div.classList.add("item-1");
    document.getElementById("carousel-teddies").appendChild(div);

    let div1 = document.createElement("div");
    document.getElementsByClassName("item-1")
    div.appendChild(div1);
    div1.classList.add("card");

    let div2 = document.createElement("div");
    document.getElementsByClassName("card");
    div1.appendChild(div2);
    div2.classList.add("card-image");

    let figure = document.createElement("figure");
    document.getElementsByClassName("card-image");
    div2.appendChild(figure);
    figure.classList.add("image");
    figure.classList.add("is-4by3");

    let img = document.createElement("img");
    img.src = "images/teddy_1.jpg";
    document.getElementsByClassName("image is-4by3");
    figure.appendChild(img);

    let div3 = document.createElement("div");
    document.getElementsByClassName("card");
    div3.classList.add("card-content");
    div3.classList.add("has-text-centered");
    div1.appendChild(div3);

    let div4 = document.createElement("div");
    document.getElementsByClassName("card-content");
    div4.classList.add("media");
    div3.appendChild(div4);

    let div5 = document.createElement("div");
    document.getElementsByClassName("media");
    div5.classList.add("media-content");
    div4.appendChild(div5);

    let p = document.createElement("p");
    document.getElementsByClassName("media-content");
    p.appendChild(document.createTextNode("Norbert"));
    p.classList.add("title");
    p.classList.add("is-4");
    div5.appendChild(p);

    let p1 = document.createElement("p");
    document.getElementsByClassName("media-content");
    p1.appendChild(document.createTextNode("29€"));
    p1.classList.add("subtitle");
    p1.classList.add("is-6");
    div5.appendChild(p1);

    let div6 = document.createElement("div");
    document.getElementsByClassName("media-content");
    div6.classList.add("icon-star");
    div5.appendChild(div6);

    let icon = document.createElement("i");
    document.getElementsByClassName("icon-star");
    icon.classList.add("fas");
    icon.classList.add("fa-star");
    div6.appendChild(icon);

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
