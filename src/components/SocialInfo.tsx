import Image from "next/image";
import { SOCIALS } from "../data/config";
import socialIcons from "../assets/socialIcons";

function SocialInfo() {
  return (
    <div className="flex flex-wrap justify-center gap-1">
      {SOCIALS.filter((social) => social.active).map((social) => (
        <a
          href={social.href}
          className="p-2 hover:rotate-6 sm:p-1"
          title={social.linkTitle}
        >
          <Image src={social.src} alt={social.name} width={20} height={20} />
          {/* <span>{social.linkTitle}</span> */}
        </a>
      ))}
    </div>
  );
}

export default SocialInfo;
