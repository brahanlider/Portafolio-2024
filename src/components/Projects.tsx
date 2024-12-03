import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Fullstack");
  const handleClickCategories = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <article id="projects" className="container py-10 mx-auto">
        <h2 className="mb-8 text-3xl text-center dark:text-[#ffff]">
          Mis Proyectos
        </h2>
        <div className="flex items-center justify-center gap-4 p-2 m-2 md:gap-32">
          <button
            className={`p-3 border rounded-full dark:text-white ${
              selectedCategory === "Fullstack"
                ? "bg-[--color-celeste] shadow-lg"
                : "hover:bg-[--color-celeste]"
            }`}
            onClick={() => handleClickCategories("Fullstack")}
          >
            Fullstack
          </button>
          <button
            className={`p-3 text-black border rounded-full dark:text-white ${
              selectedCategory === "Frontend"
                ? "bg-[--color-celeste] shadow-lg"
                : "hover:bg-[--color-celeste]"
            }`}
            onClick={() => handleClickCategories("Frontend")}
          >
            FrontEnd
          </button>
          <button
            className={`p-3 text-black border rounded-full dark:text-white ${
              selectedCategory === "Backend"
                ? "bg-[--color-celeste] shadow-lg"
                : "hover:bg-[--color-celeste]"
            }`}
            onClick={() => handleClickCategories("Backend")}
          >
            BackEnd
          </button>
        </div>
        <ProjectCard selectedCategory={selectedCategory} />
      </article>
    </>
  );
}
