import fs from 'fs';
import matter from 'gray-matter';
import SecondaryNavbar from '@/components/navigation/SecondaryNavbar';
import BlogContent from '@/components/blog/BlogContent';

const getPostContent = (slug) => {
  const folder = './posts/';
  const content = fs.readFileSync(`${folder}${slug}.md`, 'utf8');
  return matter(content);
};

const getPostMetaData = (slug) => {
  const folder = './posts/';
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
  const post = await getPostContent(slug);
  const meta = await getPostMetaData(slug);

  return (
    <>
      <SecondaryNavbar />
      <BlogContent post={post} meta={meta} />
    </>
  );
}
