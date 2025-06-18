import React, { useState } from 'react';
import './ProductGallery.css'; // Import the CSS file

const ProductGallery = () => {
  const imageUrls = [
    // Using more specific placeholder images if possible, or more varied ones
    'https://via.placeholder.com/600x600.png/0000FF/FFFFFF?Text=iPhone+Main+View',
    'https://via.placeholder.com/600x600.png/FF0000/FFFFFF?Text=iPhone+Side+View',
    'https://via.placeholder.com/600x600.png/00FF00/FFFFFF?Text=iPhone+Back+View',
    'https://via.placeholder.com/600x600.png/FFFF00/000000?Text=iPhone+Screen+Detail',
    'https://via.placeholder.com/600x600.png/FF00FF/FFFFFF?Text=iPhone+In+Hand',
  ];

  const [selectedImage, setSelectedImage] = useState(imageUrls[0]);

  const handleThumbnailClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // Fallback if no images are provided
  if (!imageUrls || imageUrls.length === 0) {
    return <div className="product-gallery"><p>No images available.</p></div>;
  }

  return (
    <div className="product-gallery">
      <div className="main-image-container">
        <img src={selectedImage} alt="Selected Product View" className="main-image" />
      </div>
      <div className="thumbnail-container">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Product thumbnail ${index + 1}`}
            className={`thumbnail-image ${selectedImage === url ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(url)}
            // Removed inline styles as they are now in ProductGallery.css
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
