'use client';

import { useState } from 'react';

export default function Experience() {
  const [experienceIndex, setExperienceIndex] = useState(0);

  const experience = [
    {
      index: 0,
      title: 'Software Engineer',
      company: 'Midwestern Interactive',
      company_url: 'https://www.midwesterninteractive.com',
      dates: 'November 2021 - Present',
      description: [
        'Developed and styled interactive web applications for Apple Music using Ember and SCSS',
        'Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations',
        'Architected and implemented the user interface of Apple Music embeddable web player widget for in-browser user authorization and full song playback',
        'Contributed extensively to the creation of MusicKit JS, a public-facing JavaScript SDK for embedding Apple Music players into web applications',
      ],
    },
    {
      index: 1,
      title: 'Student Web Developer',
      company: 'Missouri State University',
      company_url: 'https://www.missouristate.edu',
      dates: 'January 2021 - November 2021',
      description: [
        'Developed and styled interactive web applications for Apple Music using Ember and SCSS',
        'Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations',
        'Architected and implemented the user interface of Apple Music embeddable web player widget for in-browser user authorization and full song playback',
        'Contributed extensively to the creation of MusicKit JS, a public-facing JavaScript SDK for embedding Apple Music players into web applications',
      ],
    },
  ];

  return (
    <div
      id="experience"
      className="w-3/4 md:w-1/2 mx-auto mt-72 flex flex-col gap-12"
    >
      <h3 className="text-text-primary text-3xl">
        <span className="text-primary text-xl">02. </span>
        Where I Have Worked
      </h3>
      <div className="flex gap-4">
        <div className="flex flex-col text-sm font-extralight">
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
