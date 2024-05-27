import Link from "next/link";

import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { getTag, projectProp } from "../data/config";

function ProjCard({ projData }:{projData: projectProp}) {
  return (
    <div
      className="border-2 rounded-2xl overflow-hidden relative"
      style={{ maxWidth: "500px" }}
    >
      <div className="relative">
        <Link
          href={projData.GithubLink}
          className="absolute top-4 right-4 z-20 text-white text-3xl hover:text-gray-300 focus:text-gray-300 active:scale-95 transition duration-300 hover:opacity-75"
        >
          <FaGithub />
        </Link>
        <div className="group block relative">
          <Link href={projData.LiveLink}>
            <Image
              className="rounded-t-2xl transition duration-300 ease-in-out group-hover:brightness-75"
              src={projData.imageURL}
              alt={projData.title}
              width={500}
              height={400}
            />
            <FaExternalLinkAlt className="absolute inset-0 m-auto text-white text-3xl transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:translate-x-4 group-hover:-translate-y-4 shadow-xl" />
          </Link>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-3xl mb-2">{projData.title}</h2>
        <div className="flex flex-wrap gap-2 mb-4">
  {projData.tags.map((tag, index) => {
    const [bgColor, Icon] = getTag(tag);
    return (
      <div
        key={index}
        className={`px-3 py-1 rounded-2xl text-white text-sm font-medium flex items-center gap-2 ${bgColor}`}
      >
        <Icon className="h-4 w-4" />
        <span>{tag}</span>
      </div>
    );
  })}
</div>
        <p>{projData.desc}</p>
      </div>
    </div>
  );
}

export default ProjCard;
