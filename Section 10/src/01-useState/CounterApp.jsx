import {useState} from 'react';

export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });
//Cuando tengo un objeto en useState tengo que preservar los valores
//anteriores especialmente si quiero cambiar una propiedad
//Cuando llamo al serCounter estamos diciendo que el objeto va ser el nuevo valor del state.
//y cuando se redibuja, extramos la informacion de ahi(*)
    const {counter1, counter2, counter3} = state;

  return (
    //(*)
    <>
        <h1>Counter1: {counter1}</h1>
        <h1>Counter2: {counter2}</h1>
        <h1>Counter3: {counter3}</h1>

        <hr />

        <button 
            className="btn" 
            onClick={ 
                () => setCounter({
                    ...state,
                    counter1: counter1 + 1,
                })
            }>+1</button>
          
    </>
  )
}