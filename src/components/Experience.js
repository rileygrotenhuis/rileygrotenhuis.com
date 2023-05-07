'use client';

import { useState } from 'react';

export default function Experience() {
  const [experienceIndex, setExperienceIndex] = useState(0);

  const experience = [
    {
      index: 0,
      title: 'Software Engineer',
      company: 'Midwestern',
      company_url: 'https://www.buildmidwestern.com',
      dates: 'November 2021 - Present',
      description: [
        'Work alongside other engineers, designers, project managers and other creatives to provide an embedded teams solution for our clients',
        'Build and ship full stack applications for our clients using technologies like Laravel, Vue, React and many others to help solve their business requirements',
        'Assist other engineers with any technical knowledge or experience I have that may help guide them to better solve problems they are working on with their clients',
        'Run weekly group sessions where we improve our technical and professional skills as a software engineer by working on group programming and other engineering exercises in a collaboriative effort',
      ],
    },
    {
      index: 1,
      title: 'Student Web Developer',
      company: 'Missouri State',
      company_url: 'https://www.missouristate.edu/Web/default.htm',
      dates: 'January 2021 - November 2021',
      description: [
        'Developed internal tooling and web applications for Missouri State using .NET technologies that were used by thousands of students, faculty, and staff within the university limits',
        'Built and shipped an internal tool that migrated thousands of web component building blocks from one CMS to another, savings many hours of manual labor work from other student workers',
        'Collaborated closely with the Student Employment department to design and develop version 2 of their student worker onboarding and screening softwares',
      ],
    },
  ];

  return (
    <div
      id="experience"
      className="w-3/4 lg:w-1/2 mx-auto mt-72 flex flex-col gap-12"
    >
      <h3 className="text-text-primary text-3xl">
        <span className="text-primary text-xl">02. </span>
        Where I Have Worked
      </h3>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-row md:flex-col text-sm font-extralight">
          {experience.map((item, index) => {
            return (
              <button
                key={index}
                className={`cursor-pointer w-48 h-10 ${
                  item.index === experienceIndex
                    ? 'text-primary'
                    : 'text-text-secondary'
                } hover:text-primary border-l`}
                onClick={() => {
                  setExperienceIndex(item.index);
                }}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <div>
          <h3 className="text-text-primary text-lg">
            {experience[experienceIndex].title}
            <a
              href={experience[experienceIndex].company_url}
              target="__blank"
              className="text-primary"
            >
              {' '}
              @ {experience[experienceIndex].company}
            </a>
          </h3>
          <p className="text-text-secondary mt-2 text-sm font-extralight">
            {experience[experienceIndex].dates}
          </p>
          <ul className="flex flex-col gap-2 list-disc text-primary ml-4 mt-4">
            {experience[experienceIndex].description.map((item, index) => {
              return (
                <li key={index}>
                  <span className="text-text-secondary">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
