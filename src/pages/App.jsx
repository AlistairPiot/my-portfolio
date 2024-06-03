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
        <div className="m-0 box-border min-h-screen bg-sky-100 p-0 font-itim">
            <Navbar />
            <section id="banner">
                <Banner />
            </section>
            <About />
            <section id="project">
                <ContainerProjects />
            </section>
            <section id="career">
                <Career />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <Footer />
        </div>
    );
}

export default App;
