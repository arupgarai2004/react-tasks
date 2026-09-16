import { useMemo, useState } from "react";


export default function ProductList() {
    const [filter, setFilter] = useState('');
    const [count, setCount] = useState(0);
    
    const products = [
      { id: 1, name: 'Wireless Mouse', price: 25 },
      { id: 2, name: 'Mechanical Keyboard', price: 85 },
      { id: 3, name: 'USB-C Hub (5-in-1)', price: 45 },
      { id: 4, name: '27" 4K Monitor', price: 329 },
      { id: 5, name: 'Laptop Stand (Aluminum)', price: 39 },
      { id: 6, name: 'Noise-Cancelling Headphones', price: 199 },
      { id: 7, name: 'Bluetooth Speaker', price: 59 },
      { id: 8, name: 'External SSD 1TB', price: 129 },
      { id: 9, name: 'Webcam 1080p', price: 49 },
      { id: 10, name: 'Portable Charger 10000mAh', price: 29 },
      { id: 11, name: 'Smartwatch Basic', price: 149 },
      { id: 12, name: 'Ergonomic Office Chair', price: 249 },
    ];


    const filteredProducts = useMemo(() => {
        return products.filter(product =>  
             product.name.toLowerCase().includes(filter.toLowerCase())
        );
       
    }, [filter]);


    return (
    <div>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search product"
      />
      <button
        type="button"
        onClick={() => {
          console.log('ProductList: increment clicked, before:', count);
          setCount((prev) => prev + 1);
        }}
      >
        Count: {count}
      </button>

      {filteredProducts.map((product) => (
        <p className="filterResults" key={product.id}>{product.name}</p>
      ))}
    </div>
  );
}

