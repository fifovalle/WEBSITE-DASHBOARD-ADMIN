// FILE REACT
import React from "react";
import { BiSearch } from "react-icons/bi";
// FILE SAYA
import { Wadah } from "../styles/NavigasiBar.styled";

export default function NavigasiBar() {
  return (
    <Wadah>
      <div className="judul">
        <h4>Admin Sampahku</h4>
        <h1>
          Selamat Datang Di <span>DASHBOARD ADMIN || SAMPAH KU</span>
        </h1>
      </div>
      <div className="pencaharian">
        <BiSearch />
        <input type="text" placeholder="Cari Disini" />
      </div>
    </Wadah>
  );
}
