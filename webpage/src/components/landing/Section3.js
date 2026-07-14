import React from 'react';
import { motion } from 'framer-motion';
import LandingCard from '@/components/LandingCard';

const howWeDoIt = [
  {
    title: '1. Discovery & Strategy',
    description:
      'We dive deep into your business goals, user needs, and technical landscape – defining a tailored roadmap that ensures alignment from day one.',
  },
  {
    title: '2. Agile Design & Prototyping',
    description:
      'Our designers craft intuitive interfaces and interactive prototypes, iterating rapidly with your feedback to validate ideas before development.',
  },
  {
    title: '3. Development Sprints',
    description:
      'Using agile methodologies, our engineers build your solution in short, transparent sprints – delivering functional increments every two weeks.',
  },
  {
    title: '4. Continuous Testing & QA',
    description:
      'Automated and manual testing run throughout development, ensuring reliability, security, and performance across all devices and browsers.',
  },
  {
    title: '5. Seamless Deployment',
    description:
      'We manage your cloud infrastructure and CI/CD pipelines, deploying updates with zero downtime and full rollback capabilities.',
  },
  {
    title: '6. Ongoing Evolution',
    description:
      'Post‑launch, we provide managed support, performance monitoring, and feature enhancements – helping your solution grow as your business scales.',
  },
];

function Section3() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full lg:container mx-auto flex flex-col items-center justify-center my-20"
    >
      <div className="flex flex-col w-full px-6 md:w-full md:px-10 md:py-10">
        <span className="text-lg accent-color">How we do it?</span>
        <p className="text-xl md:text-3xl w-full md:w-2/3 font-thin opacity-70">
          We combine remote‑first collaboration, agile delivery, and deep technical
          expertise to turn complex challenges into elegant, reliable solutions – 
          always with your business outcomes at the centre.
        </p>
      </div>

      {/* Optional background glow – you can keep or remove */}
      <div className="h-full w-full absolute flex items-center justify-center">
        <div className="h-64 w-64 light-color rounded-full blur-[210px]"></div>
      </div>

      <div className="relative w-full p-5 md:px-10 py-4 gap-4 lg:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {howWeDoIt.map((step, index) => (
          <LandingCard
            key={index}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Section3;