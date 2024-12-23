import React from 'react'
import { projects, experiences } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'


const Projects = () => {
  return (
    <section className='max-container'>
       {/*Experience */}
      <div className='bg-sky-50 rounded-xl items-center pl-2'>
        <h1 className='head-text'>My <span className='teal-gradient_text'>Experience</span></h1>
        <div className='mt-4 flex flex-col gap-3 text-slate-500'>
          <p>As a new web developer, I’m just at the beginning of my journey, 
            and I’ve already completed one project.</p>
        </div>

        <div className='flex justify-center items-center gap-10 my-5'>
          {/* First Card (CoraZoneHealth) */}
          {experiences.map((experience) => (
            <div key={experience.name} className='relative mr-20 mb-2 bg-green-50 rounded-xl shadow-xl p-6 transition-transform transform hover:scale-105 hover:rotate-0'>
              {/* Card Back */}
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${experience.theme} shadow-md`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={experience.image}
                    alt='Experience Image'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className='mt-5 flex flex-col'>
                <h4 className='text-2xl font-poppins font-semibold'>{experience.name}</h4>
                <div className='mt-2 text-slate-500'>{experience.description}</div>


                {/* Website Link */}
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link
                    to={experience.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-blue-600'
                  >
                    Website Link
                  </Link>
                  <img
                    src={arrow}
                    alt='arrow'
                    className='w-4 h-4 object-contain'
                  />
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

          {/*Projects */}
        <div className='bg-violet-50 rounded-xl items-center pl-2'>
        <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>
      <div className='mt-4 flex flex-col gap-3 text-slate-500'>
        <p>
          I have developed a variety of projects both during my studies at Cornerstone and through independent practice. 
          Below is a list of these projects. Please feel free to review them. 
        </p>
      </div>
      <div className='flex flex-wrap my-5 gap-10'>
        {projects.map((project) => (
          <div className={`relative mr-20 mb-2 ${project.color} rounded-xl shadow-xl p-2 transition-transform transform hover:scale-105 hover:rotate-0`} key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='Project Icon'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>{project.name}</h4>
              <p className='mt-2 text-slate-500 '>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  GitHub Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
      
      <hr className='border-slate-200'/>
      <CTA />
    </section>
  )
}

export default Projects
