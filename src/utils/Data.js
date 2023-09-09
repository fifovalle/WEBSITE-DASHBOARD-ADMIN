// FILE REACT
import { MdSpaceDashboard, MdPeople } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { GiTwirlCenter, GiHamburgerMenu } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";

export const TautanNavigasi = [
  {
    id: 0,
    ikon: <MdSpaceDashboard />,
    nama: "Beranda",
    tautan: "/",
  },
  {
    id: 1,
    ikon: <MdPeople />,
    nama: "Pengguna",
    tautan: "/pengguna",
  },
  {
    id: 2,
    ikon: <FaAddressCard />,
    nama: "Detail Pembayaran",
    tautan: "/detail-pembayaran",
  },
  {
    id: 3,
    ikon: <GiTwirlCenter />,
    nama: "Pusat Pembelajaran",
    tautan: "/pusat-pembelajaran",
  },
  {
    id: 4,
    ikon: <BsFillChatTextFill />,
    nama: "Pertanyaan Umum",
    tautan: "/pertanyaan-umum",
  },
  {
    id: 5,
    ikon: <IoSettings />,
    nama: "Pengaturan",
    tautan: "/pengaturan",
  },
];
