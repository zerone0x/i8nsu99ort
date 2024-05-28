import Link from "next/link";
import SocialInfo from "../components/SocialInfo";
import "../app/globals.css";
import { RiMenu3Line } from "react-icons/ri";

function header() {
  return (
    <nav className="fixed top-0 z-20 w-full border-b-2 border-secondary-b bg-transparent py-5 backdrop-blur-lg backdrop-filter">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/">
          <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 cursor-pointer md:text-xl">
            trine.dev
          </p>
        </Link>
        <ul className="hidden md:flex list-none gap-4 md:gap-9">
          <li className="transition-colors hover:bg-gradient-to-r from-green-400 to-blue-500 hover:text-transparent hover:bg-clip-text">
            <Link href="#aboutMe">
              <p>About</p>
            </Link>
          </li>
          <li className="transition-colors hover:bg-gradient-to-r from-green-400 to-blue-500 hover:text-transparent hover:bg-clip-text">
            <Link href="#experience">
              <p>Experience</p>
            </Link>
          </li>
          <li className="transition-colors hover:bg-gradient-to-r from-green-400 to-blue-500 hover:text-transparent hover:bg-clip-text">
            <Link href="#project">
              <p>Project</p>
            </Link>
          </li>
          <li className="transition-colors hover:bg-gradient-to-r from-green-400 to-blue-500 hover:text-transparent hover:bg-clip-text">
            <Link href="#contact">
              <p>Contact</p>
            </Link>
          </li>
        </ul>
        {/* TODO make a popup menu  */}
        <div className="md:hidden">
          <RiMenu3Line size={24} className="text-black" />
        </div>
      </div>
    </nav>
  );
}

export default header;
