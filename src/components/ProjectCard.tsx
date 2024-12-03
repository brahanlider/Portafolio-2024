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
      <div className="gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
        {/* carg magic => article */}
        {filteredData.map((elemento) => (
          <article
            className="dark:text-white flex flex-col  gap-6 overflow-hidden transition-all border-4  border-[#8888] rounded-lg shadow shadow-[rgb(88, 199, 250)]-800 duration-250 hover:animate-borderMagic hover:scale-105 m-5"
            key={elemento.id}
          >
            <figure className="flex w-full">
              <img className="w-full" src={elemento.url_imagen} alt="imagen" />
            </figure>
            <div className="flex flex-col items-center gap-3 px-4">
              <h2 className="">{elemento.title}</h2>
              <h3 className="font-medium ">{elemento.subtitle}</h3>
              <h4 className="font-light text-center ">{`Tecnologías: ${elemento.tecnologías}`}</h4>
              <p className="text-center ">{elemento.descripcion}</p>
            </div>
            <div className="flex justify-center pb-4">
              <a
                href="#"
                className="px-4 py-2 font-bold text-black no-underline transition-all bg-red-500 rounded-lg duration-250"
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
