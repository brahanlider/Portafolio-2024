import { useState } from "react";
import MailIcon from "./utils/MailIcon";

export default function Contact() {
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [descriptionFocused, setDescriptionFocused] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleClick = () => {
    setIsSent(!isSent);
  };

  return (
    <div className="container flex flex-col items-center justify-center mx-auto bg-sgray-800">
      <article
        id="contact"
        className="grid gap-10 p-5 
        md:grid-cols-2 grid-rows-[repeat(0,min-content)] md:gap-52"
      >
        <form className="w-full max-w-lg p-10 mx-auto bg-[--color-azul-marino] border rounded-lg">
          <h2 className="mb-8 text-xl text-center text-white">Contact me</h2>
          <div className="relative mb-8">
            <input
              type="text"
              name="username"
              required
              onFocus={() => setUsernameFocused(true)}
              onBlur={(e) => setUsernameFocused(e.target.value !== "")}
              className="w-full py-2 text-lg text-white transition-colors bg-transparent border-b border-white outline-none focus:border-blue-400"
            />
            <label
              className={`absolute left-0 -top-4 py-2 text-lg text-white transition-all duration-500 pointer-events-none ${
                usernameFocused ? "-top-6 text-blue-400 text-sm" : "top-2"
              }`}
            >
              Username
            </label>
          </div>
          <div className="relative mb-8">
            <input
              type="email"
              name="email"
              required
              onFocus={() => setEmailFocused(true)}
              onBlur={(e) => setEmailFocused(e.target.value !== "")}
              className="w-full py-2 text-lg text-white transition-colors bg-transparent border-b border-white outline-none focus:border-blue-400"
            />
            <label
              className={`absolute left-0 -top-4 py-2 text-lg text-white transition-all duration-500 pointer-events-none ${
                emailFocused ? "-top-6 text-blue-400 text-sm" : "top-2"
              }`}
            >
              Email
            </label>
          </div>
          <div className="relative mb-8">
            <input
              type="text"
              name="description"
              required
              onFocus={() => setDescriptionFocused(true)}
              onBlur={(e) => setDescriptionFocused(e.target.value !== "")}
              className="w-full py-2 text-lg text-white transition-colors bg-transparent border-b border-white outline-none focus:border-blue-400"
            />
            <label
              className={`absolute left-0 -top-4 py-2 text-lg text-white transition-all duration-500 pointer-events-none ${
                descriptionFocused ? "-top-6 text-blue-400 text-sm" : "top-2"
              }`}
            >
              Description
            </label>
          </div>

          <button
            onClick={handleClick}
            className="px-4 py-2 text-white transition-colors bg-[--rojo-rosado] rounded-full form__btn"
          >
            <span
              className={`form__btn--visible ${
                isSent ? "hidden" : "flex items-center"
              }`}
            >
              <p className="text-center">Enviar</p>
              {/* <i className="material-icons">arrow_forward</i> */}
            </span>
            <span
              className={`form__btn--invisible ${isSent ? "block" : "hidden"}`}
            >
              Mensaje Enviado!
            </span>
          </button>
        </form>
        <div className="flex md:h-72">
          <MailIcon isSent={isSent} />
        </div>
      </article>
    </div>
  );
}
