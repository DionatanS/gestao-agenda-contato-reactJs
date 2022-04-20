import './contato.css'

export default function Contato(){
    return(
        <div className="wrap-contato">
            <div className="wrap-nome-contato">
                <span className="nome-contato">Dionatan da Silva</span>
                <button className="remover-contato">Remover Contato</button>
            </div>

            <div className="wrap-informacoes">
                <div className="wrap-telefone-data-nascimento-contato">
                    <p className="telefone-contato">(51)996098394</p>
                    <p className="data-nascimente-contato">18/11/1197</p>
                </div>

                <div className="wrap-endereco-email-contato">
                    <p className="endereco-contato">Miguel Pereira dos Santos</p>
                    <p className="email-contato">dionatannsilvaa@gmail.com</p>
                </div>
            </div>
            
        </div>
    )
}