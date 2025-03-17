document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.card-body');
    const totalPriceElement = document.querySelector('.total');
    
    // Function to update the total price
    const updateTotalPrice = () => {
      let total = 0;
      cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.unit-price').innerText.replace(' $', ''));
        const quantity = parseInt(item.querySelector('.quantity').innerText);
        total += price * quantity;
      });
      totalPriceElement.innerText = `${total.toFixed(2)} $`;
    };
  
    // Function to increase quantity
    const increaseQuantity = (item) => {
      const quantityElement = item.querySelector('.quantity');
      let quantity = parseInt(quantityElement.innerText);
      quantity++;
      quantityElement.innerText = quantity;
      updateTotalPrice();
    };
  
    // Function to decrease quantity
    const decreaseQuantity = (item) => {
      const quantityElement = item.querySelector('.quantity');
      let quantity = parseInt(quantityElement.innerText);
      if (quantity > 0) {
        quantity--;
        quantityElement.innerText = quantity;
      }
      updateTotalPrice();
    };
  
    // Function to delete an item
    const deleteItem = (item) => {
      item.remove();
      updateTotalPrice();
    };
  
    // Function to like an item
    const toggleLike = (item) => {
      const heartIcon = item.querySelector('.fa-heart');
      heartIcon.classList.toggle('liked');
    };
  
    // Adding event listeners to each product card
    cartItems.forEach(item => {
      // Event listener for increase button
      item.querySelector('.fa-plus-circle').addEventListener('click', () => increaseQuantity(item));
  
      // Event listener for decrease button
      item.querySelector('.fa-minus-circle').addEventListener('click', () => decreaseQuantity(item));
  
      // Event listener for delete button
      item.querySelector('.fa-trash-alt').addEventListener('click', () => deleteItem(item));
  
      // Event listener for heart (like) button
      item.querySelector('.fa-heart').addEventListener('click', () => toggleLike(item));
    });
  
    // Initial update of the total price
    updateTotalPrice();
  });
  