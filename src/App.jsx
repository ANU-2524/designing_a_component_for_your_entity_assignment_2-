import ProductCard from './components/ProductCard.jsx';
import './App.css';

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99.99",
    image: "https://m.media-amazon.com/images/I/6165TeNkpPL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 2,
    name: "Gaming Headset",
    price: "$129.99",
    image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY1000_.jpg",
  },
  {
    id: 3,
    name: "Noise Cancelling Headphones",
    price: "$199.99",
    image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UY1000_.jpg",
  },
  
];

const App = () => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    padding: '16px',
  };

  return (
    <div style={gridStyle}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default App;
