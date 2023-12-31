import React from 'react';
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../images/doctorsPortal/home.JPG'
import img2 from '../../../images/doctorsPortal/appoinntent.JPG'
import img3 from '../../../images/doctorsPortal/appoinntent2.JPG'
import img4 from '../../../images/doctorsPortal/appoinntent3.JPG'
import img5 from '../../../images/doctorsPortal/dashboard.JPG'
import Banner from './Banner';

const ProjectModel = ({ data }) => {
    const { _id, title, github, demo, details, topics, technologies, description, projectImg } = data
    const isDisabled = true;
    // console.log('ProjectModel',_id )
    return (
        <>
            {
                // projectImg && (
                //     <Carousel>
                //         {
                //             projectImg?.map((prjImg, _id) => (
                //                 <div>
                //                     <img src={prjImg} />
                //                 </div>
                //             ))
                //         }
                //     </Carousel>
                // )
                <Carousel>
                    {
                        projectImg?.map((prjImg, _id) => (
                            <div
                                key={_id}
                            >
                                <img src={prjImg} />
                            </div>
                        ))
                    }
                </Carousel>


            }
            <div><h3 className="modalTitle">{title}</h3></div>
            <h2>{description}</h2>
            <div className="tech  grid grid-cols-2 md:grid-cols-5 xl:grid-cols-8 gap-2 mt-4">
                {technologies?.map((technology, _id) => (
                    <span className="technology" key={_id}>
                        {technology + " "}
                    </span>
                ))}
            </div>

            <div className="projectDescription">
                {topics?.map((topic,  _id) => (
                    <span key={_id}>
                        <h2 className=''>{topic.topic} :</h2>
                        <h3>{topic?.topicDetails}</h3>
                    </span>
                ))}
            </div>

            <div className="modalBtns">
                <motion.button
                    whilehover={{ scale: 1.05 }}
                    whileTap={{ scale: 1 }}
                    className="btn"
                    onClick={() => (window.location.href = github)}
                >
                    GitHub
                </motion.button>

                <motion.button
                    whileHover={!isDisabled ? { scale: 1.05 } : undefined}
                    whileTap={!isDisabled ? { scale: 1 } : undefined}
                    className={`btn ${isDisabled ? 'disabled' : ''}`}
                    onClick={!isDisabled ? () => (window.location.href = demo) : undefined}
                    disabled={isDisabled}
                >
                    Live
                </motion.button>

            </div>

        </>

    );
};

export default ProjectModel;