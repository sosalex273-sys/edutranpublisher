export interface PortfolioItem {
  id: number;
  title: string;
  scope: string;
  category: "sinta2" | "sinta3" | "sinta4" | "internasional" | "issn";
  description: string;
  link: string;
  image: string;
}

export const portfolios: PortfolioItem[] = [
  {
    id: 1,
    title: "PUBLIKASI JURNAL NASIONAL BER-ISSN",
    scope: "Ber-ISSN",
    category: "issn",
    description: "Selamat dan sukses atas keberhasilan publikasi artikel ilmiah pada Jurnal Nasional ber-ISSN. Semoga pencapaian ini menjadi langkah positif dalam meningkatkan kontribusi akademik dan pengembangan ilmu pengetahuan.",
    link: "https://ejournal.goacademica.com/index.php/jk/article/view/1073",
    image: "/images/portfolio1.png"
  },
  {
    id: 2,
    title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 4",
    scope: "SINTA 4",
    category: "sinta4",
    description: "Selamat atas keberhasilan publikasi artikel ilmiah pada Jurnal Nasional Terakreditasi SINTA 4. Semoga prestasi ini menjadi motivasi untuk terus menghasilkan karya ilmiah yang berkualitas dan bermanfaat.",
    link: "https://ejournal.goacademica.com/index.php/ja/article/view/2104",
    image: "/images/portfolio2.png"
  },
  {
    id: 3,
    title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 4",
    scope: "SINTA 4",
    category: "sinta4",
    description: "Apresiasi setinggi-tingginya atas terbitnya artikel ilmiah pada Jurnal Nasional Terakreditasi SINTA 4. Semoga publikasi ini semakin memperkuat kontribusi dalam pengembangan ilmu pengetahuan dan penelitian akademik.",
    link: "https://ijsoc.goacademica.com/index.php/ijsoc/article/view/1803",
    image: "/images/portfolio3.png"
  },
  {
    id: 4,
    title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 4",
    scope: "SINTA 4",
    category: "sinta4",
    description: "Selamat dan sukses atas pencapaian publikasi artikel ilmiah pada Jurnal Nasional Terakreditasi SINTA 4. Semoga keberhasilan ini menjadi awal dari berbagai pencapaian akademik berikutnya.",
    link: "https://idm.or.id/JCS/index.php/JCS/article/view/425",
    image: "/images/portfolio4.png"
  },
  {
    id: 5,
    title: "PUBLIKASI JURNAL INTERNASIONAL TERINDEKS GLOBAL",
    scope: "Internasional",
    category: "internasional",
    description: "Selamat atas keberhasilan publikasi artikel ilmiah pada Jurnal Internasional yang terindeks secara global. Sebuah pencapaian membanggakan dalam memperluas kontribusi keilmuan dan meningkatkan eksistensi penelitian di tingkat internasional.",
    link: "https://endless-journal.com/index.php/endless/article/view/361",
    image: "/images/portfolio1.png"
  },
  {
    id: 6,
    title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 4",
    scope: "SINTA 4",
    category: "sinta4",
    description: "Selamat atas terbitnya artikel ilmiah pada Jurnal Nasional Terakreditasi SINTA 4. Semoga pencapaian ini menjadi bukti nyata dedikasi dalam menghasilkan penelitian yang berkualitas dan memberikan manfaat bagi masyarakat luas.",
    link: "https://influence-journal.com/index.php/influence/article/view/390",
    image: "/images/portfolio3.png"
  },
  {
    id: 7,
    title: "PUBLIKASI JURNAL NASIONAL BER-ISSN",
    scope: "Ber-ISSN",
    category: "issn",
    description: "Selamat dan sukses atas pencapaian publikasi karya ilmiah pada Jurnal Nasional ber-ISSN. Semoga publikasi ini menjadi bagian dari perjalanan akademik yang produktif serta memberikan kontribusi positif bagi perkembangan ilmu pengetahuan.",
    link: "https://ejournal.goacademica.com/index.php/jk/index",
    image: "/images/portfolio2.png"
  },
  {
    id: 8,
    title: "PUBLIKASI JURNAL INTERNASIONAL TERINDEKS GLOBAL",
    scope: "Internasional",
    category: "internasional",
    description: "Selamat dan apresiasi atas keberhasilan publikasi artikel ilmiah pada Jurnal Internasional terindeks global. Semoga pencapaian ini semakin membuka peluang kolaborasi akademik serta memperluas jangkauan kontribusi penelitian di tingkat internasional.",
    link: "https://endless-journal.com/index.php/endless/article/view/297",
    image: "/images/portfolio4.png"
  },
  {
    id: 9,
    title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 3",
    scope: "SINTA 3",
    category: "sinta3",
    description: "Selamat atas keberhasilan menerbitkan artikel ilmiah pada Jurnal Nasional Terakreditasi SINTA 3. Pencapaian ini merupakan bentuk komitmen terhadap pengembangan riset dan peningkatan kualitas publikasi ilmiah.",
    link: "https://ijsoc.goacademica.com/index.php/ijsoc/article/view/1539",
    image: "/images/portfolio3.png"
  },
  {
    id: 10,
    title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 2",
    scope: "SINTA 2",
    category: "sinta2",
    description: "Selamat dan sukses atas pencapaian luar biasa dalam publikasi artikel ilmiah pada Jurnal Nasional Terakreditasi SINTA 2. Semoga prestasi ini menjadi inspirasi untuk terus berkarya, berinovasi, dan menghasilkan penelitian yang unggul serta berdampak luas.",
    link: "https://journal.staihubbulwathan.id/index.php/alishlah/article/view/4493",
    image: "/images/portfolio1.png"
  }
];

