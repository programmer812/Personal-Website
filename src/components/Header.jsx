import Colors from '../Colors';

const Header = () => {
    return (
        <div style={{ backgroundColor: Colors.primary }} className="text-white pt-32">
            <div className="flex flex-row items-center justify-around h-screen">
                <div className="flex flex-col items-center">
                    <h1 className="text-[90px]">Hi, I'm</h1>
                    <h1 className="text-[90px]">Anish Khurana</h1>
                </div>
                <img className="scale-90" src="/images/header-img.png" alt="Header Image" />
            </div>
        </div>
    )
}

export default Header;