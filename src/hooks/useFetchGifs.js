import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {

const [state, setState] = useState({
    data: [],
    loading: true
});
 
useEffect (() => {
  getGifs(category)
  .then(imgs => {
      // este setTimeout está de mas, es solo para mostrar el loading
      setTimeout(() => {
        setState ({
            data: imgs,
            loading: false
             });
      }, 0);
  })   
}, [category]);


return state; // { data:[]: true}
}
