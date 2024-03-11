export default class Token{
    static  getToken() {
        if(window.localStorage.getItem("data") != null){
            return JSON.parse(window.localStorage.getItem("data"))
        }else{
            return null
        }   
    }
    static  setToken(data) {
        window.localStorage.clear()
       window.localStorage.setItem("data",JSON.stringify(data))  
    }
}