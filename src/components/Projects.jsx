import ProjectCard from "./projects/ProjectCard.jsx";
import {descriptions, mastermind, Portfolio, spotifree, UHC_Run} from "../services/ProjectsData.js";
import mastermindIllu from "../../public/projects/mastermind.png";
import uhcRunIllu from "../../public/projects/uhcrun.jpg";
import spotifreeIllu from "../../public/projects/spotifree.png";
import portfolioIllu from "../../public/projects/portfolio.png";

function Projects() {

    return (
        <div id="projects" className="2xl:h-screen w-full flex flex-col justify-center bg-thunder-600 items-center">
            <div className="2xl:grid 2xl:grid-cols-2 2xl:grid-rows-2 2xl:gap-y-8 2xl:h-3/4 2xl:w-5/6
                justify-items-center flex flex-col justify-center items-center gap-y-4">
                <ProjectCard techs={UHC_Run} image={uhcRunIllu} name="UHC Run"
                             borderColor="border-green-400" textColor="text-green-400"
                             projectLink={"https://github.com/Timeuh/UHC-Run"} description={descriptions.UHC_Run}/>
                <ProjectCard techs={mastermind} image={mastermindIllu} name="Mastermind"
                             borderColor="border-yellow-900" textColor="text-yellow-900"
                             projectLink={"https://github.com/Timeuh/Mastermind"} description={descriptions.Matermind}/>
                <ProjectCard techs={spotifree} image={spotifreeIllu} name="Spotifree"
                             borderColor="border-orange-400" textColor="text-orange-400"
                             projectLink={"https://github.com/Timeuh/Spotifree"} description={descriptions.Spotifree}/>
                <ProjectCard techs={Portfolio} image={portfolioIllu} name="Portfolio"
                             borderColor="border-purple-400" textColor="text-purple-400"
                             projectLink={"https://github.com/Timeuh/Portfolio"} description={descriptions.Portfolio}/>
            </div>
        </div>
    );
}
export default Projects;