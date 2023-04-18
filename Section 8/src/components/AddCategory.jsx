
import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }
    
    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        //setCategories(categories=> [inputValue, ...categories])
        setInputValue('');
        onNewCategory(inputValue.trim());
        

    }



    return(
        <form onSubmit={ onSubmit } aria-label="form">
          <input
             type="text"
             placeholder="Buscar gifs"
             value={inputValue}
             onChange={ onInputChange }
        
          />
        </form>
    )
}
//Cada componente puede tener su propio estado, puede tener sus propios hooks
//Dentro del input estan las props.
//El form es el unico elemento que estoy regresando.