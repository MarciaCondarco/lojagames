import type Categoria from "../categoria/Categoria";

export default interface Produto {
    id: number;
    nome: string;
    preco: number;
    foto: string;
    curtir: number;
    categoria?: Categoria | null;
}