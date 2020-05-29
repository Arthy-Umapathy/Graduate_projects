import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Product from "./Product"
import productData from "./ProductData"

function MyApp() {

  //using map function to insert values 
  const productComponents = productData.map(item=><Product key={item.id} product={item}/>)
  return (
    <div>
      <Header />
      <Body />
      <Footer />
      {productComponents}
    </div>
  );
}

export default MyApp;
