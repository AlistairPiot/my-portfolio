import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    return (
        <nav className="bg-bgSecondary text-colorMain border-b-2 flex justify-between items-center p-4">
            <h1 className="text-2xl">Alistair</h1>
            <FontAwesomeIcon icon={faBars} />
        </nav>
    );
};

export default Nav;
