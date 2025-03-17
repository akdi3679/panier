document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.card-body');
    const totalPriceElement = document.querySelector('.total');
    
    const updateTotalPrice = () => {
      let total = 0;
      cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.unit-price').innerText.replace(' $', ''));
        const quantity = parseInt(item.querySelector('.quantity').innerText);
        total += price * quantity;
      });
      totalPriceElement.innerText = `${total.toFixed(2)} $`;
    };
  
    const increaseQuantity = (item) => {
      const quantityElement = item.querySelector('.quantity');
      let quantity = parseInt(quantityElement.innerText);
      quantity++;
      quantityElement.innerText = quantity;
      updateTotalPrice();
    };
  
    const decreaseQuantity = (item) => {
      const quantityElement = item.querySelector('.quantity');
      let quantity = parseInt(quantityElement.innerText);
      if (quantity > 0) {
        quantity--;
        quantityElement.innerText = quantity;
      }
      updateTotalPrice();
    };
  
    const deleteItem = (item) => {
      item.remove();
      updateTotalPrice();
    };
  
    const toggleLike = (item) => {
      const heartIcon = item.querySelector('.fa-heart');
      heartIcon.classList.toggle('liked');
    };
  
    cartItems.forEach(item => {
      item.querySelector('.fa-plus-circle').addEventListener('click', () => increaseQuantity(item));
  
      item.querySelector('.fa-minus-circle').addEventListener('click', () => decreaseQuantity(item));
  
      item.querySelector('.fa-trash-alt').addEventListener('click', () => deleteItem(item));
  
      item.querySelector('.fa-heart').addEventListener('click', () => toggleLike(item));
    });
  
    updateTotalPrice();
  });
  