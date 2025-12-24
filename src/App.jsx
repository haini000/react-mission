import './App.css'
import Card from './components/Card'
import ProductCard from './components/ProductCard';

function App() {
  const product = {
    name: "무선키포드",
    price: 39000,
    brand: "EZTECH"
  }

  const products = [
    { id: 1, name: "무선 키보드", price: 39000, brand: "EZTECH" },
    { id: 2, name: "무선 마우스", price: 29000, brand: "EZTECH" },
    { id: 3, name: "모니터", price: 199000, brand: "EZTECH" }
  ];

  const mapList = products.map(product => <ProductCard name={product.name} price={product.price} brand={product.brand} />)

  return (
    <main>
      <Card
        name={product.name}
        price={product.price}
        brand={product.brand}
      />

      <hr />

      {mapList}

    </main>
  );

}

export default App
