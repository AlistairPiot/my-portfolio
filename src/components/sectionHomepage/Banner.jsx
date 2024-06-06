import svgGithub from "/icons/github-48px.svg";
import svgLinkedin from "/icons/linkedin-48px.svg";
import svgMe from "/images/alistair.svg";

function Main() {
    return (
        <div className="mt-14 flex size-full justify-center">
            <div className="flex h-80 w-10/12 flex-col items-center justify-center rounded-2xl bg-sky-900 text-sky-50 md:w-10/12 lg:w-6/12">
                <img className="mb-2 w-24" src={svgMe} alt="profil picture" />
                <h1 className="mb-0.5 text-4xl">Alistair Piot</h1>
                <h3 className="text-2xl">Frontend Dev</h3>
                <div className="mt-4 flex gap-4">
                    <a
                        href="https://www.linkedin.com/in/alistair-piot/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="w-12 cursor-pointer"
                            alt="linkedin icon"
                            src={svgLinkedin}
                        />
                    </a>
                    <a
                        href="https://github.com/AlistairPiot"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="w-12 cursor-pointer"
                            src={svgGithub}
                            alt="github icon"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Main;
