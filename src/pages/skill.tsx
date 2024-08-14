import Image from "next/image";
import { skillsData } from "../data/config";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 设置每个子元素之间的延迟
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // 初始状态
  show: { opacity: 1, y: 0 }, // 结束状态
};

function Skill() {
  return (
    <section id="skill" className="mx-auto my-20 px-4 sm:px-8 lg:max-w-7xl">
      <header className="text-4xl font-bold text-gray-800 mb-8">Skills</header>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        variants={containerVariants} // 应用父容器的变体
        initial="hidden" // 初始状态
        animate="show" // 动画状态
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow hover:motion-safe:animate-wiggle"
            variants={itemVariants} // 应用子元素的变体
          >
            <Image src={skill.src} alt={skill.alt} width={80} height={80} />
            <p className="mt-2 text-sm">{skill.alt}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skill;
