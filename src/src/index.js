import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="description" content="storefront online running shoes with free shipping"/>
          <meta name="keywords" content="Shoes, Runing, Running Shoes, Nike Shoes, New Balance Shoes"/>
           <title>Storefront</title>
          </Head>
           <PageTitle tagline="product specials" title="Storefront"/>
           <main className={pane}>
               {  products.map(product=> <ProductCard  key={product.uid} product={product}/>)}
           </main>
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


export async function getStaticProps(){
  const res = await fetch('https://class-storefront-default-rtdb.firebaseio.com/products.json');
  const productData = await res.json();
}
reportWebVitals();