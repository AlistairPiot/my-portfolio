import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const HamburgerLine = `h-0.5 w-5 my-0.5 rounded-full bg-black transition ease transform duration-200`;

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between border-b-2 border-sky-950 bg-sky-200 p-4 font-bold text-sky-950">
            <h1 className="text-2xl">Alistair</h1>
            <button
                className="group flex flex-col items-center justify-center rounded border-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    className={`${HamburgerLine} ${
                        isOpen
                            ? "translate-y-1.5 rotate-45 opacity-100"
                            : "opacity-100"
                    }`}
                />
                <div
                    className={`${HamburgerLine} ${
                        isOpen ? "opacity-0" : "opacity-100"
                    }`}
                />
                <div
                    className={`${HamburgerLine} ${
                        isOpen
                            ? "-translate-y-1.5 -rotate-45 opacity-100"
                            : "opacity-100"
                    }`}
                />
            </button>
            <div
                className={`absolute right-0 top-full mt-1 flex w-48 flex-col items-center overflow-hidden rounded-bl-xl border border-gray-200 bg-stone-950/90 shadow-lg transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <a
                    href="#banner"
                    className="block px-4 py-2 text-sm text-sky-50 hover:text-sky-200"
                >
                    Home
                </a>
                <a
                    href="#project"
                    className="block px-4 py-2 text-sm text-sky-50 hover:text-sky-200"
                >
                    Projects
                </a>
                <a
                    href="#career"
                    className="block px-4 py-2 text-sm text-sky-50 hover:text-sky-200"
                >
                    Career
                </a>
                <a
                    href="#skills"
                    className="block px-4 py-2 text-sm text-sky-50 hover:text-sky-200"
                >
                    Skills
                </a>
                <a
                    href="#contact"
                    className="block px-4 py-2 text-sm text-sky-50 hover:text-sky-200"
                >
                    Contact
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
