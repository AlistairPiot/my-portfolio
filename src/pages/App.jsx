import Career from "../components/Career";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import About from "../components/sectionHomepage/About";
import Banner from "../components/sectionHomepage/Banner";
import ContainerProjects from "../components/sectionProjects/ContainerProjects";

function App() {
    return (
        <div className="m-0 box-border min-h-screen scroll-smooth bg-sky-100 p-0 font-itim">
            <Navbar />
            <Banner />
            <About />
            <ContainerProjects />
            <Career />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
