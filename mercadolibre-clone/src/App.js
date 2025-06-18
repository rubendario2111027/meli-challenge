import React from 'react';
import './App.css';

import NavigationBar from './components/NavigationBar.jsx';
import Breadcrumbs from './components/Breadcrumbs.jsx';
import ProductGallery from './components/ProductGallery.jsx';
import ProductInfo from './components/ProductInfo.jsx'; // Ensure this is imported
import PurchaseActions from './components/PurchaseActions.jsx';
import ShippingInfo from './components/ShippingInfo.jsx';
import SellerInfo from './components/SellerInfo.jsx';
import ProductDescription from './components/ProductDescription.jsx';
import ProductSpecifications from './components/ProductSpecifications.jsx';
import QuestionsAndAnswers from './components/QuestionsAndAnswers.jsx';
import Reviews from './components/Reviews.jsx';

// Define sample product data
const sampleProduct = {
  title: 'Apple iPhone 14 (128 GB) - Azul',
  condition: 'Nuevo',
  soldQuantity: 250, // Example value
  rating: 4.8,
  opinions: 201,
  originalPrice: 3999000,
  currentPrice: 2699900,
  installments: {
    quantity: 3,
    amount: 899967,
    interestFree: true,
  },
  ramOptions: ['4 GB', '6 GB'],
  selectedRam: '6 GB',
  colorOptions: ['Azul', 'Blanco estelar', 'Medianoche', 'Morado', 'Rojo'],
  selectedColor: 'Azul',
  keyFeatures: [
    'Memoria interna: 128 GB.',
    'Pantalla Super Retina XDR de 6.1 pulgadas.(1)',
    'Sistema avanzado de cámaras para tomar mejores fotos en cualquier condición de luz.',
    'Modo Cine ahora en 4K Dolby Vision de hasta 30cps.',
    'Modo Acción para lograr videos estables, aún con cámara en mano.',
    'Detección de Choques(2), una funcionalidad de seguridad que pide ayuda cuando tú no puedes.',
    'Batería para todo el día y hasta 26 horas de reproducción de vídeo.(3)'
  ],
};

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main className="product-page-container">
        <Breadcrumbs /> {/* Consider passing breadcrumb data here too eventually */}
        <div className="main-content">
          <div className="left-column">
            <ProductGallery /> {/* Eventually, image URLs could come from sampleProduct */}
          </div>
          <div className="right-column">
            {/* Pass the sampleProduct data to ProductInfo */}
            <ProductInfo product={sampleProduct} />
            <PurchaseActions /> {/* Could also receive product ID/details from sampleProduct */}
            <ShippingInfo />
            <SellerInfo />
          </div>
        </div>
        <ProductDescription /> {/* Could also receive description from sampleProduct */}
        <ProductSpecifications /> {/* Could also receive specs from sampleProduct */}
        <QuestionsAndAnswers />
        <Reviews />
      </main>
      <footer>
        <p>Basic Footer - MercadoLibre Clone</p>
      </footer>
    </div>
  );
}

export default App;
