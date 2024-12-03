import "./App.css";
import Contact from "./components/Contact";

import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Nav />
      <main className="">
        {/* Sección de la Tarjeta Principal */}
        <Profile />
        {/* Sección de Proyectos */}
        <Projects />
        {/* Sección de Habilidades */}
        <Skills />
        {/* Sección de Contacto */}
        <Contact />
      </main>
    </>
  );
}

export default App;

// <div class="absolute inset-0 -z-10s h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
// </div>
