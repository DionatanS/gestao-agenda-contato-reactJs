import Contato from '../../componentes/contato'
import './agenda.css'

export default function Agenda(){
    return(
        <div className="container">
            <div className="wrap-agenda">
                <span className="title">Lista de Contatos</span>
                <div className="wrap-contatos">
                    <Contato/>
                    <Contato/>
                    <Contato/>
                    <Contato/>
                    <Contato/>
                    <Contato/>
                    <Contato/>
                    <Contato/>
                    <Contato/>
                    <Contato/>
                    <Contato/>
                    <Contato/>
                </div>
                <div className="wrap-btn">
                    <button className="adcionar-contato-btn">Adcionar Novo Contato</button>
                </div>
            </div>
        </div>
    )
}