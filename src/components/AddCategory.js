import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories})=>{

    const [inputValue, setInputValue] = useState('')

    const handleSetInputValue = (e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
            
        e.preventDefault()

        if(inputValue.trim().length>2){
            setCategories(cats=>[inputValue, ...cats])
        }

        setInputValue('')
    }

    return(
        <form onSubmit={handleSubmit}>    
            <input value={inputValue} onChange={handleSetInputValue} type="text"/>
        </form>
    ) 
}

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}