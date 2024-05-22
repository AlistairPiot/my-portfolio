import About from "../components/About";
import Banner from "../components/Banner";
import Nav from "../components/Nav";

function Home() {
    return (
        <div className="min-h-screen bg-sky-100 font-itim">
            <Nav />
            <Banner />
            <About />
        </div>
    );
}

export default Home;
