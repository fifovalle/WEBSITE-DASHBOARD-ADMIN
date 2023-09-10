// FILE REACT
import { MdSpaceDashboard, MdPeople, MdTimelapse } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { GiTwirlCenter, GiHamburgerMenu } from "react-icons/gi";
import { BsFillChatTextFill, BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";
import { BiGroup } from "react-icons/bi";
import { IoStatsChart } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";
import { AiFillCalendar } from "react-icons/ai";
import { IoMdCash } from "react-icons/io";

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

export const KartuAnalisis = [
  {
    id: 0,
    nama: "Pengeluaran Uang",
    uang: 10000,
    ikon: <BsFillCalendar2WeekFill />,
  },
  {
    id: 1,
    nama: "Penghasilan",
    uang: 20000,
    ikon: <IoStatsChart />,
  },
  {
    id: 2,
    nama: "Pengeluaran Admin",
    uang: 30000,
    ikon: <BiGroup />,
  },
  {
    id: 3,
    nama: "Aktivitas",
    uang: 40000,
    ikon: <FiActivity />,
  },
];

export const KartuPertanyaanUmum = [
  {
    id: 0,
    teks: "Kegiatan Apa Saja Yang Admin Lakukan?",
    ikon: <AiFillCalendar />,
  },
  {
    id: 1,
    teks: "Jadwal Apa Saja Yang Harus Saya Lakukan?",
    ikon: <MdTimelapse />,
  },
  {
    id: 2,
    teks: "Bagaimana Cara Menarik Uang Di Website Ini?",
    ikon: <IoMdCash />,
  },
];

export const KartuPenghasilan = [
  {
    id: 0,
    data: 9000,
  },
  {
    id: 1,
    data: 5000,
  },
  {
    id: 2,
    data: 1000,
  },
  {
    id: 3,
    data: 4000,
  },
  {
    id: 4,
    data: 5000,
  },
];
