import React from "react";
import { Alert, Container,Row,Col } from "react-bootstrap";

export default class Mensagem extends React.Component{
   render(){ return (
    <Row className="m-auto mt-5">
   <Col className="m-auto " xs={12} sm={12} md={12} lg={10} xl={10}>    
            <Alert className={this.props.type}>
            {this.props.msg}
        </Alert>    
    </Col>
    </Row>

    )}
}