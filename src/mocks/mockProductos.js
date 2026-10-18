import RealHyaluron from "../assets/skincare/realhyaluron/Principal.webp";
import LacticAcid from "../assets/skincare/lacticacid/Principal.jpg";
import pdrnSerum from "../assets/skincare/pdrnserum/Principal.jpg";
import GelMoisturizer from "../assets/skincare/gelmoisturizer/Principal.jpg";

export const mockProductos = [
  {
    id: 1,
    titulo: "Real Complexion Hyaluron",
    marca: "HANSKIN",
    precio: "13990",
    image: RealHyaluron,
  },
  {
    id: 2,
    titulo: "Lactic Acid",
    marca: "THE ORDINARY",
    precio: "25990",
    image: LacticAcid,
  },
  {
    id: 3,
    titulo: "PDRN Sérum «Exosome Shot» de Pink Collagen",
    marca: "DE PINK COLLAGEN",
    precio: "7990",
    image: pdrnSerum, // 👈 Corregido: antes decía PDRNSerum y daba error
  },
  {
    id: 4,
    titulo: "Hidra Intense Gel Moisturizer",
    marca: "SKINTIFIC",
    precio: "6500",
    image: GelMoisturizer,
  },
];
