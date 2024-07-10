import React from 'react';
import './Home.css';
import Product from './Product';
import amazonBanner from './images/amazon_banner.jpg';
import laptop from './images/laptop.jpg';
import ipad from './images/ipad.jpg';
import model_s from './images/model_s.jpg';
import smart_speaker from './images/smart_speaker.jpg';
import smart_tv from './images/smart_tv.jpg';
import pc from './images/pc.jpg';

function Home() {
  const products = [
    {
      id: "123343",
      title: "ASUS Vivobook S 15 laptop; Copilot",
      price: 230,
      image: laptop,
      rating: 3
    },
    {
      id: "1233435",
      title: "Apple iPad (10th Generation): with A14 Bionic chip",
      price: 130,
      image: ipad,
      rating: 3
    },
    {
      id: "12334367",
      title: "Sunshade for Tesla 2024 Model 3 Highland, Glass Roof Sunshade",
      price: 35560,
      image: model_s,
      rating: 3
    },
    {
      id: "123343890",
      title: "Amazon Echo Pop | Full sound compact smart speaker",
      price: 450,
      image: smart_speaker,
      rating: 3
    },
    {
      id: "123343123789",
      title: "INSIGNIA 32-inch Class F20 Series Smart HD",
      price: 30,
      image: smart_tv,
      rating: 3
    },
    {
      id: "1233452343",
      title: "CyberpowerPC Gamer Master Gaming PC, AMD Ryzen 5",
      price: 30,
      image: pc,
      rating: 3
    },
  ];

  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src={amazonBanner} alt='amazon_banner' />
        
        <div className='home__row'>
          {products.slice(0, 2).map(product => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
          ))}
        </div>

        <div className='home__row'>
          {products.slice(2, 5).map(product => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
          ))}
        </div>

        <div className='home__row'>
          <Product
            key={products[5].id}
            id={products[5].id}
            title={products[5].title}
            price={products[5].price}
            image={products[5].image}
            rating={products[5].rating}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
