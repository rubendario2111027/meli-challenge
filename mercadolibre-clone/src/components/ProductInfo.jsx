import React from 'react';
import './ProductInfo.css'; // Import the CSS

const ProductInfo = ({ product }) => {
  // Fallback if product prop is not provided
  if (!product) {
    return (
      <div className="product-info-component">
        <p>Product information is currently unavailable.</p>
      </div>
    );
  }

  // Function to format currency (very basic)
  const formatPrice = (amount) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const discountPercentage = product.originalPrice && product.currentPrice
    ? Math.round(((product.originalPrice - product.currentPrice) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-info-component">
      <p className="condition-sold">
        {product.condition} | {product.soldQuantity}+ vendidos
      </p>
      <h1 className="product-title">{product.title}</h1>
      {product.rating && (
        <p className="rating">
          {product.rating} &#9733; <span>({product.opinions} opiniones)</span>
        </p>
      )}

      <div className="price-section">
        {product.originalPrice && product.originalPrice > product.currentPrice && (
          <span className="original-price">
            {formatPrice(product.originalPrice)}
          </span>
        )}
        <span className="current-price">
          {formatPrice(product.currentPrice)}
        </span>
        {discountPercentage > 0 && (
          <span className="discount">{discountPercentage}% OFF</span>
        )}
      </div>

      {product.installments && (
        <p className="installments">
          en {product.installments.quantity} cuotas de {formatPrice(product.installments.amount)}
          {product.installments.interestFree ? ' sin interés' : ''}
        </p>
      )}

      {product.ramOptions && product.ramOptions.length > 0 && (
        <div className="variant-selector">
          <label>Memoria RAM: {product.selectedRam}</label>
          <div className="options">
            {product.ramOptions.map((ram) => (
              <button
                key={ram}
                className={product.selectedRam === ram ? 'selected' : ''}
                onClick={() => console.log(`RAM selected: ${ram}`)} // Placeholder action
              >
                {ram}
              </button>
            ))}
          </div>
        </div>
      )}

      {product.colorOptions && product.colorOptions.length > 0 && (
        <div className="variant-selector">
          <label>Color: {product.selectedColor}</label>
          <div className="options">
            {product.colorOptions.map((color) => (
              <button
                key={color}
                className={product.selectedColor === color ? 'selected' : ''}
                onClick={() => console.log(`Color selected: ${color}`)} // Placeholder action
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      {product.keyFeatures && product.keyFeatures.length > 0 && (
        <div className="key-features">
          <h4>Lo que tienes que saber de este producto:</h4>
          <ul>
            {product.keyFeatures.slice(0, 5).map((feature, index) => ( // Show first 5 features
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
