const displayElement = document.querySelector('.products-section');

displayElement.innerHTML = '';
products.forEach((items) =>{
	displayElement.innerHTML += `
		<div class="products">
	    	<img src="${items.image}">
	        <p class="product-name"> Food : ${items.name}</p>
	        <p class="price"> Price : ${items.price}</p>
	        <button>Place Order</button>
		</div>
	`
});
