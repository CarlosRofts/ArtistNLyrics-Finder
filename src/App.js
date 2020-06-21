import React,{Fragment,useState , useEffect} from 'react';
import Formulario from './components/Formulario'
import Cancion from './components/Cancion'
import Info from './components/Info'
import SocialLinks from './components/SocialLinks'  
import axios from 'axios'
import { Container,Row,Col } from 'react-bootstrap';
import  './scss/style.scss'
// API Resources
// https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search?console=1
// https://www.theaudiodb.com/api_guide.php
  
function App() {

  // state
  const[busquedaLetra,guardarBusquedaLetra] = useState({
    artista : "metallica",
    cancion : "one"
  })

  const[letra,guardarLetra]=useState('')
  const [info,guardarInfo]=useState({})

  // API
  useEffect(() => {
    // Bloqueo de peticiones
    if(Object.keys(busquedaLetra).length === 0 ) return //cuando no hay nada en el state se bloquean las peticiones
    // 
    const consultarApiLetra = async () => {
       let {artista ,cancion} = busquedaLetra //destructuring
       const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}` 
       const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      //  For testing & debug
      //  const resultado = await axios(url) 
      // //  console.log('LETRA: ',resultado)
      //  guardarLetra(resultado.data.lyrics)

       const[letra,informacion] = await Promise.all([ 
        // ambas consultas iniciaran al mismo tiempo. 
          axios(url),
          axios(url2)
       ])
      //  Set State
       guardarLetra(letra.data.lyrics)
       guardarInfo(informacion.data.artists[0])
    }
    consultarApiLetra();
  },[busquedaLetra]);


  return (
      <Fragment>
        <SocialLinks/>
        <Formulario
          guardarBusquedaLetra={guardarBusquedaLetra}
        />
        <Container className="bg-dark text-white " >
          <Row>
            <Col sm="12" md="6">
                <Info
                  info={info}
                />
            </Col>
            <Col>
              <Cancion
                letra={letra}
              />
            </Col>
          </Row>
        </Container>
      </Fragment>
  );
}
export default App;
