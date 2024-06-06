import Project from "./Project";

const ContainerProjects = () => {
    return (
        <div className="flex flex-col items-center bg-sky-900 text-sky-50">
            <div className="p-8">
                <h2 className="mb-6 text-center text-3xl font-bold">
                    My Projects
                </h2>
                <Project />
            </div>
            <div className="w-11/12 border-b-2 border-sky-50 md:w-10/12 lg:w-8/12"></div>
        </div>
    );
};

export default ContainerProjects;
