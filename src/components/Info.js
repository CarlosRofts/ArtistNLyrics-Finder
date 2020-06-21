import React from 'react'
import { Card,  Accordion,Button} from 'react-bootstrap';

const Info = ({ info }) => {
    if (Object.keys(info).length === 0) return null //conditional component
    const { strArtistThumb, strGenre, strBiographyES } = info

    return (
        <Card className="bg-dark">
            <Card.Img variant="top" className=" border rounded  w-50 mx-sm-auto mx-md-0" src={strArtistThumb} alt="Logo" />
            <Card.Body>
                <Card.Title className="font-weight-bolder mb-4" style={{fontSize:"2em"}}>Información del Artista</Card.Title>
                <Card.Text>
                    <Button className="mx-2" variant="secondary" href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i style={{fontSize:"2em"}} className="fab fa-facebook"></i>
                    </Button>
                    <Button className="mx-2"variant="secondary" href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i  style={{fontSize:"2em"}} className="fab fa-twitter"></i>
                    </Button>
                    <Button className="mx-2" variant="secondary" href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i  style={{fontSize:"2em"}} className="fab fa-lastfm"></i>
                    </Button>
                </Card.Text>
                <Card.Text>
                    <p>Genero: {strGenre}</p>


                    <Accordion>
                        <Accordion.Toggle as={Button} className="btn-secondary" eventKey="0">
                             <i>Biografía</i>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p>{strBiographyES}</p>
                            </Card.Body>
                        </Accordion.Collapse>

                    </Accordion>

                </Card.Text>

            </Card.Body>
        </Card>
    );
}


export default Info;
