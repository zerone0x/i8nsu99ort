import Image from "next/image";
import { projectData } from "../data/config";
import ProjCard from "../components/ProjCard";
function project() {
  return (
    <section id="project">
      <div className="mx-auto flex flex-col items-start gap-8 my-20 px-4 sm:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-4xl font-bold text-gray-800">Projects.</h2>
          <p className="text-lg text-gray-600 mt-2">My work</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projectData.map((project, index) => (
            <ProjCard key={index} projData={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default project;
