import { IoSearch } from 'react-icons/io5'
import { useProduct } from '../hooks/Product'
import ProductCard from '../components/ProductCard'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
    const { products } = useProduct();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    return (
        <>
            <div className="flex justify-between mb-6">
                <div>
                    <h1 className="text-2xl text-gray-700"><span className="font-bold">Empresa XPTO</span> - Conheça todos os nossos produtos exclusivos</h1>
                    <p className="text-gray-600 py-4">Listagem de produtos - clique no produto desejado para saber mais</p>
                </div>
                <div className="flex items-center justify-end">
                    <form onSubmit={evt => {
                        evt.preventDefault();
                        navigate(`/?search=${search}`)
                    }} className='flex items-center bg-white py-1 rounded-full shadow-md'>
                        <span className='pl-3 pr-2 py-0.5 border-r text-gray-700'>
                            <IoSearch size={20} />
                        </span>
                        <input value={search} onChange={evt => setSearch(evt.target.value)} placeholder='Buscar' className='bg-transparent text-gray-600 w-60 h-4 pl-2 mr-4 outline-none' type="text" />
                    </form>
                </div>
            </div>
            <hr />
            <div className='grid grid-cols-4 gap-10 pt-12'>
                {products.filter(product => product.exclusivo).map((product, index) => <ProductCard key={index} product={product} />)}
            </div>
        </>
    )
}

export default Home