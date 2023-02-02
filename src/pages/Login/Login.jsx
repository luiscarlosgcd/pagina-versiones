import { useRef, useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [errorMensaje, setErrorMensaje] = useState("");
  const [aprobado, setAprobado] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMensaje("");
  }, [usuario, contraseña]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(usuario, contraseña);
    setUsuario("");
    setContraseña("");
    setAprobado(true);
  };

  return (
    <>
      {aprobado ? (
        <section>Acceso exitoso</section>
      ) : (
        <section className="login">
          <div>
            <p ref={errRef} aria-live="assertive">
              {errorMensaje}
            </p>
            <h1 id="login__heading">Iniciar sesion</h1>
            <form className="login__form" onSubmit={handleSubmit}>
              <div>
                <div>
                  <label htmlFor="username">
                    Usuario:
                    <input
                      type="text"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setUsuario(e.target.value)}
                      value={usuario}
                      required
                    />
                  </label>
                </div>

                <div>
                  <label htmlFor="contraseña">
                    Contraseña:
                    <input
                      type="password"
                      autoComplete="off"
                      onChange={(e) => setContraseña(e.target.value)}
                      value={contraseña}
                      required
                    />
                  </label>
                </div>

                <div id="login__button-center">
                  <div id="login__button">
                    {/*<Link id='login__button-link' to='/monitor'>
                      <button id='login__buton-button'>Enviar</button>
                      </Link>*/}
                    <button id="login__buton-button">Enviar</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
