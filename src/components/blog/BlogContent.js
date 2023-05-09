import Markdown from 'markdown-to-jsx';
import Link from 'next/link';

export default function BlogContent(props) {
  return (
    <div className="w-5/6 md:w-1/2 mx-auto mt-84 md:mt-12">
      <div className="flex justify-between">
        <h1 className="text-text-primary text-4xl font-bold mt-4">
          {props.post.title}
        </h1>
        <Link
          href="/blog"
          className="text-text-secondary border border-text-secondary font-extralight px-4 py-1 rounded-md my-auto h-auto"
        >
          Back
        </Link>
      </div>
      <p className="text-primary font-extralight mt-2">
        {props.post.published}
      </p>
      <article className="text-text-secondary font-light">
        <Markdown className="markdown">{props.post.content}</Markdown>
      </article>
    </div>
  );
}
