import { useState, useEffect } from "react";
import burger from "~/assets/icon-burger.svg";
import company_profile from "~/assets/company.svg";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    // Adjust the value based on when you want the header to become sticky
    if (offset > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      {/* HEADER */}
      <div
        className={`${isSticky ? "fixed bg-gradient-to-b from-[#1BA0E1] to-[#7fbff0] text-black shadow-lg" : "relative bg-transparent text-white"} transition-all duration-300 flex w-full h-[3.75rem] items-center px-6 z-[3]`}
      >
        <a href="/">
          <img src={company_profile} alt="Company Profile" className={`${isSticky ? "bg-gradient-to-b from-gray-100 to-gray-300 rounded-full shadow-lg px-1" : "bg-transparent"}`} />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto md:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <img src={burger} className="w-6 h-auto" alt="Mobile Menu" />
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-[#53A7E9] bg-opacity-95 z-[4]">
            {/* Close button with styling */}
            <button
              className="absolute top-4 right-4 text-white bg-transparent border-none text-4xl cursor-pointer"
              onClick={closeMobileMenu}
            >
              &times;
            </button>

            {/* Centered mobile menu items */}
            <ul className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 text-center text-white md:hidden">
              <li className="my-4 bg-white rounded py-2 px-5">
                <a href="#who-we-are" onClick={closeMobileMenu} className="text-black">
                  Who We Are
                </a>
              </li>
              <li className="my-4 bg-white rounded py-2 px-5">
                <a href="#our-values" onClick={closeMobileMenu} className="text-black">
                  Our Values
                </a>
              </li>
              <li className="my-4 bg-white rounded py-2 px-5">
                <a href="#the-perks" onClick={closeMobileMenu} className="text-black">
                  The Perks
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop Menu */}
        <ul className={`hidden md:flex absolute right-0 px-4 mx-auto children:mx-4 children:my-4`}>
          <li>
            <a href="#who-we-are">Who We Are</a>
          </li>
          <li>
            <a href="#our-values">Our Values</a>
          </li>
          <li>
            <a href="#the-perks">The Perks</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
