import Banner from "../../components/banner/Banner"
import ListaProduto from "../../components/produto/listaproduto/ListaProduto"

function Home() {
    return (
        < >
            <div>
                <Banner />
                <div>
                    {/* cards */}
                    <div className="flex justify-center items-center bg-indico-200">
                        <ListaProduto />

                    </div>
                </div>
            </div>
            {/* banner */}
        </>
    )
}

export default Home