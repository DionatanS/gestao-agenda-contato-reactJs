import Contato from '../../componentes/contato'
import Modal from "react-modal";
import './agenda.css'
import { useState } from 'react';

export default function Agenda() {
    Modal.setAppElement("#root");
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div className="container">
            <div className="wrap-agenda">
                <span className="title">Lista de Contatos</span>
                <div className="wrap-contatos">
                    <Contato
                        nome="Dionatan da Silva"
                        telefone="51996098394"
                        endereco="Miguel pereira dos Santos"
                        datanascimento="18/11/1997"
                        email="dionatannsilvaa@gmail.com"
                    />

                    <Contato
                        nome="Luana da Silva"
                        telefone="51996098394"
                        endereco="Miguel pereira dos Santos"
                        datanascimento="18/11/2000"
                        email="lulu@gmail.com"
                    />

                </div>
                <div className="wrap-btn">
                    <button onClick={openModal} className="adcionar-contato-btn">Adcionar Novo Contato</button>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content"
            >
                <div className="wrap-header-modal">
                    <h1 className="title-modal">Adcionar Novo Contato</h1>
                </div>

                <form action="" className="form-modal-contato">

                    <div className="wrap-modal-contato">
                        <span className="span-contato-modal">Nome: </span>
                        <input type="text" className="input-modal-contato" placeholder=' Nome' />
                    </div>
                    <div className="wrap-modal-contato">
                        <span className="span-contato-modal">Telefone: </span>
                        <input type="text" className="input-modal-contato" placeholder=' Telefone' />
                    </div>
                    <div className="wrap-modal-contato">
                        <span className="span-contato-modal">Data de Nascimento: </span>
                        <input type="text" className="input-modal-contato" placeholder=' Data de Nascimento' />
                    </div>
                    <div className="wrap-modal-contato">
                        <span className="span-contato-modal">Endereço: </span>
                        <input type="text" className="input-modal-contato" placeholder=' Endereço' />
                    </div>
                    <div className="wrap-modal-contato">
                        <span className="span-contato-modal">Email: </span>
                        <input type="email" className="input-modal-contato" placeholder=' Email' />
                        <button onClick={closeModal} className="submit-form-contato">Salvar Contato</button>
                    </div>


                </form>


            </Modal>

        </div>
    )
}