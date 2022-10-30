const baseUrl = "https://flowerpowersite1.shop/gamehub/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function(product){
        productContainer.innerHTML += ` <a href="details.html?id=${product.id}" class="card">
        <div class="product"><h2>${product.name}</h2>
        <img src="${product.images[0].src}" alt="" class="cart-img">
       
        </a>
    </div>
        `
    })

}

getProducts(baseUrl);