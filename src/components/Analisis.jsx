// FILE REACT
import React from "react";
// FILE SAYA
import { Wadah } from "../styles/Analisis.styled";
import { Kartu } from "../styles/DigunakanUlang.styled";
import { KartuAnalisis } from "../utils/Data";

export default function Analisis() {
  return (
    <Wadah>
      {KartuAnalisis.map((analisis) =>
        analisis.id === 0 || analisis.id === 3 ? (
          <div key={analisis.id} className="analisis">
            <div className="konten">
              <h5>{analisis.nama}</h5>
              <h2>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(analisis.uang)}
              </h2>
            </div>
            <div className="logo">{analisis.ikon}</div>
          </div>
        ) : (
          <div key={analisis.id} className="analisis">
            <div className="logo">{analisis.ikon}</div>
            <div className="konten">
              <h5>{analisis.nama}</h5>
              <h2>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(analisis.uang)}
              </h2>
            </div>
          </div>
        )
      )}
    </Wadah>
  );
}
