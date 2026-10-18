import { usuariosMock } from "../mocks/usuarioMock";

export function iniciarSesion(email, password) {
  const correo = email.trim().toLowerCase();
  const usuario = usuariosMock.find(
    (item) => item.email === correo && item.password === password,
  );
  return usuario || null;
}