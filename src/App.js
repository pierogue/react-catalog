
import CatalogHead from './head.js';
import CatalogBody from './body.js';
import Header from './header.js';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ion from './players/ion.jpg';
import crosley from './players/crosley.png';
import audio from './players/audio.png';
import project from './players/pro-ject.jpg';
import { TextField } from '@mui/material';


const content = [
  {
    name:"Crosley Cruiser Deluxe Black",
    price:510,
    amount:48,
    image: crosley,
    description:'Дизайн в формате винтажного чемоданчика из искусственной кожи .',
    isNew:false,
    discount:0.15
  },
  {
    name:"Audio-Technica AT-LP60X Bluetooth",
    price:1049,
    amount:23,
    image: audio,
    description:'Bluetooth адаптер для подключения внешней акустики.',
    isNew:true,
    discount:0.1
  },
  {
    name:'ION Mustang LP Red',
    price:819,
    amount:19,
    image: ion,
    description:'Фирменный дизайн Ford Mustang.',
    isNew:false,
    discount:0.2
  },
  {
    name:'Pro-Ject Primary E Phono Black',
    price:1349,
    amount:54,
    image: project,
    description:'Предустановленный MM-звукосниматель Ortofon OM.',
    isNew:true,
    discount:0.1
  }
];

function Catalog() {

  const [catalog, setCatalog] = useState(content);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  
  const sortTypeChange = (sortType)=>{
    let changedCatalog = catalog.slice();
    switch (sortType) {
      case 'name' :{
        changedCatalog.sort((a,b)=>{
          if(a.name > b.name){
            return 1;
          }
          if (a.name < b.name){
            return -1;
          }
          return 0;
        })
        setCatalog(changedCatalog);
        break;
      }
      case 'price' :{
        changedCatalog.sort((a,b)=>{
          if(a.price > b.price){
            return -1;
          }
          if (a.price < b.price){
            return 1;
          }
          return 0;
        })
        setCatalog(changedCatalog);
        break;
      }
      case 'amount' :{
        changedCatalog.sort((a,b)=>{
          if(a.amount > b.amount){
            return -1;
          }
          if (a.amount < b.amount){
            return 1;
          }
          return 0;
        })
        setCatalog(changedCatalog);
        break;
      }
      case 'new' :{
        changedCatalog.sort((a,b)=>{
          if(a.isNew > b.isNew){
            return -1;
          }
          if (a.isNew < b.isNew){
            return 1;
          }
          return 0;
        })
        setCatalog(changedCatalog);
        break;
      }
      case 'discount' :{
        changedCatalog.sort((a,b)=>{
          if(a.discount > b.discount){
            return -1;
          }
          if (a.discount < b.discount){
            return 1;
          }
          return 0;
        })
        setCatalog(changedCatalog);
        break;
      }
      default:
        break;
    }
  }

  const onSearchChangeInput = (e) => {
    setSearchQuery(e.target.value);  
  }

  const addToCart = (product)=>{
    const newCart = cart.slice();
    newCart.push(product);
    setCart(newCart);
  }

  return (
    <>
      <Header cart={cart}/>
      <TextField fullWidth type={'search'} label='Search' variant='outlined' onChange={onSearchChangeInput}/>
      <CatalogHead change={sortTypeChange}/>
      <CatalogBody addToCart={(product)=>addToCart(product)} content={catalog} searchQuery={searchQuery}/>
    </>
  );
}

export default Catalog;
