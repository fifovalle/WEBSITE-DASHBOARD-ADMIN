// FILE REACT
import React, { useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
// FILE SAYA
import { Wadah } from "../styles/NavigasiBarSamping.styled";
import { TautanNavigasi } from "../utils/Data";

export default function NavigasiBarSamping() {
  const [tautanSaatIni, aturTautanSaatIni] = useState(0);
  return (
    <>
      <Wadah>
        <div className="atas">
          <div className="merek">
            <BiSolidDashboard />
            <span>Dashboard</span>
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
                    <a href="/">
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
          <a href="/">
            <FiLogOut />
            <span> Keluar</span>
          </a>
        </div>
      </Wadah>
    </>
  );
}
