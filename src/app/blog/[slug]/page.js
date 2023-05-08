import fs from 'fs';
import matter from 'gray-matter';
import SecondaryNavbar from '@/components/navigation/SecondaryNavbar';
import BlogContent from '@/components/blog/BlogContent';

const getPostContent = (slug) => {
  const content = fs.readFileSync(`posts/${slug}.md`, 'utf8');
  return matter(content);
};

const getPostMetaData = (slug) => {
  const content = fs.readFileSync(`posts/${slug}.md`, 'utf8');

  const metaData = matter(content);

  return {
    title: metaData.data.title,
    date: metaData.data.date,
    subtitle: metaData.data.subtitle,
    slug: slug.replace('.md', ''),
  };
};

export default function BlogPost(props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const meta = getPostMetaData(slug);

  return (
    <>
      <SecondaryNavbar />
      <BlogContent post={post} meta={meta} />
    </>
  );
}
