export const adminStorage = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch (error) {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

export const productosIniciales = [
  {
    id: "p-1",
    code: "SKN001",
    name: "Anua Serum in Peach Water",
    description: "Serum hidratante",
    price: 4990,
    stock: 12,
    criticalStock: 3,
    category: "Skin Care",
    image: "",
    visible: true,
  },
  {
    id: "p-2",
    code: "MKP001",
    name: "Magnetic Eyeshadow Palette",
    description: "Paleta de sombras",
    price: 45990,
    stock: 2,
    criticalStock: 3,
    category: "Make Up",
    image: "",
    visible: true,
  },
];

export const usuariosIniciales = [
  {
    id: "u-admin",
    run: "19011022K",
    name: "Administrador",
    lastname: "Velvetique",
    email: "admin@duoc.cl",
    birthdate: "",
    role: "Administrador",
    region: "Metropolitana",
    commune: "Santiago",
    address: "Casa matriz Velvetique",
  },
];
