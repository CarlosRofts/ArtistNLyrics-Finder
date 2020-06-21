import React ,{Fragment} from 'react'

const Cancion = ({letra}) => {

    if(letra.length === 0 ) return null //conditional component

    return (
            <Fragment>
                <h1>Letra</h1> 
                <p className="letra font-weight-light" 
                    style={{letterSpacing:"2px" , lineHeight:"50px" , fontFamily:"Bellota"}}
                >{letra}</p>
            </Fragment>
         );
}
 
export default Cancion;