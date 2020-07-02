//import React, {useState, useEffect} from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';
// nuestro api_key
// kjvwtoZ9DmKg5XNqHXD0McpjHyVMgGlp
export const GifGrid = ({category}) => {
//const state =     useFetchGifs();
// voy a desestructurar state 
 const {data: images, loading} = useFetchGifs(category);
console.log(loading);
//console.log(data);
    // lo pongo comentado, para continuar, era solo para dar el ejemplo de la necesidad del useEffect
    //const [count, setCount] = useState(0);
// const [images, setImages] = useState([]);
//   useEffect( () => {
//     // getGifs(category)
//     //   .then(imgs => setImages(imgs));
//       // aqui podemos recortar eso  y ponerla mas sencilla       Recordarán ustedes que tenemos una función que únicamente será su primer argumento Es mandado como primer argumento a la función que está aquí adentro Podríamos borrar esto y dejarlo de esta manera, y sería exactamente lo mismo
//           getGifs(category)
//       .then( setImages);

//    }, [category]);  // ponemos category para que no dé el warning en la consola de useEffect
    
 //getGifs();
    return (
        <>
        <h3 className="card animate__animated animate__fadeIn">{category}</h3>
        {/* {loading ? 'cargando...' : 'data Cargada'} */}
        {loading && <p className="card animate__animated animate__flash">Loading</p>}
<div className="card-grid">
     {
      images.map(img => (
        <GifGridItem
        key={img.id}
        { ...img}/> //   <li key={img.id}> {img.title} </li>
      ))   
     }
        </div>
        </>
    )
}
