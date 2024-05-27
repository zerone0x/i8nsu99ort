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
            <p className="text-lg text-gray-600">
              Hey! I'm Dot, I've been close to a computer since an early age,
              and been passionate about it ever since. I really liked to build
              stuff, I liked to play sandbox games, it points me to the
              direction of coding, fast-forward to today, I do programming in
              various languages and technologies, and had the experience of
              working in company teams to help me expand my horizon. I'm
              interested in building something awesome with code and automate
              tasks with code, currently focused on Web Development, When I'm
              not coding I play video games, watch some show on HBO, or if the
              weather's good, go skateboard with my friends ! 🛹
            </p>
            <a
              href="https://xx.netlify.app/"
              className="text-blue-500 underline mt-2 inline-block"
            >
              https://xx.netlify.app/
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

// https://runbeat.netlify.app/
