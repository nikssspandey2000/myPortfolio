import React from "react";
import { CiApple } from "react-icons/ci";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { FaSchool, FaBriefcase } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";

const Timeline = () => {
  return (
    <>
      <VerticalTimeline lineColor="rgba(245, 151, 79, 0.52)">
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Articleship</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bidur Associates
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018-2023"
          iconStyle={{ background: "orange", color: "#fff" }}
          icon={<FaUserGraduate />}
        >
          <h3 className="vertical-timeline-element-title">BBS</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2018"
          iconStyle={{ background: "orange", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">HSEB</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Universal College
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2005 - 2015"
          iconStyle={{ background: "orange", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">School</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Siddhasthali English Boarding Higher Secondary School
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<CiApple />}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
   */}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<CiApple />}
        />
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
