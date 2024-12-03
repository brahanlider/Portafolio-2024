import { useEffect, useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 text-white bg-[--primary-theme-color]">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <div className="flex items-center">
          <img
            src="https://i.postimg.cc/tg7f2NJR/icon-elegante.jpg"
            alt="Logo"
            className="w-8 h-8 mr-2"
          />
          <span className="text-lg font-bold">Mi Portfolio</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden space-x-6 md:flex">
          <li>
            <a href="#profile" className="hover:text-[--rojo-rosado] ">
              Perfil
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-[--rojo-rosado]">
              Habilidades
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[--rojo-rosado]">
              Proyectos
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-[--rojo-rosado]">
              Contacto
            </a>
          </li>
        </ul>

        {/* Button Theme => dark | lighth  */}
        <div className="flex gap-8">
          <button
            className={`bt-theme ${theme === "dark" ? "bt-theme--active" : ""}`}
            onClick={handleChangeTheme}
          >
            <span className="text-lg">🌞</span>
            <span className="text-lg">🌚</span>
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex items-center justify-center h-screen bg-[--primary-theme-color] md:hidden">
          <ul className="flex flex-col items-center space-y-8">
            <li>
              <a href="#profile" className="hover:text-[--rojo-rosado]">
                Perfil
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-[--rojo-rosado]">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[--rojo-rosado]">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[--rojo-rosado]">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
