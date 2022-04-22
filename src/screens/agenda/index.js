import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Contato from '../../componentes/contato'
import Modal from "react-modal";
import './agenda.css'
import { useContatosApi } from '../../hooks/useContatosApi'


export default function Agenda() {
    //funçoes para funcionamento da aplicação
    Modal.setAppElement("#root");
    const [modalIsOpen, setIsOpen] = useState(false);
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [telefone, setTelefone] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [endereco, setEndereco] = useState();
    const [email, setEmail] = useState();

    const [contatos, setContatos] = useState([])

    const { criarContato: criarContatoApi, listarContatos, removerContato: removerContatoApi } = useContatosApi()

    const carregarContatos = async () => {
        const contatosApi = await listarContatos()
        setContatos(contatosApi);
    }

    const removerContato = async (id) => {
        await removerContatoApi(id)
        await carregarContatos();
    }

    useEffect(() => {
        carregarContatos()
    }, [])


    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    //Adcionar contatos
    async function criarContato() {
        if (nome != '' && sobrenome != '' && telefone != '' && dataNascimento != '' && endereco != '' && email != '') {
            closeModal()
        } else {
            console.log('Um dos campos não foi preenchido!')
        };

        var contato = {
            nome: nome,
            sobrenome: sobrenome,
            telefone: telefone,
            dataNascimento: dataNascimento,
            endereco: endereco,
            email: email
        }

        const contatoCriado = await criarContatoApi(contato)
        await carregarContatos()
    }

    return (
        <div className="container">
            <div className="wrap-agenda">
                <span className="title">Lista de Contatos</span>
                <div className="wrap-contatos">
                    {contatos.map((contato) => (
                        <Contato
                            key={contato._id}
                            contato={contato}
                            handleRemover={(id) => removerContato(id)}
                        />
                    ))}

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
                        <input onChange={e => setNome(e.target.value)} type="text" className="input-modal-contato" placeholder=' Nome' />
                    </div>
                    <div className="wrap-modal-contato">
                        <span className="span-contato-modal">Sobrenome: </span>
                        <input onChange={e => setSobrenome(e.target.value)} type="text" className="input-modal-contato" placeholder=' Nome' />
                    </div>
                    <div className="wrap-modal-contato">
                        <span className="span-contato-modal">Telefone: </span>
                        <input onChange={e => setTelefone(e.target.value)} type="text" className="input-modal-contato" placeholder=' Telefone' />
                    </div>
                    <div className="wrap-modal-contato">
                        <span className="span-contato-modal">Data de Nascimento: </span>
                        <input onChange={e => setDataNascimento(e.target.value)} type="text" className="input-modal-contato" placeholder=' Data de Nascimento' />
                    </div>
                    <div className="wrap-modal-contato">
                        <span className="span-contato-modal">Endereço: </span>
                        <input onChange={e => setEndereco(e.target.value)} type="text" className="input-modal-contato" placeholder=' Endereço' />
                    </div>
                    <div className="wrap-modal-contato">
                        <span className="span-contato-modal">Email: </span>
                        <input onChange={e => setEmail(e.target.value)} type="email" className="input-modal-contato" placeholder=' Email' />
                        <button onClick={criarContato} className="submit-form-contato">Salvar Contato</button>
                    </div>
                </form>
            </Modal>

        </div>
    )
}