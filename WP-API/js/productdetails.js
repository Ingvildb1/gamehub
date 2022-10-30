
const productContainer = document.querySelector(".products");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href ="/";
}

const baseUrl = "https://flowerpowersite1.shop/gamehub/wp-json/wc/store/products/" + id;


async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();

    

    productContainer.innerHTML = `<h1>${products.name}</h1>
    <img src="${products.images[0].src}" alt="" class="cart-img">
    <div class="details-description">${products.description}</div>


`;
  

}

getProducts(baseUrl);



