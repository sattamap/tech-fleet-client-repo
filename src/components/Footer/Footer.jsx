import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Footer = () => {
  const { isDarkMode } = useContext(AuthContext);

  const footerClass = isDarkMode ? "bg-gray-700 text-base-100" : "bg-[#333] text-base-content";
  const titleClass = isDarkMode ? "text-white" : "text-black";
  const linkClass = isDarkMode ? "link link-hover text-emerald-600" : "link link-hover text-blue-600";

  return (
    <div>
      <footer className={footerClass + " mt-28"}>
        <div className="footer justify-around p-10 px-32">
          <aside>
            <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current">
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.840-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842-2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841-2.517 2.431-.81c-1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c-1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847"/>
            </svg>
            <p className={`text-2xl font-extrabold ${titleClass}`}>Tech<span className="text-emerald-600">Fleet</span></p>
          </aside>
          <nav>
            <header className={`footer-title ${titleClass}`}>Services</header>
            <a className={`link link-hover ${linkClass}`}>Products</a>
            <a className={`link link-hover ${linkClass}`}>Upcoming</a>
            <a className={`link link-hover ${linkClass}`}>Marketing</a>
            <a className={`link link-hover ${linkClass}`}>Advertisement</a>
          </nav>
          <nav>
            <header className={`footer-title ${titleClass}`}>Company</header>
            <a className={`link link-hover ${linkClass}`}>About us</a>
            <a className={`link link-hover ${linkClass}`}>Contact</a>
            <a className={`link link-hover ${linkClass}`}>Jobs</a>
            <a className={`link link-hover ${linkClass}`}>Press kit</a>
          </nav>
          <nav>
            <header className={`footer-title ${titleClass}`}>Legal</header>
            <a className={`link link-hover ${linkClass}`}>Terms of use</a>
            <a className={`link link-hover ${linkClass}`}>Privacy policy</a>
            <a className={`link link-hover ${linkClass}`}>Cookie policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
