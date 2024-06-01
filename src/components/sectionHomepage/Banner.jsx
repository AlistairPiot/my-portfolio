import svgGithub from "../../assets/icons/github-48px.svg";
import svgLinkedin from "../../assets/icons/linkedin-48px.svg";
import svgMe from "../../assets/images/imgMe.svg";

function Main() {
    return (
        <div className="mt-14 flex size-full justify-center">
            <div className="flex h-80 w-11/12 flex-col items-center justify-center rounded-2xl bg-sky-900 text-sky-50">
                <img className="mb-2 w-24" src={svgMe} />
                <h1 className="mb-0.5 text-4xl">Alistair Piot</h1>
                <h3 className="text-2xl">Frontend Dev</h3>
                <div className="mt-4 flex gap-4">
                    <a href="https://www.linkedin.com/in/alistair-piot/">
                        <img
                            className="w-12 cursor-pointer"
                            src={svgLinkedin}
                        />
                    </a>
                    <a href="https://github.com/AlistairPiot">
                        <img className="w-12 cursor-pointer" src={svgGithub} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Main;
