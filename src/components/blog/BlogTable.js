import Link from 'next/link';
import Image from 'next/image';

export default function BlogTable(props) {
  return (
    <div className="w-5/6 md:w-[1000px] mx-auto mt-12">
      <div className="flex flex-wrap gap-8">
        {props.posts.map((item, index) => {
          return (
            <Link
              key={index}
              href={`/blog/${item.slug}`}
              className="bg-background-secondary hover:shadow-xl transform hover:-translate-y-1 duration-300 hover:cursor-pointer text-text-secondary font-extralight px-4 py-8 rounded-lg w-72 flex flex-col gap-4 mx-auto"
            >
              <Image
                src="/images/BlogLogo.svg"
                width={48}
                height={48}
                alt="BlogPost"
              />
              <h3 className="text-text-primary hover:text-primary hover:cursor-pointer text-2xl font-normal">
                {item.title}
              </h3>
              <p className="text-lg text-primary">{item.published}</p>
              <p>{item.subtitle}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
