import Image from "next/image";
import { SOCIALS } from "../data/config";
import socialIcons from "../assets/socialIcons";

function SocialInfo() {
  return (
    <div className="flex flex-wrap justify-center gap-1">
      {SOCIALS.filter((social) => social.active).map((social, index) => (
        <div key={index} className="p-2 hover:rotate-6 sm:p-1 space-x-2">
          <a href={social.href} title={social.linkTitle} target="_blank">
            <Image src={social.src} alt={social.name} width={20} height={20} />
          </a>
          {/* <span>{social.linkTitle}</span> */}
        </div>
      ))}
    </div>
  );
}

export default SocialInfo;
