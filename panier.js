window.onload = function() {
    renderShopping();
};

function renderShopping() {
    let id = localStorage.getItem('id');
    let type = localStorage.getItem('type');
    let price = localStorage.getItem('price');
    let quantity = localStorage.getItem('quantity');
    let totalPrice = localStorage.getItem('totalPrice');
    let productUrl = "";
    let authorizedType = [
        'teddies',
        'furniture',
        'cameras',
    ];

    let baseUrl = "https://ab-p5-api.herokuapp.com/api/";
    if (true === authorizedType.includes(type)) {
        productUrl = baseUrl+type+'/'+id+'/'+price+'/'+quantity+'/'+totalPrice;
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
    }
}