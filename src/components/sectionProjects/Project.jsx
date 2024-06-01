/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import projectsData from "../../data/projects.json";

const Project = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const goToPreviousProject = () => {
        setCurrentProjectIndex(
            (currentProjectIndex - 1 + projectsData.projects.length) %
                projectsData.projects.length
        );
    };

    const goToNextProject = () => {
        setCurrentProjectIndex(
            (currentProjectIndex + 1) % projectsData.projects.length
        );
    };

    const currentProject = projectsData.projects[currentProjectIndex];

    return (
        <div className="carousel relative">
            <div className="carousel-card w-full">
                <img
                    src={currentProject.images[0]}
                    alt={currentProject.title}
                    className="h-44 w-96 rounded-2xl object-cover"
                />
            </div>
            <div className="mt-2 flex justify-around">
                <button
                    className="absolute left-8 rounded-full bg-transparent px-4 py-2 font-bold text-white hover:bg-gray-800"
                    onClick={goToPreviousProject}
                >
                    <FaArrowLeft />
                </button>
                <h3 className="mb-2 text-xl font-bold">
                    {currentProject.title}
                </h3>
                <button
                    className="absolute right-8 rounded-full bg-transparent px-4 py-2 font-bold text-white hover:bg-sky-950"
                    onClick={goToNextProject}
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Project;
