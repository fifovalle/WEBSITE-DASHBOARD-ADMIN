// FILE REACT
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
// FILE SAYA
import { Wadah } from "../styles/Profil.styled";
import Avatar from "../assets/img/avatar.png";
import { KartuProfil } from "../utils/Data";

export default function Profil() {
  return (
    <Wadah>
      <div className="foto">
        <img src={Avatar} alt="foto profil" />
      </div>
      <div className="judul">
        <h2>Admin Barokah</h2>
        <h5>
          <HiOutlineLocationMarker /> Bandung
        </h5>
      </div>
      <div className="info">
        {KartuProfil.map((profil) => {
          return (
            <div key={profil.id} className="wadah">
              <h5>{profil.deskripsi}</h5>
              <h3>{profil.keterangan}</h3>
            </div>
          );
        })}
      </div>
    </Wadah>
  );
}
