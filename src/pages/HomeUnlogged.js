import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomeUnlogged(){

    return(
        <div className="homeUnlogged">
            <Container className="my-5">
                <div className="">
                    <h1 class="text-start">Factory Mind here is, <br/> Your place</h1>
                    <p class="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut nisl vitae ligula molestie laoreet in non velit. Mauris tempus neque erat, eget placerat neque tincidunt vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                   
                   <Row>
                    <Col sm={12} md={12} lg={10} xl={10} >
                    <Row className=" justify-content-center" >
                        <Col sm={10} md={10} lg={3} xl={3} className=" m-auto mb-3  pb-0 px-3 py-2 rounded bg-danger text-center text-white">
                            <p className="h4 mb-4">ESTUDANTES</p>
                            <Button className="h3 w-100 mb-4" variant="light">CADASTRAR</Button>
                            
                            <p><Link className="text-white text-decoration-none " to="/login">Ou entre</Link></p>
                        </Col>
                        <Col sm={10} md={10} lg={3} xl={3} className=" m-auto   mb-3  pb-0 px-3 py-2 rounded bg-primary text-center text-white">
                            <p className="h4 mb-4">ESTUDANTES</p>
                            <Button className="h3 w-100 mb-4" variant="light">CADASTRAR</Button>
                            
                            <p><Link className="text-white text-decoration-none " to="/login">Ou entre</Link></p>
                        </Col>
                        <Col sm={10} md={10} lg={3} xl={3} className="  m-auto  mb-3  pb-0 px-3 py-2 rounded bg-warning text-center text-white">
                            <p className="h4 mb-4">ESTUDANTES</p>
                            <Button className="h3 w-100 mb-4" variant="light">CADASTRAR</Button>
                            
                            <p><Link className="text-white text-decoration-none " to="/login">Ou entre</Link></p>
                        </Col>                    </Row>

                    </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
