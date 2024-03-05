import ProjectPage from "../MyProject";
import ExperiencePage from "../experience";
import Skills from "../skills";

export default function HomePage(){
    return(
        <>
        <div className="pl-16 bg-neutral-800 h-[100%] min-h-screen flex justify pt-7">
        <div>
        <h1 className="text-5xl font-montserrat font-bold pt-32 text-white"> 
            Hi, i'm a <br />
            Web Developer <br />
        </h1>
       <span>
        <p className="font-sans pt-20 text-xl text-white font-mediumfont-montserrat">
            Designs, builds, and maintains websites and web applications. <br /> <br />Proficient in front-end (HTML, CSS, JavaScript) and back-end (Node.js, Express.js) development.<br /> <br /> Collaborates effectively and stays updated with industry trends.
            </p>
       </span>
       <button className="bg-blue-600 text-white
        h-[50px] w-[150px] font-montserrat rounded-2xl mt-10">
        contacts
       </button>
        </div>
       <span>
        <img src="/public/t-shirt-guy-fawkes-mask-v-anonymous-v-for-vendetta-png-file-7101559928e6e9f5878ee5fa1f4a851e.png"/>
       </span>
        </div>
        <ExperiencePage />
        <ProjectPage />
        <Skills />
        </>
    )
}