import api from './api/api'

export const useAuthApi = () => {

    const autenticar = async (email, senha) => {
        const { data } = await api.post('/autenticar', { email, senha })
        return data
    }

    return {
        autenticar
    }
}