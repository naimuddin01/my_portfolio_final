import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";
import './resume.css'

const Resume = ({ brand }) => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <div className="resumeContainer">
      <section id="resume" className="container resume w-full border-b-[3px] border-b-black" >
        <div className="resume2">
          <PageHeader title="Resume" description="Experience in Focus" />
        </div>
        <div className="justify-center items-center text-center mb-4">
          <h3>18+ YEARS OF ACADEMIC AND WORK EXPERIENCE</h3>
        </div>
        <div className="justify-center items-center text-center container2">

          <ul className=" w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
            <li
              onClick={() =>
                setEducationData(true) &
                setSkillData(false) &
                setExperienceData(false) &
                setAchievementData(false)
              }
              className={`${educationData
                ? "bg-black bg-opacity-25"
                : ""
                }w-full h-20  text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rounded-none`}
            >
              Education
            </li>
            <li
              onClick={() =>
                setEducationData(false) &
                setSkillData(true) &
                setExperienceData(false) &
                setAchievementData(false)
              }
              className={`${skillData ? "bg-black bg-opacity-25" : ""
                }w-full h-20  text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rounded-none`}
            >
              Professional Skills
            </li>
            
          </ul>
        </div>
        {educationData && <Education></Education>}
        {skillData && <Skills />}
        {/* {achievementData && <Achievement />} */}
        {/* {experienceData && <Experience />} */}
      </section>
    </div>

  );
};

export default Resume;
