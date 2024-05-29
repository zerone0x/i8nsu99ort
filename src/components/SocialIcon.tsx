import Image from "next/image";
import { SOCIALS } from "../data/config";
import socialIcons from "../assets/socialIcons";

function SocialIcon() {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-7">
      {SOCIALS.filter((social) => social.active).map((social, index) => (
        <div key={index} className="p-3 hover:motion-safe:rotate-6 sm:p-1 ">
          <a href={social.href} title={social.linkTitle} target="_blank">
            <Image src={social.src} alt={social.name} width={40} height={40} />
          </a>
          {/* <span>{social.linkTitle}</span> */}
        </div>
      ))}
    </div>
  );
}

export default SocialIcon;
