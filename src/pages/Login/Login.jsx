import { useRef, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";
import { getLogin } from "../../api/Login";
import { setToken } from "../../api/Monitor";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [cliente, setCliente] = useState(null);
  const [errorMensaje, setErrorMensaje] = useState(null);
  const [aprobado, setAprobado] = useState(false);

  useEffect(() => {
    //hace focus en cursor de username
    userRef.current.focus();
  }, []);

  useEffect(() => {
    //reinicia el mensaje de error
    setErrorMensaje("");
  }, [usuario, contraseña]);

  useEffect(() => {
    //obtiene el token si existe
    const loggedUserJSON = window.localStorage.getItem("loggedNoteAppCliente");
    if (loggedUserJSON) {
      const cliente = JSON.parse(loggedUserJSON);
      setCliente(cliente);
      setToken(cliente.data.token);
      setAprobado(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const cliente = await getLogin({
        usuario: usuario,
        clave: contraseña,
      });
      window.localStorage.setItem(
        "loggedNoteAppCliente",
        JSON.stringify(cliente)
      );
      setToken(cliente.data.token);
      setCliente(cliente);
      setUsuario("");
      setContraseña("");
      setAprobado(true);
    } catch (e) {
      setErrorMensaje("Ha ocurrido un error, vuelve a intentarlo");
      setTimeout(() => {
        setErrorMensaje(null);
      }, 5000);
    }
  };

  const handleLogout = async (e) => {
    setCliente(null);
    setToken(cliente.data.token);
    window.localStorage.removeItem("loggedNoteAppCliente");
    setAprobado(false);
  };

  return (
    <>
      {aprobado ? (
        <div>
          <Redirect to="/monitor" />
          <button onClick={handleLogout}>Cerrar sesion</button>
        </div>
      ) : (
        <section className="login">
          <div>
            <p ref={errRef} aria-live="assertive">
              {errorMensaje}
            </p>
            <h1 id="login__heading">Iniciar sesion</h1>
            <form className="login__form" onSubmit={handleLogin}>
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
                    {/*<Link id="login__button-link" to="/monitor">
                      <button id="login__buton-button">Enviar</button>
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
