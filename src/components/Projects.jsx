import { Button, Card, Container, Row } from 'react-bootstrap';
import Colors from '../Colors';

const Projects = () => {
    const ProjectCard = ({ img_width, img_height, img_url, img_alt, name, description, project_url, embed_type }) => {
        return (
            <Card className='w-[30%]'>
                <Card.Img 
                    style={{ width: img_width, height: img_height }} 
                    className='self-center' 
                    variant="top" 
                    src={img_url} 
                    alt={img_alt} 
                />
                <Card.Body>
                    <Card.Title className='text-center'>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button
                        className='w-full mt-3'
                        variant="primary" 
                        href={project_url}
                        target="_blank"
                    >
                        View on {embed_type}
                    </Button>
                </Card.Body>
            </Card>
        )
    }

    return (
        <div style={{ backgroundColor: Colors.primary }} className="pt-8 flex flex-col items-center">
            <h1 className="text-white text-7xl">Projects</h1>
            <Container fluid className='pt-32'>
                <Row className='justify-center gap-16 mb-32'>
                    <ProjectCard
                        img_width="100%"
                        img_height="50%"
                        img_url="/images/powercode-img.png"
                        img_alt="Power Code Homepage"
                        name="PowerCode"
                        description="This is a 1v1 multiplayer coding game that my team and I developed for Hack the North. We utilized React and Material UI to implement the frontend and deployed the backend server on Convex. The code checks are performed by a FastAPI server that is hosted on Heroku."
                        project_url="https://devpost.com/software/power-code"
                        embed_type="Devpost"
                    />
                    <ProjectCard
                        img_width="45%"
                        img_height="50%" 
                        img_url="/images/trivia-king-img.png"
                        img_alt="Trivia King App"
                        name="Trivia King"
                        description="This is a trivia app which was created using React Native and Expo Go. It is currently released on the Google Play Store where the users can attempt quizzes over multiple topics and their scores will be recorded in the device’s internal storage."
                        project_url="https://play.google.com/store/apps/details?id=com.anish.k.TriviaKing"
                        embed_type="Google Play"
                    />
                </Row>
                <Row className='justify-center gap-16 mb-32'>
                    <ProjectCard
                        img_width="100%"
                        img_height="50%"
                        img_url="/images/blog-website.PNG"
                        img_alt="Blog Website Homepage"
                        name="Blog Website"
                        description="This website was made using EJS and CSS for the frontend and Node JS to design the server and API. As well, MongoDB was utilized to store data in a database due to its versatility with Node JS."
                        project_url="https://github.com/programmer812/Blog-Website"
                        embed_type="GitHub"
                    />
                    <ProjectCard
                        img_width="50%"
                        img_height="50%" 
                        img_url="/images/latex-converter-img.PNG"
                        img_alt="Math Notes to Latex Converter"
                        name="Math Notes to Latex Converter"
                        description="This is a latex converter that my group and I developed for a course project. We used Raspberry PI to capture the images that would then be sent to the API which would convert the image text into LaTeX code."
                        project_url="https://github.com/rohanvedula/PaZaR"
                        embed_type="GitHub"
                    />
                </Row>
                <Row className='justify-center gap-16 mb-32'>
                    <ProjectCard
                        img_width="70%"
                        img_height="60%"
                        img_url="/images/realm-rush-img.PNG"
                        img_alt="Realm Rush Gameplay"
                        name="Realm Rush Game"
                        description="This game was built using C# and the Unity Game Engine where algorithms such as Breadth First Search were applied and tested."
                        project_url="https://github.com/programmer812/Realm-Rush-Game"
                        embed_type="GitHub"
                    />
                    <ProjectCard
                        img_width="60%"
                        img_height="60%" 
                        img_url="/images/space-invaders-img.PNG"
                        img_alt="Space Invaders Gameplay"
                        name="Space Invaders Game"
                        description="This game was made using the Pygame library and fundamental python principles."
                        project_url="https://github.com/programmer812/Space-Invaders-Game"
                        embed_type="GitHub"
                    />
                </Row>
            </Container>
        </div>
    )
}

export default Projects;