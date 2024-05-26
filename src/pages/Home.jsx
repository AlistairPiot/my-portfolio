import About from "../components/About";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <div className="min-h-screen bg-sky-100 font-itim">
            <Navbar />
            <Banner />
            <About />
        </div>
    );
}

export default Home;
