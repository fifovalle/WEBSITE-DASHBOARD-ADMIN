// FILE REACT
import React from "react";
// FILE SAYA
import Beranda from "./components/Beranda";
import NavigasiBarSamping from "./components/NavigasiBarSamping";
import { Wadah } from "./styles/Aplikasi.styled";

export default function Aplikasi() {
  return (
    <Wadah>
      <NavigasiBarSamping />
      <Beranda />
    </Wadah>
  );
}
