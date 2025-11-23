import { ListIcon, MagnifyingGlassIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {

    const toggleMenuMbile= ()=>{
    const mobileMenu = document.getElementById('mobileMenu')

        // se tiver hidden quando clicar remova o
        if(mobileMenu?.classList.contains('hidden')){
            mobileMenu.classList.remove('hidden');
        }else{
            mobileMenu?.classList.add('hidden');
        }
    }

    return (
        <>
            <div className="flex justify-between bg-transparent p-4">
                {/* logo */}
                <Link to="/">
                    <div className="w-40">
                        <img src="https://ik.imagekit.io/vzr6ryejm/games/logolg.png" alt="imagem da logo da loja"/>
                    </div>
                </Link>
                {/* barra de pesquisa */}
                <div>
                    <form action="" className="hidden md:flex items-center gap-12">
                        <div className="flex p-2 bg-white rounded-2xl w-110">
                            <input type="text" className=" border-white bg-white rounded-2xl w-110" 
                            />
                            <button>
                                <MagnifyingGlassIcon size={32} />
                            </button>
                        </div>
                    </form>
                </div>
                {/* botões */}
                <div className=" md:flex items-center gap-12 text-white">
                    <Link to='/listaproduto'>
                        Produto
                    </Link>
                    <Link to="/listacategoria">
                        Categoria
                    </Link>
                    <Link to="/formacategoria">
                        Cadastrar Categoria
                    </Link>
                    <Link to="/formproduto">
                        Cadastrar Produto
                    </Link>
                </div>

                {/* responsivo */}
                <button onClick={toggleMenuMbile} className="md:hidden text-3xl p-2 z-50">
                    <ListIcon size={32} className="invert"/>
                </button>
                {/* menu mobile */}
                {/* <div id="mobileMenu" className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur- md">
                    <div className="flex flex-col gap-6 items-center text-white">
                        <Link to='/listaproduto'>
                            Produto
                        </Link>
                        <Link to="/listacategoria">
                            Categoria
                        </Link>
                        <Link to="/formcategoria">
                            Cadastrar Categoria
                        </Link>
                        <Link to="/formproduto">
                            Cadastrar Produto
                        </Link>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Navbar