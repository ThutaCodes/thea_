import React from 'react';
import { motion } from 'framer-motion';
import LandingCard from '@/components/LandingCard';

const services = [
  {
    title: 'Custom Software Development',
    description:
      'We design and build custom web and mobile applications that scale seamlessly as your business evolves.',
  },
  {
    title: 'Intelligent Process Automation',
    description:
      'We automate your routine tasks, reducing errors and giving your team more time for the work that truly matters.',
  },
  {
    title: 'Data Analytics & Business Intelligence',
    description:
      'We transform your data into clear, real-time insights that guide smarter, more confident business decisions.',
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    description:
      'We manage your cloud infrastructure so you can scale your operations effortlessly without worrying about the backend.',
  },
  {
    title: 'Legacy System Modernisation',
    description:
      'We modernise your outdated systems, unlocking better security and performance without disrupting your business flow.',
  },
  {
    title: 'AI & Machine Learning Integration',
    description:
      'We add intelligent automation to your operations, helping you predict trends and work more efficiently.',
  },
];

function Section2() {
  return (
    <motion.div
      id="services"
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