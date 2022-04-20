import { useState } from 'react';
import './login.css'

export default function Login(){

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

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
              <button className="login-form-btn">Login</button>
            </div>        

          </form>
        </div>
      </div>
    </div>
    )
}
