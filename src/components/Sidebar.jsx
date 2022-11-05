import { RiCodeBoxLine } from 'react-icons/ri'
import { TiGift } from 'react-icons/ti'
import { BiLike } from 'react-icons/bi'
import { BsStack, BsBoxSeam } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="h-screen px-2 bg-white shadow-xl">
            <RiCodeBoxLine className="mx-4 my-6" size={40} />
            <hr />
            <div className='py-4'>
                <Link className={`text-center flex flex-col items-center gap-1 ${window.location.pathname === '/' ? 'text-gray-900': 'text-gray-600'}`} to="/">
                    <BsStack size={27} />
                    <span className='font-semibold text-xs'>Todos</span>
                </Link>
            </div>
            <hr />
            <div className='py-4'>
                <Link className={`text-center flex flex-col items-center gap-1 ${window.location.pathname === '/exclusivos' ? 'text-gray-900': 'text-gray-600'}`} to="/exclusivos">
                    <BsBoxSeam size={27} />
                    <span className='font-semibold text-xs'>Exclusivos</span>
                </Link>
            </div>
            <hr />
            <div className='py-4'>
                <Link className={`text-center flex flex-col items-center gap-1 ${window.location.pathname === '/promocao' ? 'text-gray-900': 'text-gray-600'}`} to="/promocao">
                    <TiGift size={27} />
                    <span className='font-semibold text-xs'>Promoção</span>
                </Link>
            </div>
            <hr />
            <div className='py-4'>
                <Link className={`text-center flex flex-col items-center gap-1 ${window.location.pathname === '/favoritos' ? 'text-gray-900': 'text-gray-600'}`} to="/favoritos">
                    <BiLike size={27} />
                    <span className='font-semibold text-xs'>Favoritos</span>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar