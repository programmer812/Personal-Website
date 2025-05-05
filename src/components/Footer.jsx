import Colors from "../Colors";

const Footer = () => {
    return (
        <div 
            style={{ backgroundColor: Colors.accent }} 
            className="flex justify-center items-center py-8"
        >
            <p className="font-bold text-lg">&copy; {new Date().getFullYear()} Anish Khurana</p>
        </div>
    )
}

export default Footer;