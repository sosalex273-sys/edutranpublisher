"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, BookCheck, Award, Globe, FileCheck, BookmarkCheck } from "lucide-react";
import { portfolios, PortfolioItem } from "@/data/portfolio";

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "Semua", count: portfolios.length },
    { key: "sinta2", label: "SINTA 2", count: portfolios.filter(p => p.category === "sinta2").length },
    { key: "sinta3", label: "SINTA 3", count: portfolios.filter(p => p.category === "sinta3").length },
    { key: "sinta4", label: "SINTA 4", count: portfolios.filter(p => p.category === "sinta4").length },
    { key: "internasional", label: "Internasional", count: portfolios.filter(p => p.category === "internasional").length },
    { key: "issn", label: "Ber-ISSN", count: portfolios.filter(p => p.category === "issn").length },
  ];

  const filteredPortfolios = activeCategory === "all"
    ? portfolios
    : portfolios.filter(item => item.category === activeCategory);

  const getFrameConfig = (category: PortfolioItem["category"]) => {
    switch (category) {
      case "sinta2":
        return {
          mainText: "Sinta 2",
          subText: "Terakreditasi Nasional",
          bgGradient: "from-amber-500/15 via-amber-500/5 to-amber-600/20 dark:from-amber-500/20 dark:to-amber-950/40",
          borderColor: "border-amber-400/60 dark:border-amber-500/40",
          innerBorder: "border-amber-400/30 dark:border-amber-500/30",
          cornerColor: "border-amber-500 dark:border-amber-400",
          textColor: "text-amber-700 dark:text-amber-300",
          subColor: "text-amber-600/90 dark:text-amber-400/80",
          badgeBg: "bg-amber-500 text-white",
          glowColor: "bg-amber-400/20",
          icon: <Award className="w-8 h-8 text-amber-600 dark:text-amber-400 mb-1" />
        };
      case "sinta3":
        return {
          mainText: "Sinta 3",
          subText: "Terakreditasi Nasional",
          bgGradient: "from-emerald-500/15 via-emerald-500/5 to-emerald-600/20 dark:from-emerald-500/20 dark:to-emerald-950/40",
          borderColor: "border-emerald-400/60 dark:border-emerald-500/40",
          innerBorder: "border-emerald-400/30 dark:border-emerald-500/30",
          cornerColor: "border-emerald-500 dark:border-emerald-400",
          textColor: "text-emerald-700 dark:text-emerald-300",
          subColor: "text-emerald-600/90 dark:text-emerald-400/80",
          badgeBg: "bg-emerald-600 text-white",
          glowColor: "bg-emerald-400/20",
          icon: <BookmarkCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-1" />
        };
      case "sinta4":
        return {
          mainText: "Sinta 4",
          subText: "Terakreditasi Nasional",
          bgGradient: "from-sky-500/15 via-sky-500/5 to-blue-600/20 dark:from-sky-500/20 dark:to-blue-950/40",
          borderColor: "border-sky-400/60 dark:border-sky-500/40",
          innerBorder: "border-sky-400/30 dark:border-sky-500/30",
          cornerColor: "border-sky-500 dark:border-sky-400",
          textColor: "text-sky-700 dark:text-sky-300",
          subColor: "text-sky-600/90 dark:text-sky-400/80",
          badgeBg: "bg-sky-600 text-white",
          glowColor: "bg-sky-400/20",
          icon: <BookCheck className="w-8 h-8 text-sky-600 dark:text-sky-400 mb-1" />
        };
      case "internasional":
        return {
          mainText: "Internasional",
          subText: "Terindeks Global",
          bgGradient: "from-indigo-500/15 via-indigo-500/5 to-purple-600/20 dark:from-indigo-500/20 dark:to-purple-950/40",
          borderColor: "border-indigo-400/60 dark:border-indigo-500/40",
          innerBorder: "border-indigo-400/30 dark:border-indigo-500/30",
          cornerColor: "border-indigo-500 dark:border-indigo-400",
          textColor: "text-indigo-700 dark:text-indigo-300",
          subColor: "text-indigo-600/90 dark:text-indigo-400/80",
          badgeBg: "bg-indigo-600 text-white",
          glowColor: "bg-indigo-400/20",
          icon: <Globe className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-1" />
        };
      case "issn":
      default:
        return {
          mainText: "Ber-ISSN",
          subText: "Jurnal Nasional Resmi",
          bgGradient: "from-teal-500/15 via-teal-500/5 to-cyan-600/20 dark:from-teal-500/20 dark:to-teal-950/40",
          borderColor: "border-teal-400/60 dark:border-teal-500/40",
          innerBorder: "border-teal-400/30 dark:border-teal-500/30",
          cornerColor: "border-teal-500 dark:border-teal-400",
          textColor: "text-teal-700 dark:text-teal-300",
          subColor: "text-teal-600/90 dark:text-teal-400/80",
          badgeBg: "bg-teal-600 text-white",
          glowColor: "bg-teal-400/20",
          icon: <FileCheck className="w-8 h-8 text-teal-600 dark:text-teal-400 mb-1" />
        };
    }
  };

  return (
    <section id="portofolio" className="py-12 md:py-24 lg:py-32 bg-slate-50/70 dark:bg-slate-900/50 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-sky-100/40 dark:from-sky-900/20 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookCheck className="w-3.5 h-3.5" />
            Portofolio Publikasi
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 dark:text-white mb-4 tracking-tight">
            Karya yang Telah Terbit
          </h2>
          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Jejak rekam keberhasilan kami dalam mengantarkan karya para akademisi menuju publikasi resmi nasional dan internasional.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 md:mb-12"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${isActive
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md scale-[1.02]"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/60 border border-slate-200/80 dark:border-slate-700 shadow-sm"
                  }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ${isActive
                      ? "bg-white/20 dark:bg-slate-900/20 text-white dark:text-slate-900"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300"
                    }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPortfolios.map((item, index) => {
              const frame = getFrameConfig(item.category);

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700 p-5 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-sky-500/40 dark:hover:border-sky-500/40 transition-all duration-300 group"
                >
                  <div>
                    {/* Frame Grafis (Pengganti Gambar Buku) */}
                    <div
                      className={`relative w-full h-48 rounded-xl border-2 ${frame.borderColor} bg-gradient-to-br ${frame.bgGradient} flex flex-col items-center justify-center p-4 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]`}
                    >
                      {/* Subtle Ambient Glow */}
                      <div
                        className={`absolute w-32 h-32 rounded-full ${frame.glowColor} blur-2xl pointer-events-none -z-0`}
                      />

                      {/* Inner Decorative Border */}
                      <div
                        className={`absolute inset-2.5 border border-dashed ${frame.innerBorder} rounded-lg pointer-events-none`}
                      />

                      {/* Corner Accents (Nuansa Piagam Resmi) */}
                      <div
                        className={`absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 ${frame.cornerColor}`}
                      />
                      <div
                        className={`absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 ${frame.cornerColor}`}
                      />
                      <div
                        className={`absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 ${frame.cornerColor}`}
                      />
                      <div
                        className={`absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 ${frame.cornerColor}`}
                      />

                      {/* Konten di Tengah Frame */}
                      <div className="relative z-10 flex flex-col items-center text-center">
                        {frame.icon}

                        {/* Text Utama di Tengah Frame (misal: Sinta 4, Sinta 2, dll) */}
                        <span
                          className={`text-2xl sm:text-3xl font-extrabold font-jakarta tracking-tight ${frame.textColor}`}
                        >
                          {frame.mainText}
                        </span>

                        {/* Sub-label keterangan */}
                        <span
                          className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider mt-1 ${frame.subColor}`}
                        >
                          {frame.subText}
                        </span>
                      </div>
                    </div>

                    {/* Judul Publikasi */}
                    <h3 className="text-slate-900 dark:text-white text-sm md:text-base font-bold font-jakarta leading-snug line-clamp-2 mt-4 mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {item.title}
                    </h3>

                    {/* Deskripsi Ucapan Selamat */}
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed line-clamp-3 mb-5 font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Tombol Menuju Link Publikasi */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs md:text-sm font-semibold tracking-wide shadow-md shadow-sky-500/20 hover:shadow-sky-500/35 transition-all duration-200 active:scale-95 group/btn"
                  >
                    <span>Lihat Publikasi</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
