import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';

const getPostContent = (slug) => {
  const folder = 'public/posts/';
  const content = fs.readFileSync(`${folder}${slug}.md`, 'utf8');
  return matter(content);
};

const getPostMetaData = (slug) => {
  const folder = 'public/posts/';
  const content = fs.readFileSync(`${folder}${slug}.md`, 'utf8');
  const metaData = matter(content);
  return {
    title: metaData.data.title,
    date: metaData.data.date,
    subtitle: metaData.data.subtitle,
    slug: slug.replace('.md', ''),
  };
};

export default function BlogContent(props) {
  const post = getPostContent(props.params.slug);
  const meta = getPostMetaData(props.params.slug);

  return (
    <div className="w-5/6 md:w-1/2 mx-auto mt-84 md:mt-12">
      <div className="flex justify-between">
        <h1 className="text-text-primary text-4xl font-bold mt-4">
          {meta.title}
        </h1>
        <Link
          href="/blog"
          className="text-text-secondary border border-text-secondary font-extralight px-4 py-1 rounded-md my-auto h-auto"
        >
          Back
        </Link>
      </div>
      <p className="text-primary font-extralight mt-2">{meta.date}</p>
      <article className="text-text-secondary font-light">
        <Markdown className="markdown">{post.content}</Markdown>
      </article>
    </div>
  );
}
