import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import type Categoria from "../../../models/categoria/Categoria";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";


function ListaCategoria() {

    // const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [categorias, setCategorias] = useState<Categoria[]>([])

    useEffect(()=>{
        buscarCategoria()
    }, [categorias.length])

    async function buscarCategoria() {
        try {

            setIsLoading(true)

            await buscar('/categorias', setCategorias)
            
        } catch (error: any) {
            if (error.toString().includes('401')) {
                alert("errorrr")
            }
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <>

            {isLoading && (
                <div className="flex justify-center w-full my-8">
                    <PacmanLoader
                        color="oklch(93.8% 0.127 124.321)"
                        size={32}
                    />
                </div>
            )}
            <div>          
                            {(!isLoading && categorias.length === 0) && (
                            <span className="text-3xl text-center my-8">
                                Nenhum Produto foi encontrado!
                            </span>
                    )}
                    <div className="grid grid-cols-4 gap-16 p-9 m-5">
                            {
                                categorias.map((categoria) => (
                                    <CardCategoria key={categoria.id} categoria={categoria}/>
                                ))
                            }
                    </div>
            </div>

        </>
    )
}

export default ListaCategoria