/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import projectsData from "../../data/projects.json";

const Project = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToPreviousProject = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentProjectIndex(
                (currentProjectIndex - 1 + projectsData.projects.length) %
                    projectsData.projects.length
            );
            setTimeout(() => {
                setIsTransitioning(false);
            }, 100); // Duration of the transition
        }, 100); // Duration of the transition
    };

    const goToNextProject = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentProjectIndex(
                (currentProjectIndex + 1) % projectsData.projects.length
            );
            setTimeout(() => {
                setIsTransitioning(false);
            }, 100); // Duration of the transition
        }, 100); // Duration of the transition
    };

    const currentProject = projectsData.projects[currentProjectIndex];

    return (
        <div className="carousel relative">
            <a
                href={currentProject.link[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <div
                    className={`carousel-card group relative w-full transition-opacity duration-300 ${
                        isTransitioning ? "opacity-0" : "opacity-100"
                    }`}
                >
                    <img
                        src={currentProject.images[0]}
                        alt={currentProject.title}
                        className="h-44 w-96 rounded-2xl object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <p className="text-sky-50">
                            {currentProject.description}
                        </p>
                    </div>
                    <div className="absolute bottom-2 right-2 flex space-x-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {currentProject.icons.map((icon, index) => (
                            <img
                                key={index}
                                src={icon}
                                alt={`icon-${index}`}
                                className="size-6"
                            />
                        ))}
                    </div>
                </div>
            </a>
            <div className="mt-2 flex justify-around">
                <button
                    className="absolute left-8 rounded-full bg-transparent px-4 py-2 font-bold text-sky-50 hover:bg-gray-800"
                    onClick={goToPreviousProject}
                >
                    <FaArrowLeft />
                </button>
                <h3 className="mb-2 text-xl">{currentProject.title}</h3>
                <button
                    className="absolute right-8 rounded-full bg-transparent px-4 py-2 font-bold text-sky-50 hover:bg-sky-950"
                    onClick={goToNextProject}
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Project;
