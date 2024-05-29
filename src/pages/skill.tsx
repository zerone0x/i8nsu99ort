import Image from "next/image";
import { skillsData } from "../data/config";
import { FaJs } from "react-icons/fa";
function Skill() {
  return (
    <section id="skill" className="mx-auto my-20 px-4 sm:px-8 lg:max-w-7xl">
      <header className="text-4xl font-bold text-gray-800 mb-8">Skills</header>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow hover:motion-safe:animate-wiggle"
          >
            <Image src={skill.src} alt={skill.alt} width={80} height={80} />
            <p className="mt-2 text-sm">{skill.alt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
