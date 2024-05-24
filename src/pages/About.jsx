import React from 'react';
import { skills, experiences } from '../constants';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello I'm <span className='blue-gradient_text font-semibold drop-shadow'>Tom</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        As a web developer based in Vancouver, 
        I am continually enhancing my skills through hands-on learning by developing a variety of web projects. 
        This approach enables me to apply theoretical knowledge to practical scenarios, thereby refining my proficiency in web development.
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12 justify-center'>
          {skills.map((skill) => (
            <div key={skill.name} className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='py-16'>
        <h3 className='subhead-text'>Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        During my time at Cornerstone College, 
        I studied as a Full-Stack Developer. 
        Throughout my education, 
        I gained extensive experience in both front-end and back-end development. 
        I built various projects that allowed me to apply and enhance my technical skills. 
        Additionally, I collaborated with my classmates on multiple team projects, 
        which further honed my abilities and taught me the importance of teamwork in the software development process.
        </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) =>(
              <VerticalTimelineElement
                key={experience.project_name}
                date={experience.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.project_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                  }
                  iconStyle={{ background: experience.iconBg}}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base'
                      style={{margin: 0}}
                  >
                    {experience.project_name}</p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`} className='text-black-500/50 font-normal
                      pl-1 text-sm
                      '>
                        {point}
                      </li>
                    ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className='border-slate-200' />
      <CTA/>
    </section>
  );
}

export default About;
