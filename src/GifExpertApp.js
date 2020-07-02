import React, {useState}  from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GifExpertApp = () => {

//const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
// quito la const porque no es dinamica usaremos el useState


 const [categories, setCategories] = useState(['One Punch']);

// const handleAdd = () => {
// //setCategories([...categories, 'HunterXHunter']);

// // o se podria agregar asi:
// // el cats es el callback de la funcions
// setCategories (cats => [...cats, 'HunterXHunter' ]);
// };
 
    return (
<> 
    <h2> GifExpertApp  de MEMS</h2>
    <AddCategory setCategories={setCategories}/>
    <hr></hr>
{/* <button onClick={handleAdd}>Agregar</button> */}
    <ol>
        { 
        categories.map(category => 
            //  <li key={category }> {category}</li>
            // ahora ponemos aqui el componente GifGrid
            <GifGrid 
            key= {category}
            category={category}/>   
        )
        }
    </ol>

</>
);
    
}
export default GifExpertApp;

