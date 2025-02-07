/* eslint-disable react/no-unescaped-entities */
import { FaArrowDown } from "react-icons/fa6";
function About() {
    return (
        <div className="mb-10 flex size-full flex-col items-center justify-center text-sky-900 lg:mb-14">
            <p className="mt-14 flex w-10/12 items-center justify-center text-center text-2xl md:w-10/12">
                I'm 22yo, passionate about front-end development and UX/UI
                Design
            </p>
            <div className="my-10 w-11/12 border-b-2 border-sky-900 md:w-10/12 lg:w-8/12"></div>
            <div className="text-3xl">Scroll down</div>
            <FaArrowDown className="mt-4 text-3xl" />
        </div>
    );
}

export default About;
