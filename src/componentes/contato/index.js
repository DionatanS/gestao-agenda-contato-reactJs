import './contato.css'

export default function Contato(props){
    return(
        <div className="wrap-contato">
            <div className="wrap-nome-contato">
                <span className="nome-contato">{props.nome}</span>
                <button className="remover-contato">Remover Contato</button>
            </div>

            <div className="wrap-informacoes">
                <div className="wrap-telefone-data-nascimento-contato">
                    <p className="telefone-contato">{props.telefone}</p>
                    <p className="data-nascimente-contato">{props.datanascimento}</p>
                </div>

                <div className="wrap-endereco-email-contato">
                    <p className="endereco-contato">{props.endereco}</p>
                    <p className="email-contato">{props.email}</p>
                </div>
            </div>
            
        </div>
    )
}