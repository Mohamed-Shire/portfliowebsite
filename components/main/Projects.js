import ProjectItem from "./projects/ProjectItem"
import { useMediaQuery } from "../../lib/useMediaQuery"
import ProjectsTitle from "./projects/ProjectsTitle"

const projects = [
    {
        link: 'https://Mohamed-Shire/Games/tree/main/Plane%20Game/Plane%20Game',
        color: '#1ed760',
        title: "Plane Game",
        description: "A game designed with Haskell and Shell",
        techs: [
            'Haskell',
            'Shell',
            
        ],
        gitLink: 'https://Mohamed-Shire/Games/tree/main/Plane%20Game/Plane%20Game',
        bgPath: '/gameplay.gif'
    },
    {
        link: 'https://github.com/Mohamed-Shire/App/tree/main/todo-list-main/todo-list-main',
        color: '#5c16c5',
        title: "TO DO LIST",
        description: "a todo-list app to take notes, add items, complete tasks and keep a log of daily activities.",
        techs: [
            'CSS',
            'JavaScript',
            'HTML',
           
        ],
        gitLink: '',
        bgPath: '/TODOLIST.png'
    },
    {
        link: 'https://github.com/Mohamed-Shire/java-code',
        color: '#FF7A00',
        title: "JAVA CODE",
        description: "Java code used for school project and added to it on own personal time",
        techs: [
            'Java',
            
        ],
        gitLink: 'https://github.com/Mohamed-Shire/java-code',
        bgPath: '/java.jpg'
    },
    {
        link: 'https://github.com/Mohamed-Shire/Uber-Clone/tree/main/uber-clone-master',
        color: '#007FE3',
        title: "UBER CLONE APP",
        description: "Uber clone app that is a transportation network.Allows users to submit trip requests and then routes Uber drives who use their own vechiles to pick up rides and complete these trips.",
        techs: [
            'Swift',
            'Ruby',
        ],
        gitLink: 'https://github.com/Mohamed-Shire/Uber-Clone/tree/main/uber-clone-master',
        bgPath: '/uberclone.jpg'
    },
]

export default function Projects() {
    const md = useMediaQuery(768)

    return (
        <section id="projects" className="flex justify-center items-center w-full mt-8">
            <div className="max-w-7xl w-full flex flex-col justify-center items-center z-[9999] mt-14 overflow-hidden">
                <ProjectsTitle />
                {projects.map((project, index) => <ProjectItem 
                    key={index}
                    link={project.link}
                    color={project.color}
                    title={project.title}
                    description={project.description}
                    techs={project.techs}
                    gitLink={project.gitLink}
                    bgPath={project.bgPath}
                    index={index}
                    md={md}
                />)}
            </div>
        </section>
    )
}