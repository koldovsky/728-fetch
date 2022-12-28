(async function () {
    
    const response = await fetch('api/products.json');
    const products = await response.json();
    renderProducts(products, 1);

    // fetch('api/products.json')
    //     .then( response => response.json() )
    //     .then( products => renderProducts(products));

    // function ajax() {
    //     const xhr = new XMLHttpRequest();
    //     xhr.onreadystatechange = function() {
    //         if (xhr.readyState === 4 && xhr.status === 200) {
    //             const products = JSON.parse(xhr.responseText);
    //             renderProducts(products);
    //         }
    //     }
    //     xhr.open('get', 'api/products.json', true);
    //     xhr.send();
    // }
    // ajax();

    function renderProducts(products, rate) {
        const productsContainer = document.querySelector('.main-products__list');
        productsContainer.innerHTML = '';
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
                    Buy - ${(product.price * rate).toFixed(2)}
                    </button>
                </div>
                </article>`;
        }
    }

    let currencies;
    async function convertCurrency() {
        const currencyTo = document.querySelector('.main-products__currency').value;
        if (!currencies) {
            const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
            currencies = await response.json();
        }
        const rate = currencies.rates[currencyTo];
        renderProducts(products, rate);
    }

    document.querySelector('.main-products__convert').addEventListener('click', convertCurrency);

})();