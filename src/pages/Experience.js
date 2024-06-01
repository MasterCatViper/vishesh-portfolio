import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Great Mission Public School,Ramnagar,Nainital
          </h3>
          <p> High School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Great Mission Public School,Ramnagar,Nainital
          </h3>

          <p>Secondary School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2018 - July 2018"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Trainee - NIT Bhopal
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bhopal, Madhya Pradesh
          </h4>
          <p>Trained under various Technologies such as MERN Stack,Big Data etc under Professor Akhtar Rasool</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2022 - Feb 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Associate Software Engineer - Accenture
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Gurugram, Haryana
          </h4>
          <p>
            Solved Complex Problems during ASE Program and Learned various Technologies such as ReactJS,NodeJS,SQL etc.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2023 and Apr 2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Selected as Specialist Programmer in Infosys (Joining Date - 13 February 2023 and 29 April 2024)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mysore, Karnataka
          </h4>
          <p>
            Solved Complex Coding Problems(Dynamic Programming,Greedy Algorithms etc.) during Online Assessment and Interview. 
          </p>
          <p> Didn't Join due some personal Reasons.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
/**imp        >
            <h3 className="vertical-timeline-element-title">
                MyRandom Public School,RandomNagar,Randomkhand
            </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2015"
 ort React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@material-ui/icons/School"
function Experience() {
  return (
    <div>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2015"
          iconStyle={{background: "#3e497a",colo: "#fff"}}
          icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">
                MyRandom Public School,RandomNagar,Randomkhand
            </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2015"
          iconStyle={{background: "#3e497a",colo: "#fff"}}
          icon={<SchoolIcon />}
         iconStyle={{background: "#3e497a",colo: "#fff"}}
          icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">
                MyRandom Public School,RandomNagar,Randomkhand
            </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2015"
          iconStyle={{background: "#3e497a",colo: "#fff"}}
          icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">
                MyRandom Public School,RandomNagar,Randomkhand
            </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
 */