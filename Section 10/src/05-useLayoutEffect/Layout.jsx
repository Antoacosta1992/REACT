import {useCounter, useFetch} from '../hooks';
import {LoadingQuote, Quote} from '../03-examples';

export const Layout = () => {

    const {counter, increment} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const {author, quote} = !!data && data[0];
    
    return (
        <>
            <h1>BreakingBad Frases</h1>
            <hr />

            {
                isLoading?
                 <LoadingQuote />
                 : <Quote author={author} quote={quote} />
            }
                      
            <button 
                className="btn btn-primary"
                disabled={isLoading}
                onClick={ () => increment() }>
                Next quote
            </button>

        </>
    )
}
//Usando useEffect:
//1) Se setean las props y estados en memoria
//2) Se renderiza el componente
//3) Se ejecutan los cambios escritos dentro del useEffect
//4) El componente se renderiza por segunda vez con los cambios de estado que realizó el useEffect

//Usando useLayoutEffect:
//1) Se setean las props y estados en memoria
//2) Se ejecutan los cambios escritos dentro del useLayoutEffect
//3) Se renderiza el componente con todas sus props y los cambios de estado que realizó el useLayoutEffect