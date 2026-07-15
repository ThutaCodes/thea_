import React from 'react';
import { motion } from 'framer-motion';
import LandingCard from '@/components/LandingCard';

const howWeDoIt = [
  {
    title: '1. Discovery & Strategy',
    description:
      'We understand your business and develop a clear, strategic plan aligned with your vision for success.',
  },
  {
    title: '2. Design & Previews',
    description:
      'We create interactive previews to visualize and refine your solution, ensuring it meets your expectations.',
  },
  {
    title: '3. Building in Phases',
    description:
      'We deliver your project in focused phases with regular updates every two weeks for full transparency.',
  },
  {
    title: '4. Testing & Quality',
    description:
      'We conduct thorough testing to ensure your solution is secure, reliable, and performs flawlessly.',
  },
  {
    title: '5. Smooth Launch',
    description:
      'We manage deployment for a seamless launch with zero disruption and built-in recovery safeguards.',
  },
  {
    title: '6. Ongoing Growth',
    description:
      'We provide ongoing support, monitoring, and enhancements to help your solution evolve with your business.',
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