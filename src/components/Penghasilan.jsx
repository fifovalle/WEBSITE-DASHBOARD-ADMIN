// FILE REACT
import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
// FILE SAYA
import { KartuPenghasilan } from "../utils/Data";
import { Wadah } from "../styles/Penghasilan.styled";

export default function Penghasilan() {
  return (
    <Wadah>
      <div className="atas">
        <div className="info">
          <h4>Penghasilan Bulan Ini</h4>
          <h1>Rp. 10.000.000</h1>
          <div className="perkembangan">
            <span>+2.45%</span>
          </div>
        </div>
      </div>
      <div className="grafik">
        <ResponsiveContainer height="100%" width="100%">
          <AreaChart
            width={500}
            height={400}
            data={KartuPenghasilan}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <Tooltip cursor={false} />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="data"
              stroke="#abd1c6"
              fill="#abd1c6"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Wadah>
  );
}
