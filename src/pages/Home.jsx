import { IoSearch } from 'react-icons/io5'
import { ImSad } from 'react-icons/im'
import { useProduct } from '../hooks/Product'
import ProductCard from '../components/ProductCard'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

const Home = () => {
    const { products } = useProduct();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const [searchParams] = useSearchParams();
    const searchParamValue = searchParams.get('search') || '';

    const filtered_products = products.filter(product => product.nome.toLowerCase().includes(searchParamValue.toLowerCase()))

    useEffect(() => {
        setSearch(searchParamValue)
    }, [searchParamValue])

    return (
        <>
            <div className="flex justify-between mb-6">
                <div>
                    <h1 className="text-2xl text-gray-700"><span className="font-bold">Empresa XPTO</span> - Conheça todos os nossos produtos</h1>
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
                        <input value={search} onChange={evt => setSearch(evt.target.value)} placeholder='Buscar' className='bg-transparent  text-gray-600 w-60 h-4 pl-2 mr-4 outline-none' type="text" />
                    </form>
                </div>
            </div>
            <hr />
            {products.length > 0 ?
                filtered_products.length > 0 ?
                    <div className='grid grid-cols-4 gap-10 pt-12'>
                        {filtered_products.map((product, index) => <ProductCard key={index} product={product} />)}
                    </div> :
                    <h2 className='mt-32 text-center flex items-center justify-center text-2xl gap-2 text-gray-700'><span>Nenhum produto foi encontrado</span><span><ImSad /></span></h2> 
                    : <div className="mt-36"><BiLoaderAlt className="animate-spin mx-auto text-gray-700" size={50} /></div>}
        </>
    )
}

export default Home