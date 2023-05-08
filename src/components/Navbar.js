'use client';

import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(-1);

  const sections = [
    {
      index: 0,
      sectionNumber: '01.',
      title: 'About',
      selector: 'about',
    },
    {
      index: 1,
      sectionNumber: '02.',
      title: 'Experience',
      selector: 'experience',
    },
    {
      index: 2,
      sectionNumber: '03.',
      title: 'Contact',
      selector: 'contact',
    },
  ];

  return (
    <nav>
      <div className="flex md:hidden justify-between py-8 px-12">
        <h1 className="text-primary text-2xl border-2 rounded-[100%] p-3 cursor-pointer">
          RG
        </h1>
        <div
          className={`absolute right-0 top-0 w-4/6 h-full bg-background-secondary ${
            !isMenuOpen ? 'hidden' : ''
          }`}
        >
          <button
            className="absolute top-12 right-12 flex flex-col items-center justify-center w-8 h-8 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="w-8 h-0.5 bg-primary rotate-45"></span>
            <span className="w-8 h-0.5 bg-primary -mt-0.5 -rotate-45"></span>
          </button>
          <ul className="text-text-primary font-extralight flex flex-col gap-8 my-auto text-lg mt-32 text-center">
            {sections.map((item, index) => {
              return (
                <ScrollLink
                  key={index}
                  to={item.selector}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setCurrentSection(item.index);
                  }}
                >
                  <li
                    className={`${
                      item.index === currentSection ? 'text-primary' : ''
                    } hover:text-primary hover:cursor-pointer my-auto flex flex-col`}
                  >
                    <span className="text-primary">{item.sectionNumber} </span>
                    {item.title}
                  </li>
                </ScrollLink>
              );
            })}
            <Link href="/blog/my-developer-journey">
              <li className="text-primary border border-primary font-extralight my-auto py-2 px-4 rounded-md w-32 mx-auto">
                My Blog!
              </li>
            </Link>
          </ul>
        </div>
        <div className={`my-auto ${isMenuOpen ? 'hidden' : ''}`}>
          <button
            className="flex flex-col gap-2 items-center justify-center w-8 h-8 rounded-md"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="w-8 h-0.5 bg-primary"></span>
            <span className="w-8 h-0.5 bg-primary"></span>
            <span className="w-8 h-0.5 bg-primary"></span>
          </button>
        </div>
      </div>
      <div className="hidden md:flex justify-between py-8 px-12">
        <h1 className="text-primary text-2xl border-2 rounded-[100%] p-3 cursor-pointer">
          RG
        </h1>
        <ul className="text-text-primary font-extralight flex gap-16 my-auto text-sm">
          {sections.map((item, index) => {
            return (
              <ScrollLink
                key={index}
                to={item.selector}
                smooth={true}
                duration={500}
                onClick={() => {
                  setCurrentSection(item.index);
                }}
                className="my-auto"
              >
                <li
                  className={`${
                    item.index === currentSection ? 'text-primary' : ''
                  } hover:text-primary hover:cursor-pointer`}
                >
                  <span className="text-primary">{item.sectionNumber} </span>
                  {item.title}
                </li>
              </ScrollLink>
            );
          })}
          <Link href="/blog/my-developer-journey">
            <li className="text-primary border border-primary font-extralight my-auto py-2 px-4 rounded-md">
              My Blog!
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
