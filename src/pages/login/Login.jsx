import React, { useState } from "react";

import "./Login.scss";
import { Link, useNavigate } from "react-router";
import { Button } from "../../components/atoms/Button";
import Input from "../../components/atoms/TextInput";
import { iniciarSesion } from "../../services/loginService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  /*const manejarSubmit = (event) => {
    event.preventDefault();

    const correo = email.trim().toLowerCase();

    if (correo === "admin@duoc.cl" && password === "Admin123!") {
      sessionStorage.setItem(
        "velvetique_admin",
        JSON.stringify({ email: correo, role: "Administrador" }),
      );
      navigate("/admin");
      return;
    }

    setError(
      "Credenciales administrativas inválidas. Usa admin@duoc.cl para ingresar al panel.",
    );
  };*/

  const manejarSubmit = (event) => {
    event.preventDefault();

    const usuario = iniciarSesion(email, password);

    if (!usuario) {
      setError("Correo o contraseña incorrectos.");
      return;
    }

    /*  sessionStorage.setItem(
      "velvetique_sesion",
      JSON.stringify({
        email: usuario.email,
        name: usuario.name,
        role: usuario.role,
      }),
    );*/

    navigate(usuario.role === "Administrador" ? "/admin" : "/");
  };

  return (
    <div className="login-page">
      <div className="register">
        <div className="login-header">
          <h2>VELVETIQUE</h2>
          <h3>Bienvenido de nuevo</h3>
          <h4>LA BELLEZA COMIENZA CONTIGO</h4>
          <p>Inicia sesión en tu cuenta y continúa</p>
          <p>tu viaje de belleza con ofertas</p>
          <p>exclusivas, novedades y mucho más.</p>
        </div>

        <div className="box-login">
          <h2>Iniciar sesión</h2>
          <p>Introduce tus datos para acceder a tu cuenta.</p>
          <form className="register-form" id="login-form">
            <div>
              <Input
                id="login-email"
                name="email"
                label="Correo electrónico"
                type="email"
                placeholder="nombre@gmail.com"
                icon="bi-envelope"
                autoComplete="email"
                inputMode="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <Input
                id="login-password"
                name="password"
                label="Contraseña"
                type="password"
                placeholder="Ingresa tu contraseña"
                icon="bi-lock"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
          </form>

          {error && <p className="login-error">{error}</p>}

          <div className="terms">
            <div className="check">
              <input type="checkbox" />
              <p>Recuérdame</p>
            </div>
            <div>
              <Button variant="primary" onClick={manejarSubmit}>
                Iniciar sesión
              </Button>
            </div>
          </div>
          <span>
            ¿No tienes una cuenta?
            <Link to="/register"> Regístrate</Link>
          </span>
          <span>
            <Link to="/"> Volver al inicio</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
