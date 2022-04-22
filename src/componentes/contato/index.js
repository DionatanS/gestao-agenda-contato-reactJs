
import './contato.css'

export default function Contato({ contato, handleRemover}){
    const { _id: id, nome, telefone, dataNascimento, endereco, email } = contato

    return(
        <div className="wrap-contato">
            <div className="wrap-nome-contato">
                <span className="nome-contato">{nome}</span>
                <button className="remover-contato" onClick={() => handleRemover(id)}>Remover Contato</button>
            </div>

            <div className="wrap-informacoes">
                <div className="wrap-telefone-data-nascimento-contato">
                    <p className="telefone-contato">{telefone}</p>
                    <p className="data-nascimento-contato">{dataNascimento}</p>
                </div>

                <div className="wrap-endereco-email-contato">
                    <p className="endereco-contato">{endereco}</p>
                    <p className="email-contato">{email}</p>
                </div>
            </div>
            
        </div>
    )
}