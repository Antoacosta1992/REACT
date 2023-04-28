import {useMemo, useState} from 'react';
import {useCounter} from '../hooks';


const heavyStuff = (iterationNumber = 100) => {
    for(let i = 0; i < iterationNumber; i++) 
    {console.log('Ahí vamos'); }

    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

    const {counter, increment} = useCounter(4000);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{counter}</small>  </h1>
            <hr />
            <h4>{memorizedValue}</h4>
            
            <button
                className="btn btn-primary"
                onClick={() => increment()}>
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)} 
            </button>      
        </>
    )
}

//useMemo lo usamos para memorizar un valor, nos es util si queremos tenemos alguna función que sea bastante pesada en la aplicación de 
//esta manera solo volvera a ser calculada si alguna de las dependencia cambia en lugar de hacerlo con cada re-renderización. 
//Sin embargo esto significa que debas hacer uso de este hook para cualquier cosa ya que puede degradar el rendimiento de la aplicación 
//si no se usa adecuadamente, asi que solo usalo si notas que aporta una mejora en el rendimiento.

//useEffect lo usamos para codigo que ejecutado luego de cada renderización y que tengan efectos secundarios en la aplicación, como timers,
// requests a endpoints, etc. tambien puedes establecer un array de dependencias para establecer cuando quieres que dicho codigo vuelva a 
//ser ejecutado.