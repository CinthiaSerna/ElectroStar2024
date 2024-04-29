import React, { useState } from "react";
import { Header } from "./Header";
import { ProductList } from "./ProductList";

function Home() {

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProduct, setCountProducts] = useState(0);

  return (
    <>
      <Header 
      allProducts={allProducts} 
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProduct={countProduct}
      setCountProduct={setCountProducts}/>

      <ProductList 
      allProducts={allProducts} 
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProduct={countProduct}
      setCountProduct={setCountProducts}
      />
    </>
  );
}

export default Home;
