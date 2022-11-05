import { IoSearch } from 'react-icons/io5'
import { useProduct } from '../hooks/Product'
import ProductCard from '../components/ProductCard'

const Home = () => {
    const { products } = useProduct();

    return (
        <>
            <div className="flex justify-between mb-6">
                <div>
                    <h1 className="text-2xl text-gray-700"><span className="font-bold">Empresa XPTO</span> - Conheça todos os nossos produtos</h1>
                    <p className="text-gray-600 py-4">Listagem de produtos - clique no produto desejado para saber mais</p>
                </div>
                <div className="flex items-center justify-end">
                    <div className='flex items-center bg-white py-1 rounded-full shadow-md'>
                        <span className='pl-3 pr-2 py-0.5 border-r text-gray-700'>
                            <IoSearch size={20} />
                        </span>
                        <input placeholder='Buscar' className='bg-transparent w-60 h-4 pl-2 mr-4 outline-none' type="text" />
                    </div>
                </div>
            </div>
            <hr />
            <div className='grid grid-cols-4 gap-10 pt-12'>
                {products.map((product, index) => <ProductCard key={index} product={product} />)}
            </div>
        </>
    )
}

export default Home