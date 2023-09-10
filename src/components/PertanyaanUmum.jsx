// FILE REACT
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
// FILE SAYA
import { Wadah } from "../styles/PertanyaanUmum.styled";
import { KartuPertanyaanUmum } from "../utils/Data";

export default function PertanyaanUmum() {
  return (
    <Wadah>
      <div className="judul">
        <h2>Informasi Untuk Admin</h2>
      </div>
      <div className="pertanyaan_pertanyaan">
        {KartuPertanyaanUmum.map((pertanyaan) => {
          return (
            <div key={pertanyaan.id} className="pertanyaan">
              <div className="info">
                {pertanyaan.ikon}
                <h4>{pertanyaan.teks}</h4>
              </div>
              <IoIosArrowForward />
            </div>
          );
        })}
      </div>
    </Wadah>
  );
}
