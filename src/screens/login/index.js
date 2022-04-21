import axios from 'axios';
import { useState } from 'react';
import './login.css'

export default function Login(){
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    function authenticaLogin(){
      if(email || password === ""){
        console.log('Campo não preenchido!')
      }else{
        var options = {
          method: 'POST',
          url: 'http://localhost:3000/authenticate',
          headers: {'Content-Type': 'application/json'},
          data: {email: email, password: password}
        };
        
        axios.request(options).then(function (response) {
          console.log(response.data);
          //aui redireciona
        }).catch(function (error) {
          console.error(error);
        });
      }
    }

    return(
     <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form action="" className="login-form">
            <span className="login-form-title">Bem Vindo!</span>
            <span className="login-form-title">Gestão de Contatos</span>

            <div className="wrap-input">
              <input
               className={email !== "" ? 'has-val input' : 'input'}
               type="email"
               value={email} 
               onChange= {e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input 
              className={email !== "" ? 'has-val input' : 'input'}
              type="password" 
              value={password} 
              onChange= { e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button onClick={authenticaLogin} className="login-form-btn">Login</button>
            </div>        

          </form>
        </div>
      </div>
    </div>
    )
}

