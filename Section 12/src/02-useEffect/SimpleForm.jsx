import {useEffect, useState} from 'react';
import {Message} from './Message';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Antonela',
        email: 'antonela@google.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState, [name]: value
        });
    }
//El useEffect tiene 3 partes, el callback(funcion de retorno que tiene el cuerpo y la limpieza)
//y por ultimo el arreglo de dependencias.

    useEffect( () => {
        // console.log('useEffect called!');
    }, []);
    
    useEffect( () => {
        // console.log('formState changed!');
    }, [formState]);

    useEffect( () => {
        // console.log('email changed!');
    }, [ email ]);
//No se recomiendo useEffect sin ninguna dependecia.
    

    return (
        <>
            <h1>Formulario Simple</h1> 
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="antonela@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />


            {
                (username === 'Antonela2') && <Message />
            }

        </>
    )
}