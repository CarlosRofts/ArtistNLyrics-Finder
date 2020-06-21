import React,{useState} from 'react'
import Alerta from './AlertError'
import { Form,Button, Container,Row,Col } from 'react-bootstrap';


const Formulario = ({guardarBusquedaLetra}) => {

    const[ busqueda , guardarBusqueda ]=useState({
        artista:'',
        cancion: ''
    })
    const[error,guardarError]=useState(false)

    // fn leer texto de inputs 
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    const {artista,cancion} = busqueda //destructuring para simplificar los attr values

    // onSubmit Fn | consultar apis
    const buscarInformacion = e => {
        e.preventDefault();
        if( artista.trim() === '' || cancion.trim() === '' ){
            guardarError(true) //bloqueo a las peticiones a la api y mostramos alert
            return
        }
        guardarError(false) //se puede consultar la api
        // pasar a app.js
        guardarBusquedaLetra(busqueda)
    }


    return (

            <div className="bg-dark">
                <Container fluid >
                    <Row>
                        <Form 
                            className="col-12 mb-5 pt-5 pb-2 text-white"
                            onSubmit={buscarInformacion}
                        >
                            <fieldset className=" px-5">
                                < h1 className="text-center my-5 pb-5 " style={{fontFamily:"Pacifico" , color:"rgb(196, 196, 196) " , letterSpacing:"3px"}}>
                                    Buscador de Letras 
                                </h1>
                                <Row>
                                    <Col>
                                        <Form.Group >
                                            <Form.Label>Artista</Form.Label>
                                            <Form.Control 
                                                placeholder="Escribe el nombre del artista"
                                                className=""
                                                name="artista"
                                                onChange={actualizarState}
                                                value={artista}
                                                autocomplete="off"
                                            />
                                            
                                        </Form.Group>
                                    </Col>
    
                                    <Col sm="12" md="6" >
                                        <Form.Group >
                                            <Form.Label>Canción</Form.Label>
                                            <Form.Control 
                                                placeholder="Escribe el nombre de la canción"
                                                name="cancion"    
                                                onChange={actualizarState}
                                                value={cancion}
                                                autocomplete="off"
                                            />
                                            
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button 
                                    variant="secondary" 
                                    size="lg"
                                    type="submit"
                                    className="float-right col-md-2 col-sm-5"
                                >
                                            Buscar
                                </Button>
                            </fieldset>
    
                        </Form>

                        {error ?
                             <Alerta
                                message="Llena todos los campos"
                                margin="mb-5 mx-auto "
                                guardarError={guardarError}

                             />
                              : null
                        }
                    </Row>
                </Container>
            </div>

    );
}
 
export default Formulario;