import SecondaryNavbar from '@/components/navigation/SecondaryNavbar';
import BlogTable from '@/components/blog/BlogTable';
import prisma from '@/config/prisma';

const getPostData = async () => {
  const posts = await prisma.post.findMany();

  return posts;
};

export default async function Blog() {
  const posts = await getPostData();

  return (
    <>
      <SecondaryNavbar />
      <BlogTable posts={posts} />
    </>
  );
}
