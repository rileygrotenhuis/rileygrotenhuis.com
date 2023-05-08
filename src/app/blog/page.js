import SecondaryNavbar from '@/components/navigation/SecondaryNavbar';
import Link from 'next/link';
import Image from 'next/image';

export default function Blog() {
  return (
    <>
      <SecondaryNavbar />
      <div className="w-5/6 md:w-7/12 mx-auto mt-12">
        <Link 
          href="/blog/my-developer-journey" 
          className="bg-background-secondary hover:shadow-xl transform hover:-translate-y-1 duration-300 hover:cursor-pointer text-text-secondary font-extralight px-4 py-8 rounded-lg w-72 flex flex-col gap-4 "
        >
          <Image 
            src="/images/blog.svg"
            width={48}
            height={48}
          />
          <h3 className="text-text-primary hover:text-primary hover:cursor-pointer text-2xl font-normal">My Developer Journey</h3>
          <p className="text-lg">May 8, 2023</p>
          <p>An in-depth look on my journey as a developer and what got me to where I am today.</p>
        </Link>
      </div>
    </>
  );
}
