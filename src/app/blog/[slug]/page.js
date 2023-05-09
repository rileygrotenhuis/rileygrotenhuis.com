import fs from 'fs';
import matter from 'gray-matter';
import SecondaryNavbar from '@/components/navigation/SecondaryNavbar';
import BlogContent from '@/components/blog/BlogContent';

const getPostContent = async (slug) => {
  const folder = 'public/posts/';
  const content = fs.readFileSync(`${folder}${slug}.md`, 'utf8');
  return matter(content);
};

const getPostMetaData = async (slug) => {
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

export default async function BlogPost(props) {
  const slug = props.params.slug;
  const meta = await getPostMetaData(slug);
  const post = await getPostContent(slug);

  return (
    <>
      <SecondaryNavbar />
      <BlogContent post={post} meta={meta} />
    </>
  );
}
