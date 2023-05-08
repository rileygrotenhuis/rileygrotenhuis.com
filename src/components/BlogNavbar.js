'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BlogNavbar() {
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
      <div className="flex justify-between py-8 px-12">
        <h1 className="text-primary text-2xl border-2 rounded-[100%] p-3 cursor-pointer">
          RG
        </h1>
        <Link
          href="/"
          className="text-primary border border-primary font-extralight my-auto py-2 px-4 rounded-md"
        >
          Back
        </Link>
      </div>
    </nav>
  );
}
