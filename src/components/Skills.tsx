const skillsData = [
  { name: "React", main: 1 },
  { name: "Next.js", main: 1 },
  { name: "Astro", main: 1 },
  { name: "HTML", main: 1 },
  { name: "CSS", main: 1 },
  { name: "JavaScript", main: 1 },
  { name: "TypeScript", main: 1 },
  { name: "Sass", main: 1 },
  { name: "Bootstrap", main: 1 },
  { name: "TailwindCSS", main: 1 },
  { name: "SEO", main: 1 },
  { name: "UI/UX", main: 1 },
  { name: "Node.js", main: 1 },
  { name: "Express.js", main: 1 },
  { name: "API", main: 1 },
  { name: "REST", main: 1 },
  { name: "SQL", main: 1 },
  { name: "MongoDB", main: 1 },
  { name: "Mongoose", main: 1 },
  { name: "Strapi CMS", main: 1 },
  { name: "Git", main: 1 },
  { name: "Docker", main: 1 },
  { name: "Figma", main: 1 },
  { name: "ChatGPT", main: 1 },
  { name: "Scrum", main: 1 },
  { name: "GitFlow", main: 1 },
  { name: "Calidad", main: 1 },
  { name: "B. Prácticas", main: 1 },
];

export default function Skills() {
  return (
    <article id="skills" className="container py-12 mx-auto">
      <section className="py-8">
        <div className="flex flex-col items-center gap-8 px-4 mx-auto max-w-7xl">
          <h2 className="mb-0 text-2xl font-bold text-center text-gray-800 dark:text-white text-shadow-md">
            📚 Habilidades 📚
          </h2>
          <ul className="flex flex-wrap justify-center gap-5 p-0 m-0 list-none">
            {skillsData.map(
              (skill) =>
                skill.main === 1 && (
                  <li
                    key={skill.name}
                    className="px-6 py-3 font-semibold text-center  transition-all bg-[#090030] text-white  dark:text-white hover:dark:text-[white] rounded-lg shadow-md hover:shadow-[--rojo-rosado]  dark:bg-[--color-celeste] hover:bg-[#090030] dark:hover:bg-[#090030] hover:shadow-lg hover:scale-110 "
                  >
                    {skill.name}
                  </li>
                )
            )}
          </ul>
        </div>
      </section>
    </article>
  );
}
