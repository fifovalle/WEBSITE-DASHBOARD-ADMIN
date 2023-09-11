// FILE REACT
import React from "react";
// FILE SAYA
import { Wadah } from "../styles/Beranda.styled";
import NavigasiBar from "./NavigasiBar";
import Analisis from "./Analisis";
import PertanyaanUmum from "./PertanyaanUmum";
import Penghasilan from "./Penghasilan";
import Transaksi from "./Transaksi";
import Profil from "./Profil";

export default function Beranda() {
  return (
    <Wadah>
      <NavigasiBar />
      <div className="wadah">
        <div className="baris_pertama">
          <Analisis />
          <PertanyaanUmum />
        </div>
        <div className="baris_kedua">
          <Penghasilan />
          <Transaksi />
          <Profil />
        </div>
      </div>
    </Wadah>
  );
}
