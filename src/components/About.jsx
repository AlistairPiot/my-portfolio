/* eslint-disable react/no-unescaped-entities */
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
    return (
        <div className="flex size-full flex-col items-center justify-center text-sky-900">
            <p className="mt-14 flex w-11/12 items-center justify-center text-center text-2xl">
                I'm 21yo, passionate about front-end development and UX/UI
                Design
            </p>
            <div className="my-10 w-11/12 border-b-2 border-sky-900"></div>
            <div className="text-3xl">Discover my projects</div>
            <FontAwesomeIcon className="mt-4 text-3xl" icon={faArrowDown} />
        </div>
    );
}

export default About;
