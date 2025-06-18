import React from 'react';
import './PurchaseActions.css'; // Import the CSS file

const PurchaseActions = () => {
  const productDetails = { // Example product details
    name: 'Apple iPhone 14 (128 GB) - Azul',
    id: 'MCO19615339',
    price: 2699900,
    currency: 'COP'
  };

  const handleBuyNowClick = () => {
    console.log(`Attempting to buy now: ${productDetails.name} (ID: ${productDetails.id})`);
    // In a real app, this would likely redirect to a checkout page
    // or open a payment modal, passing along productDetails.
    alert(`Redirigiendo a la pasarela de pago para ${productDetails.name}.`);
  };

  const handleAddToCartClick = () => {
    console.log(`Adding to cart: ${productDetails.name} (ID: ${productDetails.id})`);
    // In a real app, this would update a global cart state or make an API call.
    alert(`${productDetails.name} ha sido agregado al carrito (simulado).`);
  };

  return (
    <div className="purchase-actions-component">
      {/* The existing <p>PurchaseActions Component</p> can be removed or commented out */}
      <button className="buy-now-button" onClick={handleBuyNowClick}>
        Comprar ahora
      </button>
      <button className="add-to-cart-button" onClick={handleAddToCartClick}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default PurchaseActions;
