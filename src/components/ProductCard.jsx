import { useProduct } from "../hooks/Product";

const ProductCard = ({ product }) => {
    const { favorites, ToggleFavorite } = useProduct();

    const priceConvert = (value) => value.toFixed(2).split('.').map((item, index) => index === 0 ? item.split("").reverse().join("").match(/.{1,3}/g).join(".").split("").reverse().join("") : item).join(",")

    return (
        <div className="product-card bg-white shadow-xl">
            <div className="h-44">
                <img src={product.imagem} className="h-full w-full object-cover" alt="" />
                <div className="-translate-y-full z-10 relative flex justify-end">
                    {product.promocao &&
                        <span className="bg-promocao text-sm pb-3 px-6 text-white">
                            Promoção
                        </span>}
                    {product.exclusivo &&
                        <span className="bg-exclusivo text-sm pb-3 px-6 text-white">
                            Exclusivo
                        </span>}
                </div>
            </div>
            <div className="px-5 pb-5 pt-3">
                <div className="flex items-center justify-between gap-2">
                    <span className="price text-md font-semibold whitespace-nowrap">
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
                <div className="pt-1">
                    <h2 className="font-semibold text-gray-800">{product.nome}</h2>
                    <p className="text-sm pt-2 text-gray-600">{product.decricaoCurta}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard