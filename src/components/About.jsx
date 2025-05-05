import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Colors from "../Colors";

const About = () => {
    return (
        <div style={{ backgroundColor: Colors.accent }} className="flex flex-row items-center">
            <div className="flex-[2]">
                <img className="scale-[0.65]" src="/images/about-img.jpeg" alt="Garden" />
            </div>
            <div className="flex flex-[3] flex-col h-screen items-center justify-evenly pr-16">
                <h1 className="text-[90px]">A bit about myself...</h1>
                <div className="flex flex-col items-center space-y-10">
                    <p className="text-[30px] text-center">
                        Hi, I'm Anish Khurana and I currently study Software Engineering at the University of Waterloo. I am really passionate about coding and always enjoy learning more about AI and Robotics. Additionally, I am an avid traveler, having visited over 10 countries and I&apos;m also a huge fan of cricket and hockey. Feel free to connect with me!
                    </p>
                    <div className="flex flex-row space-x-10">
                        <a href="https://github.com/programmer812" target="_blank">
                            <FaGithub size={75} />
                        </a>
                        <a href="https://www.linkedin.com/in/anish-khurana/" target="_blank">
                            <FaLinkedin size={75} />
                        </a>
                        <a href="mailto:anishkhu264@gmail.com">
                            <IoIosMail size={75} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;