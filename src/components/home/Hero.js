import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="w-5/6 md:w-4/6 mx-auto mt-8 md:mt-24 max-w-[1100px]">
      <span className="text-primary">Hi, my name is</span>
      <h1 className="text-text-primary text-5xl md:text-6xl font-bold mt-4">
        Riley Grotenhuis.
      </h1>
      <h2 className="text-text-secondary text-5xl md:text-6xl font-bold mt-4">
        I build things for the web.
      </h2>
      <p className="text-text-secondary font-extralight w-5/6 md:w-2/4 mt-8">
        I am a software engineer at
        <Link
          className="text-primary hover:underline"
          href="https://www.buildmidwestern.com"
          target="__blank"
        >
          {' '}
          Midwestern Interactive{' '}
        </Link>
        working towards our mission of serving each other, and serving our
        clients.
      </p>
      <div class="mt-4 flex gap-4">
        <Link href="https://github.com/rileygrotenhuis" target="__blank">
          <Image
            src="/images/GitHubLogo.svg"
            width={32}
            height={32}
            alt="GitHub"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/rileygrotenhuis"
          target="__blank"
        >
          <Image
            src="/images/LinkedInLogo.svg"
            width={32}
            height={32}
            alt="LinkedIn"
          />
        </Link>
        <Link href="https://www.twitter.com/rileygrotenhuis" target="__blank">
          <Image
            src="/images/TwitterLogo.svg"
            width={32}
            height={32}
            alt="Twitter"
          />
        </Link>
        <Link href="https://www.threads.net/@rileygrotenhuis" target="__blank">
          <Image
            src="/images/MetaLogo.svg"
            width={32}
            height={32}
            alt="Threads"
          />
        </Link>
      </div>
    </div>
  );
}
