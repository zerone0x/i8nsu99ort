import { MdWork } from "react-icons/md";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {ExperienceProp} from "../data/config"
function ExpCard({ expData }: {expData: ExperienceProp}) {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: "rgb(33, 150, 243)",
        color: "white",
        padding: "1.5rem",
        borderRadius: "8px",
      }}
      contentArrowStyle={{ borderRight: `7px solid green` }}
      date={expData.date}
      //   iconStyle={{
      //     background: 'rgb(33, 150, 243)',
      //     color: 'black',
      //     width: '48px',
      //     height: '48px',
      //     display: 'flex',
      //     alignItems: 'center',
      //     justifyContent: 'center',
      //     borderRadius: '50%',
      //   }}
      icon={<MdWork size={24} />}
    >
      <div>
        <h3 className="text-2xl font-bold mb-2">{expData.title}</h3>
        <h4 className="text-lg font-medium mb-4">
          {expData.companyName}, {expData.city}
        </h4>
        {
          expData.points.map((point, index) => (
            <p key={index} className="text-base mb-1">{point}</p>
          ))
        }
      </div>
    </VerticalTimelineElement>
  );
}

export default ExpCard;
