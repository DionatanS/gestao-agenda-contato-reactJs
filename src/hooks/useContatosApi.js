import api from './api/api'

export const useContatosApi = () => {

    const criarContato = async (contato) => {
        const { data } = await api.post('/contatos', contato)
        return data
    }

    const listarContatos = async () => {
        const { data } = await api.get('/contatos')
        return data;
    }

    const removerContato = async (id) => {
        await api.delete(`/contatos/${id}`)
    }

    return {
        criarContato,
        listarContatos,
        removerContato
    }
}