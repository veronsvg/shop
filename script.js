let products = `[
{
"name": "Белокочанная капуста",
"id": "Cabbage",
"price": 89
},
{
"name":"Брокколи",
"id": "Broccoli",
"price": 399
},
{
"name": "Брюссельская капуста",
"id": "Brussels_sprout",
"price": 299
},
{
"name": "Цветная капуста",
"id": "Cauliflower",
"price": 136
},
{
"name": "Пекинская капуста",
"id": "Chinese_cabbage",
"price": 140
}
]`

products = JSON.parse(products);
updateCartCount()

for( let product of products){
    let option = document.createElement('div');
    stock.append(option);
    option.className = 'product';
    option.id = product.id;
    
    
    
    let imgCabbage = document.createElement('img');
    option.append(imgCabbage);
    imgCabbage.src = `${product.id}.png`;
    imgCabbage.className = 'imgCabbage'

    let nameCabbage = document.createElement('p');
    option.append(nameCabbage);
    nameCabbage.textContent = product.name;
    
    let priceCabbage = document.createElement('p');
    option.append(priceCabbage);
    priceCabbage.textContent= `${product.price}₽`;

    let stockCart = document.createElement('img');
    option.append(stockCart);
    stockCart.src = 'clip.png';
    stockCart.className = 'stock_cart';
    

    option.onclick = () => addToCart(product)
};


// stock.onclick = () => alert(product.name);

/* stock.onclick = (event) => {
    if (!event.target.closest(".product")) return;
    alert(event.target.closest(".product").id)
}; */

function addToCart(product){

    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    if( cart[product.id]) {
        cart[product.id].amount += 1;
    } else {
        cart[product.id] = {...product,amount:1};
    };

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
};

function updateCartCount(){

    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    let itemCount = 0;

    for(const key in cart) {
        itemCount += cart [key].amount;
    }
    document.querySelector('.button_cart span').textContent = itemCount;
};

// alert(product.name);
    // localStorage.setItem('cart', JSON.stringify(product));