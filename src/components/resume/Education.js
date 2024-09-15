import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  const educationData = [
    {
      title: "MS in Information Security",
      subTitle: "NED University, Karachi (Present)",
      result: "Present",
      des: "Pursuing a Master’s degree focusing on advanced topics in Information Security."
    },
    {
      title: "BE in Telecommunication Engineering",
      subTitle: "Iqra University, Karachi (December 2018)",
      result: "3.1 CGPA",
      des: "Bachelor’s degree covering various aspects of Telecommunication Engineering."
    },
    {
      title: "Intermediate",
      subTitle: "SSAT Degree College, Karachi (2014)",
      result: "B Grade",
      des: "Completed intermediate education with a focus on pre-university subjects."
    },
    {
      title: "Matriculation",
      subTitle: "Pakistan Grammar School, Karachi (2012)",
      result: "B Grade",
      des: "Completed high school education with foundational subjects."
    }
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        {educationData.map((item, index) => (
          <ResumeCard
            key={index}
            title={item.title}
            subTitle={item.subTitle}
            result={item.result}
            des={item.des}
          />
        ))}
        </div>
      </div>
      {/* part Two */}
    </motion.div>
  );
}

export default Education