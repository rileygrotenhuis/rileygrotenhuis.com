import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';

const getPostContent = (slug) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

const getPostMeta = (slug) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');

  const matterResult = matter(content);

  return {
    title: matterResult.data.title,
    date: matterResult.data.date,
    subtitle: matterResult.data.subtitle,
    slug: slug.replace('.md', ''),
  };
};

export default function BlogPost(props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const meta = getPostMeta(slug);

  return (
    <div className="w-5/6 md:w-1/2 mx-auto mt-84 md:mt-12">
      <h3 className="text-text-primary text-4xl font-bold">{meta.title}</h3>
      <p className="text-primary font-extralight mt-2">{meta.date}</p>
      <article className="text-text-secondary font-light">
        <Markdown className="markdown">{post.content}</Markdown>
      </article>
    </div>
  );
}
