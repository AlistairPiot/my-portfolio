import cssIcon from "/icons/css-48.svg";
import figmaIcon from "/icons/figma-48px.svg";
import htmlIcon from "/icons/html-48px.svg";
import javascriptIcon from "/icons/javascript-48px.svg";
import reactIcon from "/icons/react-48px.svg";
import sassIcon from "/icons/sass-48px.svg";

function Skills() {
    return (
        <div className="bg-sky-900">
            <h2 className="mb-6 pt-8 text-center text-3xl font-bold text-sky-50">
                Skills
            </h2>
            <div className="flex size-full justify-center lg:pb-14">
                <div className="m-8 grid w-11/12 grid-cols-2 gap-8 rounded-2xl bg-sky-50 p-8 text-sky-950 md:w-10/12 lg:w-6/12">
                    <div className="flex flex-col items-center justify-center">
                        <img
                            className="size-12 md:size-14 lg:size-16"
                            src={htmlIcon}
                            alt="HTML"
                        ></img>
                        <p className="text-lg md:text-xl lg:text-2xl">HTML</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img
                            className="size-12 md:size-14 lg:size-16"
                            src={cssIcon}
                            alt="CSS"
                        ></img>
                        <p className="text-lg md:text-xl lg:text-2xl">CSS</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img
                            className="size-12 md:size-14 lg:size-16"
                            src={javascriptIcon}
                            alt="JavaScript"
                        ></img>
                        <p className="text-lg md:text-xl lg:text-2xl">
                            JavaScript
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img
                            className="size-12 md:size-14 lg:size-16"
                            src={reactIcon}
                            alt="React"
                        ></img>
                        <p className="text-lg md:text-xl lg:text-2xl">React</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img
                            className="size-12 md:size-14 lg:size-16"
                            src={sassIcon}
                            alt="Sass"
                        ></img>
                        <p className="text-lg md:text-xl lg:text-2xl">Sass</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img
                            className="size-12 md:size-14 lg:size-16"
                            src={figmaIcon}
                            alt="Figma"
                        ></img>
                        <p className="text-lg md:text-xl lg:text-2xl">Figma</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
