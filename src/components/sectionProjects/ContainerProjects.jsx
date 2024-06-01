import Project from "./Project";

const ContainerProjects = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-sky-900 p-8 text-white">
            <h2 className="mb-4 text-3xl font-bold">My projects</h2>
            <Project />
        </div>
    );
};

export default ContainerProjects;
