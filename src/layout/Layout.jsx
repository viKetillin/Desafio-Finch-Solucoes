import Sidebar from '../components/Sidebar'

const Layout = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="max-h-screen overflow-auto grow px-16 pt-10 pb-12">
                {children}
            </div>
        </div>
    )
}

export default Layout