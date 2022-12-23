(function () {

    const products = [
        {
            name: "Baby Yoda",
            image: "img/baby-yoda.svg",
            price: 10.99,
            description: "Baby Yoda sticker"
        },
        {
            name: "Banana",
            image: "img/banana.svg",
            price: 9.99,
            description: "Banana sticker"
        },
        {
            name: "Girl",
            image: "img/girl.svg",
            price: 5.99,
            description: "Girl sticker"
        },
        {
            name: "Viking",
            image: "img/viking.svg",
            price: 7.99,
            description: "Viking sticker"
        },
    ];

    function renderProducts(products) {
        const productsContainer = document.querySelector('.main-products__list');
        for (const product of products) {
            productsContainer.innerHTML += 
            `<article class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3 class="product-card__h3">${product.name}</h3>
                <p class="product-card__description">
                    ${product.description}
                </p>
                <div class="product-card__buttons">
                    <button class="product-card__buttons-info button button-card">
                    Info
                    </button>
                    <button class="product-card__buttons-buy button button-card">
                    Buy - ${product.price}
                    </button>
                </div>
                </article>`;
        }
    }

    renderProducts(products);

})();