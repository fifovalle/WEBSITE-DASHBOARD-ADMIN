// FILE REACT
import React, { useEffect, useState } from "react";
import { FaTrashRestore } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
// FILE SAYA
import { Bagian } from "../styles/NavigasiBarSamping.styled";
import { TautanNavigasi } from "../utils/Data";

export default function NavigasiBarSamping() {
  const [tautanSaatIni, aturTautanSaatIni] = useState(0);
  return (
    <>
      <Bagian>
        <div className="atas">
          <div className="merek">
            <FaTrashRestore />
            <span>SAMPAH KU</span>
          </div>
          <div className="beralih"></div>
          <div className="tautan">
            <ul>
              {TautanNavigasi.map((tautan) => {
                return (
                  <li
                    key={tautan.id}
                    className={tautan.id === tautanSaatIni ? "aktif" : ""}
                    onClick={() => aturTautanSaatIni(tautan.id)}
                  >
                    <a href="#">
                      {tautan.ikon}
                      <span> {tautan.nama}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="keluar">
          <a href="#">
            <FiLogOut />
            <span> Keluar</span>
          </a>
        </div>
      </Bagian>
    </>
  );
}
