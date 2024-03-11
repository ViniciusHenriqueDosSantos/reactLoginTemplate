import { BaseReturn } from "./BaseReturn";
import Mensagem from "./Mensagem";
import Token from "./Token";

export default class Api{

    constructor(){
        this.base="api"
    }
    static async logar(objeto){
           
        try{
            var json = JSON.stringify(objeto);
            var options = {
                method:'POST',
                headers:{'Content-Type':'application/json', 'Authorization':"token"},
                body: json
            }
            
            Token.setToken({'nome':"Vinicius Henrqiue dos santos",'email':'vini@email.com','id':2})
            return new BaseReturn(true, 'Login efetuado com sucesso!',()=>{return(<Mensagem type="alert-danger" msg={this.msg}/>)});
           
        }catch(e){
            var error = {
                'success':false,
                'msg':"Houve um erro ao efetuar o Login, tente novamente mais tarde!",
                'elementMsg':()=>{return(<Mensagem type="alert-danger" msg={this.msg}/>)}
    
            }
            return error;
        }
    }
   static async  cadastrar(objeto){
        
        try{
        var json = JSON.stringify(objeto);
        var options = {
            method:'POST',
            headers:{'Content-Type':'application/json', 'Authorization':"token"},
            body: json


        }
        /*
        fetch(this.base+"/cadastrar",options).then(Response=>Response.json().then(data=>{

            return  "dgdfgfsdfsd";
        }))*/
        return {
            'success':true,
            'msg':"Cadastro realizado com sucesso!",
            'element':<Mensagem type="alert-success" msg="Cadastro realizado com sucesso!"/>
        }
    }catch(e){
        var error = {
            'success':false,
            'msg':"Houve um erro ao cadastrar, tente novamente mais tarde!",
            'element':<Mensagem type="alert-danger" msg="Houve um erro ao cadastrar, tente novamente mais tarde!"/>

        }
        return error;
    }
    }
    static async  recuperarSenha(objeto){
        
        try{
        var json = JSON.stringify(objeto);
        var options = {
            method:'POST',
            headers:{'Content-Type':'application/json', 'Authorization':"token"},
            body: json


        }
        /*
        fetch(this.base+"/cadastrar",options).then(Response=>Response.json().then(data=>{

            return  "dgdfgfsdfsd";
        }))*/
        return {
            'success':true,
            'msg':"Cadastro realizado com sucesso!",
            'data':{'cod':123123},
            'elementMsg':<Mensagem type="alert-success" msg="Código enviado!"/>
        }
    }catch(e){
        console.log(objeto)
        var error = {
            'success':false,
            'msg':"Houve um erro ao cadastrar, tente novamente mais tarde!",
            'elementMsg':<Mensagem type="alert-danger" msg="Houve um erro ao recuperar a senha, tente novamente mais tarde!"/>

        }
        return error;
    }
    }
}