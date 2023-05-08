import Markdown from 'markdown-to-jsx';

export default function BlogContent(props) {
  return (
    <div className="w-5/6 md:w-1/2 mx-auto mt-84 md:mt-12">
      <h1 className="text-text-primary text-4xl font-bold">
        {props.meta.title}
      </h1>
      <p className="text-primary font-extralight mt-2">{props.meta.date}</p>
      <article className="text-text-secondary font-light">
        <Markdown className="markdown">{props.post.content}</Markdown>
      </article>
    </div>
  );
}
