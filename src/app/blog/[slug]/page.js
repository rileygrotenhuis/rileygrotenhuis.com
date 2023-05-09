import fs from 'fs';
import matter from 'gray-matter';
import SecondaryNavbar from '@/components/navigation/SecondaryNavbar';
import BlogContent from '@/components/blog/BlogContent';

const getPostContent = (slug) => {
  const folder = 'public/posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.startsWith(slug) && file.endsWith('.md'));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`public/posts/${fileName}`, 'utf8');
    return matter(fileContents);
  })

  return posts[0];
};

const getPostMetaData = (slug) => {
  const folder = 'public/posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.startsWith(slug) && file.endsWith('.md'));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`public/posts/${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
    };
  });

  return posts[0];
};

export default function BlogPost(props) {
  const slug = props.params.slug;
  const meta = getPostMetaData(slug);
  const post = getPostContent(slug);

  return (
    <>
      <SecondaryNavbar />
      <BlogContent post={post} meta={meta} />
    </>
  );
}
