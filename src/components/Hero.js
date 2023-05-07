export default function Hero() {
    return (
        <div className="border">
            <span className="text-primary">Hi, my name is</span>
            <h1 className="text-text-primary text-6xl font-bold">Riley Grotenhuis.</h1>
            <h2 className="text-text-secondary text-6xl font-bold">I build things for the web.</h2>
            <p className="text-text-secondary font-extralight w-2/4">
                I’m a software engineer specializing in building 
                exceptional digital experiences. Currently, I’m 
                focused on building accessible, human-centered 
                products at Upstatement.
            </p>
            <a href="https://github.com/rileygrotenhuis" target="__blank">
                <button className="border border-primary px-8 py-2 text-primary font-light rounded-md">
                    Check out my GitHub
                </button>
            </a>
        </div>
    )
}