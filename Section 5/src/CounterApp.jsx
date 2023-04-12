import { useState } from 'react';
import PropTypes from 'prop-types'

export const CounterApp =({value = 10}) => {

    const [counter, setCounter] = useState ( value );

    const handleAdd = () => {
        //console.log(event)
        setCounter(counter +1);
        //setCounter ( (c) => c + 1) segunda manera.
    }
    const handleAdd1 = () =>{
        setCounter(counter-1);
    }

    const handleAdd2 = () =>{
        setCounter(value);
    }

    return (
       <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleAdd1}> -1 </button>
            <button aria-label="btn-reset" onClick={handleAdd2}> Reset </button>

       </>
    ); 
}


//cuando una funcion recibe un evento y ese evento se lo pasa directamente a otra
//funcion podemos obviar mandar la referencia, borrar esa funcion, 
//inclusive borrar el evento y solo mandamos la referencia a esa funcion.
// <button onClick={ (event ) => handleAdd(event)}> 
// <button onClick={handleAdd}>
//TAREA VIDEO 43
CounterApp.propTypes= {
    Value: PropTypes.number.isRequired}

