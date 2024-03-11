import { useRef, useState } from "react";
import { Row,Col,Container, Form, FormControl, FormGroup, FormLabel, InputGroup, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Mensagem from "../components/Mensagem";
import Api from "../components/Api";

export default function RecuperacaoDeSenha() {
    const[index,setIndex] = useState(0)
    const contato = useRef()
    const modo = index ==0 ? "email" : index==1 && "telefone"
    const[alert,setAlert] = useState();
    const[cod,setCod] = useState();
    const tentativa = useRef()
    const recuperar= async(e)=>{
        e.preventDefault();
        try{
            var data =  await Api.recuperarSenha(
                {
                    'contato':contato.current.value,
                    'modo':modo
                
                }
                )
            setAlert(data.elementMsg)
            if(data.success){
                setIndex(2)
                setCod(data.data.cod)
            }
        }catch(err){
            setAlert(<Mensagem type="alert-danger" msg="Houve um erro ao enviar o código, tente novamente mais tarde!" />)

        }
    }
    return(
        <Row className="w-100 m-auto">
             {alert!=null&&alert}
            <Col className="m-auto " xs={12} sm={10} md={8} lg={4} xl={4}>       
             

                <Carousel activeIndex={index} >
                    <Carousel.Item>
                        <Container className="shadow my-5 px-5 py-3">
                        <Form method="POST"  onSubmit={async (e)=>{
                            recuperar(e)
                        }}>
                            <FormGroup>
                                <InputGroup>
                                    <FormLabel className="w-100 h5 mb-5 ">Forneça seu email para recuperação da Conta</FormLabel>
                                    <FormControl ref={contato} required type="email" placeholder="Insira seu e-mail"/>
                                </InputGroup>
                                <InputGroup className="mb-5">
                                    <Button type="submit" variant="secondary" className="mt-4 w-100">Enviar Código</Button>
                                </InputGroup>
                                <a  className="mt-5" onClick={()=>{setIndex(1)}}>Deseja fazer por meio do número de telefone?</a>
                            </FormGroup>

                        </Form>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Container className="shadow my-5 px-5 py-3">
                        <Form method="POST" onSubmit={async (e)=>{
                            recuperar(e)
                        }}>
                            <FormGroup>
                                <InputGroup>
                                    <FormLabel className="w-100 h5 mb-5 ">Forneça seu telefone para recuperação da Conta</FormLabel>
                                    <FormControl  ref={contato}   type="tel" required placeholder="Insira seu telefone"/>
                                </InputGroup>
                                <InputGroup className="mb-5">
                                    <Button type="submit" variant="secondary" className="mt-4 w-100">Enviar Código</Button>
                                </InputGroup>
                                <a  className="mt-5" onClick={()=>{setIndex(0)}}>Deseja fazer por meio do endreço de Email?</a>
                                
                            </FormGroup>

                        </Form>
                        </Container>
                    </Carousel.Item>
                    

                    <Carousel.Item>
                    <Container className="shadow my-5 px-5 py-3">
                        <Form method="POST" onSubmit={async (e)=>{
                            e.preventDefault()
                            if(tentativa == cod){
                                
                                setAlert(<Mensagem type="alert-danger" msg="Código válido" ></Mensagem>)
                                Api.logar({});

                            }else{
                                setAlert(<Mensagem type="alert-danger" msg="Código inválido" ></Mensagem>)
                            }
                        }}>
                            <FormGroup>
                                <InputGroup>
                                    <FormLabel className="w-100 h5 mb-5 ">Insira o código enviado</FormLabel>
                                    <FormControl  ref={tentativa}    required placeholder="Insira o código"/>
                                </InputGroup>
                                <InputGroup className="mb-5">
                                    <Button type="submit" variant="secondary" className="mt-4 w-100">Enviar Código</Button>
                                </InputGroup>
                                <a  className="mt-5" onClick={()=>{setIndex(0)}}>Deseja tentar de novo?</a>
                                
                            </FormGroup>

                        </Form>
                        </Container>
                    </Carousel.Item>
                </Carousel>
                     
            </Col>
       
        </Row>
        
    )
}
