import cssIcon from "../../src/assets/icons/css-48.svg";
import figmaIcon from "../../src/assets/icons/figma-48px.svg";
import htmlIcon from "../../src/assets/icons/html-48px.svg";
import javascriptIcon from "../../src/assets/icons/javascript-48px.svg";
import reactIcon from "../../src/assets/icons/react-48px.svg";
import sassIcon from "../../src/assets/icons/sass-48px.svg";

function Skills() {
    return (
        <div className="bg-sky-900 p-8">
            <h2 className="mb-6 text-center text-3xl font-bold text-sky-50">
                Skills
            </h2>
            <div className="flex size-full justify-center">
                <div className="grid w-11/12 grid-cols-2 gap-8 rounded-2xl bg-sky-50 p-8 text-sky-950">
                    <div className="flex flex-col items-center justify-center">
                        <img
                            className="size-12"
                            src={htmlIcon}
                            alt="HTML"
                        ></img>
                        <p>HTML</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <img className="size-12" src={cssIcon} alt="CSS"></img>
                        <p>CSS</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img
                            className="size-12"
                            src={javascriptIcon}
                            alt="JavaScript"
                        ></img>
                        <p>JavaScript</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img
                            className="size-12"
                            src={reactIcon}
                            alt="React"
                        ></img>
                        <p>React</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img
                            className="size-12"
                            src={sassIcon}
                            alt="Sass"
                        ></img>
                        <p>Sass</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img
                            className="size-12"
                            src={figmaIcon}
                            alt="Figma"
                        ></img>
                        <p>Figma</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
