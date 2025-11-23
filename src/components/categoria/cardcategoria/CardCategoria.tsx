import { Link } from "react-router-dom"
import type Categoria from "../../../models/categoria/Categoria"

interface CardCategoriaProps{
    categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriaProps) {
    return (
        <>
            <div >
                <div >
                    <div>
                        <img src="https://ik.imagekit.io/xmqgsi96x8/valorant.png" alt="" />
                    </div>
                    <div className="text-white">
                        <h2>{categoria.tipo}</h2>
                    </div>
                    <div className="invert">
                        <Link to={`/editar/${categoria.id}`} >
                            <button>Editar</button>
                        </Link>
                        <Link to={`/deletar/${categoria.id}`} >
                            <button>Apagar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardCategoria