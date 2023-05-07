export default function Contact() {
  return (
    <div
      id="contact"
      className="w-3/4 lg:w-[550px] text-center mx-auto mt-72 font-extralight"
    >
      <p className="text-primary text-lg">03. What Next?</p>
      <h3 className="text-5xl text-text-primary mt-4 font-bold">
        Get In Touch
      </h3>
      <p className="text-text-secondary mt-4">
        Although I am not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I
        will try my best to get back to you!
      </p>
      <a href="mailto: abc@example.com">
        <button className="py-4 px-8 mt-8 rounded-md border border-primary text-lg font-extralight text-primary">
          Say Hello
        </button>
      </a>
    </div>
  );
}
