import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

const [inputValue, setinputValue] = useState('');
const handleInputChange = (e) => {
   // console.log(e.target.value)
    setinputValue(e.target.value)
}
const handleSubmit = (e) => {
     e.preventDefault();
     if (inputValue.trim().length>2) {
        setCategories (cats => [inputValue, ...cats]);
        console.log('submit heecho');
        setinputValue('');
     }

}
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            {/* <h1>{inputValue}</h1> */}
            <input
            type="text"
            value={inputValue}
            // onChange={(e) => console.log(e) }
            onChange={handleInputChange}
            ></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories:  PropTypes.func.isRequired
}