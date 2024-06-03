/* eslint-disable tailwindcss/no-custom-classname */
import { TbTargetArrow } from "react-icons/tb";
import emailIcon from "../assets/icons/email.svg";
import linkedinIcon from "../assets/icons/linkedin-48px.svg";

function Contact() {
    return (
        <div className="bg-sky-50 p-8 text-sky-950">
            <h2 className="mb-6 text-center text-3xl font-bold text-sky-950">
                Contact
            </h2>
            <div className="cards flex flex-col gap-6 text-sky-50">
                <div className="card-1 item-center flex flex-col items-center gap-2 rounded-2xl bg-sky-900 p-8">
                    <div className="containerIcon">
                        <img className="w-12" src={emailIcon}></img>
                        <p className="text-center">Email</p>
                    </div>
                    <div className="flex items-center gap-4 text-xl">
                        <p>By mail here</p>
                        <a
                            href="mailto:alistair.piot@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <TbTargetArrow className="cursor-pointer text-2xl" />
                        </a>
                    </div>
                </div>
                <div className="card-1 item-center flex flex-col items-center gap-2 rounded-2xl bg-sky-900 p-8">
                    <div className="containerIcon flex flex-col items-center">
                        <img className="w-12" src={linkedinIcon}></img>
                        <p className="text-center">Linkedin</p>
                    </div>
                    <div className="flex items-center gap-4 text-xl">
                        <p>Via Linkedin here</p>
                        <a
                            href="https://www.linkedin.com/in/alistair-piot/"
                            target="_blank"
                        >
                            <TbTargetArrow className="cursor-pointer text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
