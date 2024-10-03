
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    console.log(cart)
    
    for (const key in cart){
        const product = cart[key];      
        let cartDiv = document.createElement('div');
        stock_cart.append(cartDiv);
        cartDiv.className = 'cartDiv';

        let imgName = document.createElement('div');
        cartDiv.prepend(imgName);
        imgName.className = 'imgName';
        
        let imgInCart = document.createElement('img');
        imgName.append(imgInCart);
        imgInCart.src = `${product.id}.png`;
        
        let nameInCart = document.createElement('p');
        imgName.append(nameInCart);
        nameInCart.innerHTML = product.name
        
        let priceInCart = document.createElement('p');
        cartDiv.append(priceInCart);
        priceInCart.textContent = `${product.price}₽`;

        let amountInCart = document.createElement('div');
        cartDiv.append(amountInCart);
        amountInCart.textContent = product.amount;
        amountInCart.className = 'amountInCart';
        
        let totalInCart = document.createElement('p');
        cartDiv.append(totalInCart);
        totalInCart.textContent = `${product.amount * product.price}₽`;
        totalInCart.className = 'totalInCart'

        let deleteButton = document.createElement('div');
        cartDiv.prepend(deleteButton);
        deleteButton.className = 'deleteButton'
        deleteButton.textContent = 'x'
    }

    /*
        for (let div of document.querySelectorAll('cartDiv')){
        div.insertAdjacentHTML('afterbegin' ')
        }
    
        deleteBottom.onclick = function (event){
        if(event.target.className != 'deleteButton') return;
     
        even.target.closest()

        });
*/
