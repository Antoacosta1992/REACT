import PropTypes from 'prop-types';

//import { Fragment } from 'react';

//Si fuera una funcion async saltaría error
//porque una promosa es un objeto, y ese objeto es lo que esta serielizando
// o imprimiendo en <h1>{ getResult()}</h1>
//const getResult = (a,b) => {
//    return a + b;
//}

export const FirstApp = ({
  title, 
  subTitle= 'La vida es bella',
  name
}) => {
  ////props es info que fluye desde el componente padre hacia
  //*console.log(props);
  /////este componente hijo.

//si el titulo no existe, entonces throw "error"

  return (
    <>
    <h1>{title}</h1>
    {/* <code>{JSON.stringify (newMessage)}</code> */}
    <p>{subTitle}</p>
    <p>{name}</p>
    </>
  )

  }

  FirstApp.propTypes= {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
  }

FirstApp.defaultProps ={
  title: 'No hay ningún titulo',
  subTitle: 'No hay subtitulo',
  name: 'Antonela Acosta',
}