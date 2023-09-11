// FILE REACT
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
// FILE SAYA
import { Wadah } from "../styles/Transaksi.styled";
import { KartuTransaksi } from "../utils/Data";

export default function Transaksi() {
  return (
    <Wadah>
      <div className="judul">
        <h2>Transaksi Terakhir</h2>
      </div>
      <div className="transaksi_transaksi">
        {KartuTransaksi.map((transaksi) => {
          return (
            <div key={transaksi.id} className="transaksi">
              <div className="transaksi__judul">
                <div className="transaksi__judul__foto">
                  <img src={transaksi.foto} alt="foto transaksi" />
                </div>
                <div className="transaksi__detail">
                  <h3>{transaksi.nama}</h3>
                  <h5>{transaksi.tanggal}</h5>
                  <h5>{transaksi.keterangan}</h5>
                </div>
              </div>
              <div className="transaksi__uang">
                <span>{transaksi.uang}</span>
              </div>
            </div>
          );
        })}
      </div>
      <a href="/" className="lihat">
        Lihat semuanya <HiArrowNarrowRight />
      </a>
    </Wadah>
  );
}
