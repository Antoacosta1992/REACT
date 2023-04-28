import {useState} from "react"
//La palabra Use es un standar en react para indentificar que es un Hook.
//Hook es una funcion, puede ser lo que necesite que regrese.

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState (initialValue)

    const increment = (value = 1) => {
        setCounter(counter + value); }
//el valor que mande, es la cantidad que voy a incrementar el contador.
    const decrement = (value = 1) => {

        setCounter(counter - value); }

    const reset = () => {
        setCounter(initialValue); }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
////Si en el hooks no exporto o no retorno nada, no hay manera
///de que el componente UseCounter pueda cambiar el valor del counter.
///Tengo que proporcionar de este Hooks (UseState) la forma en como quiero que
//este counter sea editado o cambie.
}