import { useParams, useNavigate } from "react-router-dom";

import { useProduct } from "../hooks/Product";

import { IoSearch } from "react-icons/io5";
import { TbArrowBackUp } from "react-icons/tb";
import { BiLoaderAlt } from "react-icons/bi";
import { useState } from "react";

const ProdutoDetalhes = () => {
    const priceConvert = (value) => value.toFixed(2).split('.').map((item, index) => index === 0 ? item.split("").reverse().join("").match(/.{1,3}/g).join(".").split("").reverse().join("") : item).join(",")

    const { id } = useParams();
    const { products, favorites, ToggleFavorite } = useProduct();

    const product = products.find(product => product.id.toString() === id);

    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    return (
        <>
            <div className="flex-col md:flex-row flex justify-between mb-6">
                {products.length > 0 && product !== undefined ?
                    <div>
                        <div className="flex flex-col md:flex-row gap-10">
                            <h1 className="text-2xl text-gray-700 font-semibold">{product?.nome}</h1>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <span className="price text-2xl whitespace-nowrap">
                                    R$ {priceConvert(product.valor)}
                                </span>
                                <div className="flex items-center justify-end">
                                    <label htmlFor={product.id} className="flex relative flex-wrap cursor-pointer">
                                        <input type="checkbox" onChange={() => ToggleFavorite({ id: product.id })} id={product.id} className="sr-only peer" checked={favorites.includes(product.id)} />
                                        <div className="w-9 h-5 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                    <span className="ml-2 text-sm font-medium text-gray-400">tornar favorito</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 py-4">{product.decricaoCurta}</p>
                    </div> : <BiLoaderAlt className="animate-spin" size={30} />}

                <div className="flex flex-col lg:flex-row items-end justify-end gap-4">
                    <button onClick={() => navigate(-1) || navigate('/')} className="text-gray-600 pr-4 border-r"><TbArrowBackUp size={30} /></button>
                    <form onSubmit={evt => {
                        evt.preventDefault();
                        navigate(`/?search=${search}`)
                    }} className='flex items-center bg-white py-1 rounded-full shadow-md'>
                        <button type='submit' className='pl-3 pr-2 py-0.5 border-r text-gray-700'>
                            <IoSearch size={20} />
                        </button>
                        <input value={search} onChange={evt => setSearch(evt.target.value)} placeholder='Buscar' className='bg-transparent text-gray-600 w-60 h-4 pl-2 mr-4 outline-none' type="text" />
                    </form>
                </div>
            </div>
            <hr />

            {products.length > 0 && product !== undefined ?
                <div>
                    <div className="py-12 flex flex-col lg:flex-row gap-10">
                        <div>
                            <div className="h-full w-full lg:w-80 lg:h-80 shadow-xl">
                                <img src={product.imagem} className="h-full w-full object-cover" alt="" />
                                <div className=" z-10 relative flex justify-end">
                                    {product.promocao &&
                                        <span className="-translate-y-full bg-promocao absolute text-sm pb-3 px-6 text-white">
                                            Promoção
                                        </span>}
                                    {product.exclusivo &&
                                        <span className="-translate-y-full bg-exclusivo text-sm pb-3 px-6 text-white">
                                            Exclusivo
                                        </span>}
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Detalhes do Produto</h2>
                            <p className="py-6 text-gray-600">{product.descricaoLonga}</p>
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800">Ficha Técnica</h2>
                    <hr className="my-6" />
                    <div>
                        <ul style={{ listStyle: 'inside' }} className="grid md:grid-cols-3 gap-4">
                            {product.fichaTecnica.map(ficha => <li className="text-gray-700">{ficha.titulo}: {ficha.descricao}</li>)}
                        </ul>
                    </div>
                </div> : <div className="my-12"><BiLoaderAlt className="animate-spin mx-auto" size={30} /></div>}
        </>
    )
}

export default ProdutoDetalhes