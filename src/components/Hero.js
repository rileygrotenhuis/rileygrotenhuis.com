export default function Hero() {
    return (
        <div className="mt-24">
            <span className="text-primary">Hi, my name is</span>
            <h1 className="text-text-primary text-5xl md:text-6xl font-bold mt-4">Riley Grotenhuis.</h1>
            <h2 className="text-text-secondary text-5xl md:text-6xl font-bold mt-4">I build things for the web.</h2>
            <p className="text-text-secondary font-extralight w-5/6 md:w-2/4 mt-8">
                I am a software engineer at
                <a className="text-primary hover:underline" href="https://www.midwesterninteractive.com" target="__blank"> Midwestern Interactive </a>
                working towards our mission of serving each other,
                and serving our clients.
            </p>
            <a href="https://github.com/rileygrotenhuis" target="__blank">
                <button className="border border-primary px-8 py-4 text-primary font-extralight rounded-md mt-8">
                    Check out my GitHub!
                </button>
            </a>
        </div>
    )
}