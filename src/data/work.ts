/**
 * Єдине джерело робіт для головної та /work.
 * clientWork — комерційні кейси (мають повні сторінки /projects/[slug]).
 * labWork    — концепт-роботи (showcase-картки без деталок).
 */
import type { ImageMetadata } from "astro";
import sapImg from "../assets/work/sports-ai-pro.png";
import bntImg from "../assets/work/bragmant-cover.jpg";
import nexusImg from "../assets/lab/nexus-bank.png";
import myfieldImg from "../assets/lab/myfield.png";
import intranetImg from "../assets/lab/intranet.png";

export type WorkItem = {
  idx: string;
  title: string;
  sub: string;
  href: string;
  year?: string;
  role?: string;
  client?: string;
  img: ImageMetadata;
  video?: string;
  blend?: boolean;
};

export type LabItem = {
  idx: string;
  title: string;
  sub: string;
  img: ImageMetadata;
  overlay: number;
  meta: [string, string][];
  /** Якщо є — картка стає посиланням на сторінку-кейс */
  href?: string;
};

export const clientWork: WorkItem[] = [
  {
    idx: "001", title: "S_AP", sub: "Sports AI-Pro", href: "/projects/sports-ai-pro",
    year: "2026", role: "Product Designer", client: "North Brains Analytics",
    img: sapImg, video: "/video/sports-ai-pro.mp4", blend: true,
  },
  {
    idx: "002", title: "B_NT", sub: "Bragmant", href: "/projects/bragmant",
    year: "2026", role: "Product Designer", client: "Bragmant",
    img: bntImg, blend: false,
  },
];

export const labWork: LabItem[] = [
  {
    idx: "001", title: "N_BK", sub: "NEXUS BANK APP", img: nexusImg, overlay: 0.3,
    meta: [["Year", "2024"], ["Industry", "Mobile App"]], href: "/projects/nexus-bank",
  },
  {
    idx: "002", title: "Y_FD", sub: "YOURFIELD APP", img: myfieldImg, overlay: 0.55,
    meta: [["Year", "2024"], ["Industry", "Mobile App"]], href: "/projects/yourfield",
  },
  {
    idx: "003", title: "S_SR", sub: "INTRANET WEBSITE", img: intranetImg, overlay: 0.6,
    meta: [
      ["Year", "2023"],
      ["My role", "UX/UI Designer"],
      ["Client", "Statistic Office of Slovak Republic"],
    ],
  },
];
