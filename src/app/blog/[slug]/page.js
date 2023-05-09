import SecondaryNavbar from '@/components/navigation/SecondaryNavbar';
import BlogContent from '@/components/blog/BlogContent';
import prisma from '@/config/prisma';

const getPostData = async (slug) => {
  const post = await prisma.post.findFirst({
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return post;
};

export default async function BlogPost(props) {
  const post = await getPostData(props.params.slug);

  return (
    <>
      <SecondaryNavbar />
      <BlogContent post={post} />
    </>
  );
}
