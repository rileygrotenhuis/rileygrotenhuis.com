import fs from 'fs';
import matter from 'gray-matter';
import SecondaryNavbar from '@/components/navigation/SecondaryNavbar';
import Link from 'next/link';
import Image from 'next/image';

const getPostMetaData = () => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
    };
  });

  return posts;
};

export default function Blog() {
  const posts = getPostMetaData();

  return (
    <>
      <SecondaryNavbar />
      <div className="w-5/6 md:w-[1000px] mx-auto mt-12">
        <div className="flex flex-wrap gap-8">
          {posts.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/blog/${item.slug}`}
                className="bg-background-secondary hover:shadow-xl transform hover:-translate-y-1 duration-300 hover:cursor-pointer text-text-secondary font-extralight px-4 py-8 rounded-lg w-72 flex flex-col gap-4 "
              >
                <Image src="/images/blog.svg" width={48} height={48} />
                <h3 className="text-text-primary hover:text-primary hover:cursor-pointer text-2xl font-normal">
                  {item.title}
                </h3>
                <p className="text-lg">{item.date}</p>
                <p>{item.subtitle}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
