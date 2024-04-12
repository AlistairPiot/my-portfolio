import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
    return (
        <nav className="flex items-center justify-between border-b-2 border-sky-950 bg-sky-200 p-4 font-bold text-sky-950">
            <h1 className="text-2xl">Alistair</h1>
            <FontAwesomeIcon icon={faBars} />
        </nav>
    );
};

export default Nav;
