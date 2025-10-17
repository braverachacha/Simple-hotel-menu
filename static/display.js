const displayElement = document.querySelector('.products-section');

displayElement.innerHTML = '';
products.forEach((item) =>{
	displayElement.innerHTML += `
		<div class="products">
	    	<img src="${item.image}">
	        <p class="product-name"> ${item.name}</p>
	        <p class="price"> Ksh : ${item.price}</p>
	        <button data-product-id="${item.id}" class="js-place-order">Place Order</button>
		</div>
	`
});

document.querySelectorAll('.js-place-order')
  .forEach((button) =>{
    button.addEventListener('click', ()=>{
     const productId =  button.dataset.productId;
     
     let matchingItem;
     cart.forEach((order) =>{
       if(productId === order.productId){
         matchingItem = order;
       }
     });
     if(matchingItem){
       matchingItem.quantity += 1;
     } else {
       cart.push({
         productId : productId,
         quantity : 1
       });
     }
     
     let cartQuantity = 0;
     cart.forEach((orders) =>{
      cartQuantity += orders.quantity;
     })
     document.querySelector('.js-cart-quantity')
      .innerHTML = cartQuantity;
    });
  });
  
