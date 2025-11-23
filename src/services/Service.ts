import axios from "axios";

const api = axios.create({
    baseURL: 'https://lojagames-moom.onrender.com/'
})


export const buscar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
}

export const enviar = async (url: string, dados: any, setResposta: Function) => {
    try {
        const resposta = await api.post(url, dados)
        setResposta(resposta.data)
    } catch (error) {
        console.error("Erro ao enviar dados:", error)
    }
}


export const atualizar = async (url: string, dados: any, setResposta: Function) => {
        const resposta = await api.put(url, dados)
        setResposta(resposta.data)
}

export const deletar = async (url: string) => {
    try {
        await api.delete(url)
        console.log("Item deletado com sucesso")
    } catch (error) {
        console.error("Erro ao deletar:", error)
    }
}

export default api
