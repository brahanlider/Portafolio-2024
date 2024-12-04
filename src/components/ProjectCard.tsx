import { data } from "../data/datadb";

type ProjectCardProps = {
  selectedCategory: string;
};

export default function ProjectCard({ selectedCategory }: ProjectCardProps) {
  const filteredData = data.filter(
    (project) => project.categoria === selectedCategory
  );

  return (
    <>
      <div className="gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 ">
        {filteredData.map((elemento) => (
          <article
            className="dark:text-white flex flex-col gap-6 overflow-hidden transition-all border-4 border-[#8888] rounded-lg shadow shadow-[rgb(88, 199, 250)]-800 duration-250 hover:animate-borderMagic hover:scale-105 m-5"
            key={elemento.id}
          >
            {/* Imagen */}
            <figure className="flex w-full h-64 overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={elemento.url_imagen}
                alt="imagen"
              />
            </figure>

            {/* Contenido */}
            <div className="flex flex-col items-center gap-3 px-4">
              <h2 className="text-xl font-bold text-center">{elemento.title}</h2>
              <h3 className="text-lg font-medium text-center">{elemento.subtitle}</h3>
              <h4 className="text-base font-light text-center">{`Tecnologías: ${elemento.tecnologías.join(", ")}`}</h4>
              <p className="text-sm leading-relaxed text-center line-clamp-3">
                {elemento.descripcion}
              </p>
            </div>

            {/* Botón */}
            <div className="flex justify-center pb-4">
              <a
                href={elemento.linkCode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-bold text-white no-underline transition-all bg-red-500 rounded-lg duration-250 hover:bg-red-600"
              >
                Ver
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
