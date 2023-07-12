import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div
      id="about"
      className="w-3/4 lg:w-7/12 mx-auto mt-72 flex flex-col md:flex-row gap-16 xl:mt-96 max-w-[1000px]"
    >
      <div className="my-auto flex flex-col gap-8">
        <h3 className="text-text-primary text-3xl">
          <span className="text-primary text-xl">01. </span>
          About Me
        </h3>
        <div className="flex flex-col gap-4">
          <p className="text-text-secondary leading-6">
            Hi! My name is Riley and I love all things web development. My
            interest in programming started back in 2015 when I decided to take
            my first computer science course in high school. Since then I have
            done extensive self learning and spent some time at Missouri State
            University studying computer science.
          </p>
          <p className="text-text-secondary leading-6">
            I have had the privilege of working at
            <Link
              className="text-primary hover:underline"
              href="https://www.missouristate.edu/Web/default.htm"
              target="__blank"
            >
              {' '}
              Missouri State University{' '}
            </Link>
            as a student web developer where I worked on a lot of their internal
            tooling as well as various web applications. Fast forward to today,
            I have put a halt on my formal education and my main focus today is
            building full stack applications at
            <Link
              className="text-primary hover:underline"
              href="https://www.buildmidwestern.com"
              target="__blank"
            >
              {' '}
              Midwestern Interactive{' '}
            </Link>
            for our various amounts of clients.
          </p>
          <p className="text-text-secondary leading-6">
            You can learn a little bit more about me and my journey as a
            developer here in this
            <Link
              className="text-primary hover:underline"
              href="/blog/my-developer-journey"
              target="__blank"
            >
              {' '}
              blog post
            </Link>
            !
          </p>
          <p className="text-text-secondary leading-6">
            Here are a few technologies I have been working with recently:
          </p>
          <div className="flex gap-32 text-text-secondary ml-4">
            <ul className="list-disc text-primary">
              <li>
                <span className="text-text-secondary">PHP</span>
              </li>
              <li>
                <span className="text-text-secondary">Laravel</span>
              </li>
              <li>
                <span className="text-text-secondary">React</span>
              </li>
              <li>
                <span className="text-text-secondary">TailwindCSS</span>
              </li>
            </ul>
            <ul className="list-disc text-primary">
              <li>
                <span className="text-text-secondary">Javascript</span>
              </li>
              <li>
                <span className="text-text-secondary">InertiaJS</span>
              </li>
              <li>
                <span className="text-text-secondary">Vue</span>
              </li>
              <li>
                <span className="text-text-secondary">SQL</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="m-auto">
        <Image
          width={1500}
          height={1500}
          className="rounded-md"
          src="/images/profile.jpeg"
          alt="Profile_Image"
        />
      </div>
    </div>
  );
}
