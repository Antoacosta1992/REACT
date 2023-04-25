import { useState } from 'react';
import { useCounter } from '../hooks'
import { Small } from './Small';

export const Memorize = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true)

    return (
        <>
            <h1>Counter: <Small value={counter} />  </h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={() => increment()}>
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)} >
                Show/Hide {JSON.stringify(show)} 
            </button>
        
        </>
    )
}
//el segundo argumento a React.memo, es un callback que le permita al desarrollador determinar cuándo el componente debe ser generado 
//de nuevo o usar el que ya tiene en memoria, es un caso de uso bien específico, que usualmente con el simple memo se resuelve el 99% de 
//los casos ya que muy pocas ocasiones cuando una prop cambia de un componente memorizado, queremos conservar el componente que ya teníamos 
//en memoria utilizando ese segundo arguemnto.