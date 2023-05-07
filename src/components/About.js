import Image from 'next/image';

export default function About() {
  return (
    <div
      id="hero"
      className="w-3/4 md:w-7/12 mx-auto mt-72 flex flex-col md:flex-row gap-16"
    >
      <div className="my-auto flex flex-col gap-8">
        <h3 className="text-text-primary text-3xl">
          <span className="text-primary">01. </span>
          About Me
        </h3>
        <div className="flex flex-col gap-4">
          <p className="text-text-secondary leading-6">
            Hello! My name is Riley and I enjoy creating things that live on the
            internet. My interest in web development started back in 2015 when I
            decided to take my first computer science class in high school.
            Since then I have fallen down the software engineer rabbit hole!
          </p>
          <p className="text-text-secondary leading-6">
            Fast-forward to today, and I have had the privilege of working at a
            public 4-year university (
            <span className="text-primary">Missouri State University</span>)
            which has lead me to where I am currently employed at
            <span className="text-primary"> Midwestern Interactive</span>
          </p>
          <p className="text-text-secondary leading-6">
            I also am in the process of building up some side projects for
            consumer use, be on the lookout for updates regarding that!
          </p>
          <p className="text-text-secondary leading-6">
            Here are a few technologies I have been working with recently:
          </p>
          <div className="flex gap-32 text-text-secondary ml-4">
            <ul className="list-disc text-primary">
              <li>
                <span className="text-text-secondary">Javascript</span>
              </li>
              <li>
                <span className="text-text-secondary">Next.js</span>
              </li>
              <li>
                <span className="text-text-secondary">TailwindCSS</span>
              </li>
            </ul>
            <ul className="list-disc text-primary">
              <li>
                <span className="text-text-secondary">TypeScript</span>
              </li>
              <li>
                <span className="text-text-secondary">PHP</span>
              </li>
              <li>
                <span className="text-text-secondary">Laravel</span>
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
          src="/Profile.jpeg"
          alt="Profile_Image"
        />
      </div>
    </div>
  );
}
