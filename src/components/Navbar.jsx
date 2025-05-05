import { useEffect, useState } from "react";

const Navbar = ({ aboutRef, projectsRef }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (e, ref) => {
        e.preventDefault();
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav 
            style={{ backgroundColor: scrolled ? 'black' : 'transparent' }}
            className="flex flex-row items-center py-5 text-white fixed w-[100%] h-32 z-[1000] transition duration-300 ease-in-out"
        >
            <a href="#">
                <div className="outline outline-1 mx-10 p-3 flex justify-center items-center">
                    <h1 className="text-5xl font-bold">AK</h1>
                </div>
            </a>
            <div className="flex flex-row space-x-20 pl-5">
                <a href="#" onClick={(e) => scrollTo(e, aboutRef)} className="text-lg">About</a>
                <a href="#" onClick={(e) => scrollTo(e, projectsRef)} className="text-lg">Projects</a>
                <a href="info/CV - Anish Khurana.pdf" target="_blank" className="text-lg">Resume</a>
            </div>
        </nav>
    )
}

export default Navbar;