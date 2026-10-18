import React from "react";
import { Routes, Route } from "react-router-dom";
import "./global.css";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";

/* Categorías y Destacados principales */
import RealHyaluron from "./assets/skincare/realhyaluron/Principal.webp";
import LacticAcid from "./assets/skincare/lacticacid/Principal.jpg";
import pdrnSerum from "./assets/skincare/pdrnserum/Principal.jpg";
import GelMoisturizer from "./assets/skincare/gelmoisturizer/Principal.jpg";
import SkinCT from "./assets/skincare/anuaserum/Principal.webp";
import MakeUpCT from "./assets/makeup/Categoria.jpg";
import HairCareCT from "./assets/haircare/Categoria.jpg";
import SunCareCT from "./assets/suncare/Categoria.jpg";

/* Productos - Skin Care */
import GlowSerum from "./assets/skincare/serumforradiant/Principal.webp";
import Moisturizer from "./assets/skincare/moisturizer/Principal.webp";
import RealComplexion from "./assets/skincare/realcomplexionhyaluron/Principal.webp";
import SetStep from "./assets/skincare/set3-step/Principal.webp";

/* Productos - Make up */
import MultiStick from "./assets/makeup/multistick/Principal.jpg";
import MatteLips from "./assets/makeup/mattelips/Principal.jpg";
import BroncePowder from "./assets/makeup/broncepowder/Principal.jpg";
import GlowPlay from "./assets/makeup/glowplay/Principal.jpg";
import HighLigth from "./assets/makeup/higthlight/Principal.jpg";
import PowderKiss from "./assets/makeup/powderkiss/Principal.jpg";

/* Productos - Hair Care */
import KitWella from "./assets/haircare/kitwella/Principal.jpg";
import Ultimate from "./assets/haircare/ultimate/Principal.jpg";
import ColorMotion from "./assets/haircare/colormotion/Principal.jpg";
import OilReflection from "./assets/haircare/oilreflection/Principal.jpg";

/* Productos - Sun Care */
import SunProtection from "./assets/suncare/sunprotection/Principal.jpg";
import Anthelios from "./assets/suncare/anthelios/Principal.jpg";
import VitaminaC from "./assets/suncare/vitaminac/Principal.jpg";

/* Login -Register -Contact */
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Contact from "./pages/contact/Contact";
import Admin from "./pages/admin/Admin";

import { productos } from "./mocks/productos";
import { mockCategorias } from "./mocks/categorias";
import { mockProductos } from "./mocks/mockProductos";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            productos={mockProductos}
            categorias={mockCategorias}
            todosLosProductos={productos}
          />
        }
      />
      <Route
        path="/shop"
        element={<ShopPage todosLosProductos={productos} />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
