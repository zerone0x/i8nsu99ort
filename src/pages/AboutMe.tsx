import Image from "next/image";

function AboutMe() {
  return (
    <section id="aboutMe">
      <div className="mx-auto flex flex-col items-start gap-6 my-20 px-4 sm:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-4xl font-bold text-gray-800">⚡ About Me</h2>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/2">
            <Image
              src="/social/me.png"
              alt="dot"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
          <div className="flex-1">
      <p className="text-xl text-gray-600">
  Hey! I'm Manlun. I've been fascinated with computers from an early age, a passion ignited by countless hours spent playing sandbox games. These experiences steered me toward <span className="font-semibold">coding</span>, and today, I'm <span className="font-semibold">proficient in multiple programming languages and technologies</span>. I've honed my skills through various team roles in companies, constantly expanding my horizon.
</p>
<p className="text-xl text-gray-600">
  I am currently focused on <span className="font-semibold text-indigo-600">Web Development</span>, aiming to build <span className="font-semibold">innovative applications</span> and <span className="font-semibold">automate tasks</span> through efficient coding. When I'm not programming, you might find me skateboarding 🛹 with friends if the weather allows.
</p>
<p className="text-xl text-gray-600">
  I also have a keen interest in staying active and embrace the joy of <a href="https://zerone0x.github.io/running_page/" target="_blank" className="text-blue-500 hover:bg-gradient-to-r from-green-400 to-blue-500 hover:text-transparent hover:bg-clip-text hover:scale-105 transition duration-300">
  running
</a>. 
</p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

// https://runbeat.netlify.app/
