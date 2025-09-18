const placeholders = [
  "/coverholder/cover1.png",
  "/coverholder/cover2.png",
  "/coverholder/cover3.png",
];

export function getRandomCover() {
  const idx = Math.floor(Math.random() * placeholders.length);
  return placeholders[idx];
}
