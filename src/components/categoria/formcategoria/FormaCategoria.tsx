import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PacmanLoader } from "react-spinners"
import type Categoria from "../../../models/categoria/Categoria"
import { atualizar, buscar, enviar } from "../../../services/Service"


function FormaCategoria() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const {id} = useParams <{id: string}>();

        async function buscarPorID(){
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error) {
            alert('categoria não encontrada')
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



    function atualizarCategoria(e: ChangeEvent<HTMLInputElement>){
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function cadastrarNovaCategoria(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    setIsLoading(true)
        if(id !== undefined){
            // Vamos atualizai!!!
            try{

                await atualizar('/categorias', categoria, setCategoria)
                alert('atualização realizada com sucesso!!!')
            }catch(error: any){
                alert('a atualização não sucessida!!')
            }
        }else{
            // vamos cadastrar categoria
            try{
                await enviar(`/categorias`, categoria, setCategoria)
                alert('Usuário cadastrado com sucesso!')
            }catch(error){
                alert('Erro ao cadastrar o usuário!')
            }
        }
        setIsLoading(false)
        retornar();
    }



    return (
        <div className="flex justify-between items-center ">

                <div className="flex flex-col items-center w-full p-20 px-30 ">
                    <img src="https://ik.imagekit.io/xmqgsi96x8/Sentinels%20Valorant%20__%20First%20Strike.jpeg?updatedAt=1763854311064" alt="imagem de pessoas feliz"/>
                </div>
                <div className="flex flex-col items-center w-full p-20 px-30 ">
                    <form action="" className="w-xs p-10 bg-gray-200 rounded-2xl"
                    onSubmit={cadastrarNovaCategoria}>
                        <h2 className="flex justify-center font-bold text-2xl">
                            {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
                                
                        </h2>
                        {/* div nome */}
                        <div className="flex flex-col w-full gap-1">                            
                            <label htmlFor="nome">Digite o tema</label>
                            <input
                            type="text"
                            id="tipo"
                            name="tipo"
                            placeholder="Digite o tipo"
                            className="border-2 rounded-xl bg-white"
                            value = {categoria.tipo}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarCategoria(e)}
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

export default FormaCategoria