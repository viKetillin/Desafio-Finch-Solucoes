import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoSearch } from 'react-icons/io5'
import { RiEmotionSadLine } from 'react-icons/ri'
import { useProduct } from '../hooks/Product'
import ProductCard from '../components/ProductCard'


const Home = () => {
    const { products, favorites } = useProduct();

    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const favoritos = products.filter(product => favorites.includes(product.id));

    return (
        <>
            <div className="flex-col md:flex-row flex justify-between mb-6">
                <div>
                    <h1 className="text-2xl text-gray-700"><span className="font-bold">Empresa XPTO</span> - Meus Favoritos</h1>
                    <p className="text-gray-600 py-4">Listagem de produtos - clique no produto desejado para saber mais</p>
                </div>
                <div className="flex items-center justify-end">
                <form onSubmit={evt => {
                        evt.preventDefault();
                        navigate(`/?search=${search}`)
                    }} className='flex items-center bg-white py-1 rounded-full shadow-md'>
                        <button type='submit' className='pl-3 pr-2 py-0.5 border-r text-gray-700'>
                            <IoSearch size={20} />
                        </button>
                        <input value={search} onChange={evt => setSearch(evt.target.value)} placeholder='Buscar' className='bg-transparent  text-gray-600 w-full sm:w-60 h-4 pl-2 mr-4 outline-none' type="text" />
                    </form>
                </div>
            </div>
            <hr />
            {favoritos.length > 0 ?
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-12'>
                    {favoritos.map((product, index) => <ProductCard key={index} product={product} />)}
                </div> :
                <h2 className='mt-32 text-center flex items-center justify-center text-2xl gap-2 text-gray-700'><span>Não foi adicionado nenhum produto aos favoritos</span><span><RiEmotionSadLine D /></span></h2>}
        </>
    )
}

export default Home