const fs = require('fs');
const path = require('path');

const src = "C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\7b042fe1-24f3-442b-9286-13082f818dbe\\hero_blue_batik_1789652008979.png";
const dest = path.join(__dirname, 'public', 'images', 'hero.png');

try {
  fs.copyFileSync(src, dest);
  console.log("Berhasil memperbarui gambar hero.png!");
} catch (e) {
  console.error("Gagal menyalin gambar: ", e);
}
