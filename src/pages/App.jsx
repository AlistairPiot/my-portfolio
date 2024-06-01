import Navbar from "../components/Navbar";
import About from "../components/sectionHomepage/About";
import Banner from "../components/sectionHomepage/Banner";
import ContainerProjects from "../components/sectionProjects/ContainerProjects";

function App() {
    return (
        <div className="min-h-screen bg-sky-100 font-itim">
            <Navbar />
            <Banner />
            <About />
            <ContainerProjects />
        </div>
    );
}

export default App;
