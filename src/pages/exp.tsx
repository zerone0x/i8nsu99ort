"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { expData } from "../data/config";
import { MdWork } from "react-icons/md";
import "../app/globals.css";
import ExpCard from "../components/ExpCard";

function Experience() {
  return (
    <section id="experience">
      {/* TODO  fix bg */}
      {/* <div className="bg-[#7ec6b5]"> */}
      <div className="mx-auto my-20 px-4 sm:px-8 lg:max-w-7xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Experience</h2>
        <VerticalTimeline>
          {expData.map((item, index) => (
            <ExpCard expData={item} key={index} />
          ))}
        </VerticalTimeline>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Experience;
