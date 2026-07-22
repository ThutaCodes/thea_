import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { Mail } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion"

function Section5() {
  const [formData, setFormData] = useState({
    company: '',
    contactName: '',
    email: '',
    phone: '',
    serviceType: '',
    projectDescription: '',
    budgetRange: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage('We will reach out to you soon!');
        setFormData({
          company: '',
          contactName: '',
          email: '',
          phone: '',
          serviceType: '',
          projectDescription: '',
          budgetRange: '',
          timeline: ''
        });
      } else {
        setSubmitMessage('Failed to submit quote. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
    <motion.div 
    id="contact"
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1}}
    className='relative w-full lg:container mx-auto flex flex-row items-center justify-center my-20 md:my-28'>
        <div className='absolute bottom-0 left-0 h-80 w-80 light-color rounded-full blur-[210px] -translate-x-1/2 translate-y-1/2 justify-center items-center'/>
        <div className='relative w-full p-5 md:px-10 py-4 gap-8 flex flex-col lg:flex-row'>
        <div className='flex flex-col gap-5 h-full w-full lg:w-1/3'>
            <span className='text-lg accent-color px-1'>
                Request a Quote
            </span>
            <div className='text-3xl md:text-5xl w-full font-thin'>
                Let's discuss your project
            </div>
            <div className='text-base md:text-lg w-full font-thin opacity-70 line-clamp-4'>
              Tell us about your project requirements and we'll provide a tailored quotation for your custom software, AI, or automation needs.
            </div>
            <a href='mailto:sales@theasolutions.co' className='group mt-3 flex items-center gap-3 rounded-xl border border-color transparent-white p-4 transition-colors hover:bg-white/10'>
              <span className='flex h-10 w-10 items-center justify-center rounded-full bg-[#5F1F2F]'>
                <Mail size={18} aria-hidden='true' />
              </span>
              <span className='min-w-0'>
                <span className='block text-sm opacity-60'>Sales &amp; project inquiries</span>
                <span className='block break-all text-base group-hover:underline'>sales@theasolutions.co</span>
              </span>
            </a>
        </div>
        <div className='w-full lg:w-2/3 border border-color backdrop-blur-xl transparent-white flex flex-col gap-y-4 p-4 md:p-8'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex flex-col gap-2'>
                <label className='paragraph-color text-sm'>Company Name</label>
                <input 
                  className='py-3 px-4 rounded-[8px] bg-gray-900/70 border border-gray-800 w-full paragraph-color' 
                  type='text' 
                  name='company'
                  value={formData.company}
                  onChange={handleChange}
                  placeholder='Your Company' 
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='paragraph-color text-sm'>Contact Name</label>
                <input 
                  className='py-3 px-4 rounded-[8px] bg-gray-900/70 border border-gray-800 w-full paragraph-color' 
                  type='text' 
                  name='contactName'
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder='Your Name' 
                />
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex flex-col gap-2'>
                <label className='paragraph-color text-sm'>Email Address</label>
                <input 
                  className='py-3 px-4 rounded-[8px] bg-gray-900/70 border border-gray-800 w-full paragraph-color' 
                  type='email' 
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='email@company.com' 
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='paragraph-color text-sm'>Mobile Phone (Optional)</label>
                <input 
                  className='py-3 px-4 rounded-[8px] bg-gray-900/70 border border-gray-800 w-full paragraph-color' 
                  type='tel' 
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='Your Phone Number' 
                />
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex flex-col gap-2'>
                <label className='paragraph-color text-sm'>Service Type</label>
                <select 
                  className='py-3 px-4 rounded-[8px] bg-gray-900/70 border border-gray-800 w-full paragraph-color'
                  name='serviceType'
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  <option value=''>Select a service</option>
                  <option value='software'>Custom Software Development</option>
                  <option value='ai'>AI Solutions</option>
                  <option value='automation'>Automation Solutions</option>
                  <option value='other'>Other</option>
                </select>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label className='paragraph-color text-sm'>Project Description</label>
              <textarea 
                className='py-3 px-4 rounded-[8px] bg-gray-900/70 border border-gray-800 w-full paragraph-color h-32 resize-none' 
                name='projectDescription'
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder='Describe your project requirements and goals...' 
              />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex flex-col gap-2'>
                <label className='paragraph-color text-sm'>Budget Range (Optional)</label>
                <select 
                  className='py-3 px-4 rounded-[8px] bg-gray-900/70 border border-gray-800 w-full paragraph-color'
                  name='budgetRange'
                  value={formData.budgetRange}
                  onChange={handleChange}
                >
                  <option value=''>Select budget range</option>
                  <option value='500-1k'>$500 - $1,000</option>
                  <option value='1k-3k'>$1,000 - $3,000</option>
                  <option value='3k-5k'>$3,000 - $5,000</option>
                  <option value='5k-10k'>$5,000 - $10,000</option>
                  <option value='10k+'>$10,000+</option>
                </select>
              </div>
              <div className='flex flex-col gap-2'>
                <label className='paragraph-color text-sm'>Timeline (Optional)</label>
                <select 
                  className='py-3 px-4 rounded-[8px] bg-gray-900/70 border border-gray-800 w-full paragraph-color'
                  name='timeline'
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value=''>Select timeline</option>
                  <option value='1-2months'>1-2 months</option>
                  <option value='2-4months'>2-4 months</option>
                  <option value='4-6months'>4-6 months</option>
                  <option value='6months+'>6+ months</option>
                </select>
              </div>
            </div>
            {submitMessage && (
              <div className={`text-sm ${submitMessage.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                {submitMessage}
              </div>
            )}
            <button 
              type='submit' 
              disabled={isSubmitting}
              className='py-3 px-6 rounded-[8px] bg-[#F1F1F0] text-[#1A1816] font-semibold w-fit disabled:opacity-50'
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        </div>
        </div>
    </motion.div>
    <motion.div 
    id="faqs"
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1}}
    className='relative w-full lg:container mx-auto flex flex-row items-center justify-center my-20 md:my-28'>
        <div className='relative w-full p-5 md:px-10 py-4 flex flex-col md:flex-row'>
        <div className='flex flex-col h-full w-full md:w-2/5'>
            <div className='text-3xl md:text-5xl w-full font-thin my-6 md:my-2'>
                Frequently asked Questions
            </div>
        </div>
        <div className='w-full md:w-3/5'>
          <Accordion type="single" collapsible  className="w-full">
            <AccordionItem  value="item-1" className='text-xl'>
              <AccordionTrigger>What services does Thea Solutions offer?</AccordionTrigger>
              <AccordionContent>
              We specialize in bespoke software development, enterprise-grade AI solutions, and intelligent automation engineered specifically for SMEs. Our services include custom software development, workflow optimization, AI integration, and automation solutions to help streamline operations and scale with confidence.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I know if my business needs AI and automation solutions?</AccordionTrigger>
              <AccordionContent>
                If you&apos;re facing manual bottlenecks, repetitive tasks slowing down operations, or looking to scale efficiently, our solutions can help. We identify areas where custom software and intelligent automation can eliminate inefficiencies and give you a competitive advantage.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I get started with Thea Solutions?</AccordionTrigger>
              <AccordionContent>
              Getting started is easy! Contact us through our website to schedule an initial consultation. We’ll discuss your business goals, assess your technology needs, and create a customized plan for software development, AI integration, or automation solutions tailored to your specific requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How long does a typical project take?</AccordionTrigger>
              <AccordionContent>
              Project timelines vary based on scope and complexity, from automation solutions taking a few weeks to comprehensive custom software development spanning several months. We provide clear timelines during our initial consultation based on your specific goals and technical requirements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        </div>
    </motion.div>
    </>
  )
}

export default Section5;
