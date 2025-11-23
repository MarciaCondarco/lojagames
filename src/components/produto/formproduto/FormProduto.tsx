import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PacmanLoader } from "react-spinners"
import type Produto from "../../../models/produto/Produto"
import { atualizar, buscar, enviar } from "../../../services/Service"


function FormProduto() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [produto, setProduto] = useState<Produto>({} as Produto);

    const {id} = useParams <{id: string}>();

        async function buscarPorID(){
        try {
            await buscar(`/produtos/${id}`, setProduto)
        } catch (error) {
            alert('produto não encontrado')
        }
    }

    function retornar(){
        navigate('/')
    }

    useEffect(()=>{
        if(id!==undefined){
            buscarPorID()
        }
    },[id])



    function atualizarProduto(e: ChangeEvent<HTMLInputElement>){
        setProduto({
            ...produto,
            [e.target.name]: e.target.value
        })
    }

    async function cadastrarNovaProduto(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    setIsLoading(true)
        if(id !== undefined){
            // Vamos atualizai!!!
            try{

                await atualizar('/produtos', produto, setProduto)
                alert('atualização realizada com sucesso!!!')
            }catch(error: any){
                alert('a atualização não sucessida!!')
            }
        }else{
            // vamos cadastrar categoria
            try{
                await enviar(`/produtos`, produto, setProduto)
                alert('produto cadastrado com sucesso!')
            }catch(error){
                alert('Erro ao cadastrar o produto!')
            }
        }
        setIsLoading(false)
        retornar();
    }



    return (
        <div className="flex justify-between items-center ">

                <div className="flex flex-col items-center p-20 px-30 rounded-full">
                    <img src="https://ik.imagekit.io/xmqgsi96x8/baixados%20(3).jpeg" alt="imagem de pessoas feliz"/>
                </div>
                <div className="flex flex-col items-center w-full p-20 px-30 ">
                    <form action="" className="w-xs p-10 bg-gray-200 rounded-2xl"
                    onSubmit={cadastrarNovaProduto}>
                        <h2 className="flex justify-center font-bold text-2xl">
                            {id === undefined ? 'Cadastrar Produto' : 'Editar Produto'}
                                
                        </h2>
                        {/* div nome */}
                        <div className="flex flex-col w-full gap-1">                            
                            <label htmlFor="nome">Digite o nome</label>
                            <input
                            type="text"
                            id="tipo"
                            name="tipo"
                            placeholder="Digite o tipo"
                            className="border-2 rounded-xl bg-white"
                            value = {produto.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarProduto(e)}
                            />
                        </div><br></br>
                        {/* div preco */}
                        <div className="flex flex-col w-full gap-1">                            
                            <label htmlFor="nome">Digite o preço</label>
                            <input
                            type="text"
                            id="tipo"
                            name="tipo"
                            placeholder="Digite o tipo"
                            className="border-2 rounded-xl bg-white"
                            value = {produto.preco}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarProduto(e)}
                            />
                        </div><br></br>
                        {/* div foto */}
                        <div className="flex flex-col w-full gap-1">                            
                            <label htmlFor="nome">Digite a foto</label>
                            <input
                            type="text"
                            id="tipo"
                            name="tipo"
                            placeholder="Digite o tipo"
                            className="border-2 rounded-xl bg-white"
                            value = {produto.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarProduto(e)}
                            />
                        </div><br></br>
                        <div className="mb-4"> 
                                <button 
                                    type="submit"
                                    className="rounded-xl border-2 w-full p-2 bg-lime-200 hover:bg-lime-300">
                                    {
                                        isLoading?
                                            <PacmanLoader
                                                color="#ffffff"
                                                size={24}
                                            />:
                                            <span>Cadastrar</span>
                                    }
                                </button>
                        </div>
                    </form>

                </div>
            </div>
    )
}

export default FormProduto