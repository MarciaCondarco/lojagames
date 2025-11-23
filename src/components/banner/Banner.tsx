import { GameControllerIcon } from "@phosphor-icons/react"
import Spline from '@splinetool/react-spline';


function Banner() {
    return (
        <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
            <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">

                <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
                    <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-white">
                        <GameControllerIcon size={32} />
                        JoyStick
                    </div>
                </div>
                {/*  */}
                <div className="text-white text-3xl sm:text-4x1 md:text-5xl lg:text-6x1 font-semibold tracking-wider my-8">
                    Bem vindo
                    <br /> 
                    A JoyStick 
                {/* Descrição */}
                    <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:ma-w-[30rem]">O lugar que encontra os jogos de todos os estilos e versões</p>
                </div>
            </div>
            <Spline className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full" scene="https://prod.spline.design/PQs1U6gTq737WMKA/scene.splinecode" />
        </main>
    )
}

export default Banner