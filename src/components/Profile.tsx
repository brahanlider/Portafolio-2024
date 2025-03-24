export default function Profile() {
  return (
    <>
      <article
        id="profile"
        className="relative flex flex-row items-center h-screen overflow-hidden "
      >
        <div className="flex flex-col items-center justify-center gap-8 p-1 m-auto lg:flex-row">
          {/* Información del perfil */}
          <div className="box-border flex flex-col items-stretch justify-center gap-5 p-4 m-10 text-center border border-white">
            <h1 className="txt-animated ">Brahan | Desarrollador Fullstack</h1>
            <h2 className="txt-animated">
              Apasionado por el código limpio y autodidacta
            </h2>
            <div className="flex justify-center gap-5 text-white">
              {/* Botón con enlace */}
              <button type="button" className=" custom-btn btn-3">
                <span>
                  <a
                    href="https://drive.google.com/file/d/1Aw9wJZ3dYfcYqc44tsrgDSRJiyljCEEO/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CV
                  </a>
                </span>
              </button>
              {/* Botón con estilo interactivo */}
              <a
                href="#projects"
                className="px-6 py-2 font-semibold text-white transition duration-300 ease-in-out transform bg-green-600 rounded-lg shadow-md hover:bg-green-700 hover:scale-105"
              >
                Proyectos
              </a>
            </div>
          </div>

          {/* Imagen de perfil */}
          <div className="flex justify-center rounded-full bg-slate-700">
            <figure>
              <img
                src="https://i.postimg.cc/0ym76tGr/foto-Brahan-1-1-2024-transformed.webp"
                alt="Tu Foto"
                className="object-cover w-64 h-64 bg-yellow-400 rounded-full"
              />
            </figure>
          </div>
        </div>
      </article>
    </>
  );
}

{
  /* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>; */
}
