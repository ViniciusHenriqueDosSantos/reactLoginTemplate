import { useRef, useState } from "react";
import { Alert, Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Api from "../components/Api";
import Token from "../components/Token";
export default function Login(){
    const email = useRef();
    const senha = useRef();
    const [alert,setAlert] = useState("");
    const [alertType,setAlertType] = useState("")
    return (

        <Row className="m-auto mt-5 w-100" >

        {alert!="" && <Alert className={alertType+" w-75 m-auto "}>{alert}</Alert>}
        <Col xs={10} sm={10} md={5} lg={5} xl={5} className="m-auto my-5  rounded shadow py-4" >
        <Form method="post" onSubmit={ async (e)=>{
            e.preventDefault();
          await Api.logar(
                {
                'senha':senha.current.value,
                'email':email.current.value
                }).then((data)=>{

                console.log(data)

                            if(!data.success){
                                setAlertType("alert-danger")                
                                setAlert(data.msg)

                            }else {
                                if(data.msg!=null){
                                setAlertType("alert-success")
                                setAlert(data.msg)
                                }
                            }


                })

               
            
            }
             } >
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormControl  ref={email} required type="email"/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Senha</FormLabel>
                    <FormControl  ref={senha} required type="password"/>
                </FormGroup>

                <FormGroup>
                    <Button type="submit" className="my-4 w-100" >Entrar</Button>
                </FormGroup>
            </Form>
            <p><Link to="/cadastro">Não possui uma conta?</Link></p>
            <Link to="/recuperacaodesenha">Esqueceu sua senha?</Link>
        </Col>
       
    </Row>

    )
    
}
