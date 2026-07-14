import React from 'react';
import { motion } from 'framer-motion';
import LandingCard from '@/components/LandingCard';

const services = [
  {
    title: 'Custom Software Development',
    description:
      'Tailored web and mobile applications built from the ground up to match your unique workflows, from MVP to fully scalable enterprise systems.',
  },
  {
    title: 'Intelligent Process Automation',
    description:
      'Automate repetitive tasks with RPA and workflow orchestration, reducing manual errors and freeing your team to focus on strategic initiatives.',
  },
  {
    title: 'Data Analytics & Business Intelligence',
    description:
      'Transform raw data into actionable insights through interactive dashboards, real‑time reporting, and custom analytics solutions.',
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    description:
      'Design secure, scalable, and cost‑optimised cloud architectures (AWS, Azure, GCP) with CI/CD pipelines for rapid, reliable deployments.',
  },
  {
    title: 'Legacy System Modernisation',
    description:
      'Safely migrate and refactor outdated systems to modern tech stacks, improving performance, security, and maintainability without disrupting operations.',
  },
];
function Section2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full lg:container mx-auto flex flex-col items-center justify-center my-20"
    >
      <div className="flex flex-col w-full px-6 md:w-full md:px-10 md:py-10">
        <span className="text-lg accent-color">What we do?</span>
        <p className="text-xl md:text-3xl w-full md:w-2/3 font-thin opacity-70">
          Operating as a fully remote firm, our dedicated team of expert engineers,
          project designers, and industry specialists delivers excellence from anywhere
          in the world, making high-impact technology accessible to growing businesses.
        </p>
      </div>

      <div className="h-full w-full absolute flex items-center justify-center">
        <div className="h-64 w-64 light-color rounded-full blur-[210px]"></div>
      </div>

      <div className="relative w-full p-5 md:px-10 py-4 gap-4 lg:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <LandingCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Section2;