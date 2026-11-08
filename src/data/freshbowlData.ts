export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  ingredients: string;
  image: string;
  imageAlt: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconType: "leaf" | "scale" | "delivery";
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface Stat {
  value: string;
  label: string;
}

export const freshbowlConfig = {
  brandName: "Freshbowl",
  tagline: "Healthy Salad Bowl Segar, Diantar ke Tempatmu",
  heroEyebrow: "Menu Spesial",
  heroHeading: "Makan siang sehat, tanpa ribet.",
  heroSubheading: "Salad bowl segar dengan topping pilihanmu, mulai Rp25.000 dan siap diantar ke kampus atau kantor.",
  startingPrice: "Rp25.000",
  heroFacts: ["Bahan segar harian", "Antar ke tempatmu"],
  whatsappNumber: "6281546446576", // Ganti dengan nomor WhatsApp pemilik (misal: 628123456789)
  defaultOrderMessage: "Halo Freshbowl, saya mau pesan Healthy Salad Bowl",
  aboutText: "Healthy salad bowl segar untuk pelajar, mahasiswa dan pekerja yang ingin makan enak setiap hari.",
};

export const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Pesan", href: "#pesan" },
];

export const featuresData: Feature[] = [
  {
    id: "feature-1",
    title: "Bahan segar setiap hari",
    description: "Sayur disiapkan di hari yang sama, jadi renyah dan terasa segar di setiap suapan.",
    iconType: "leaf",
  },
  {
    id: "feature-2",
    title: "Kalori terkontrol",
    description: "Porsi sudah diatur supaya kenyang pas, tanpa bikin ngantuk saat kuliah atau meeting.",
    iconType: "scale",
  },
  {
    id: "feature-3",
    title: "Siap antar",
    description: "Tinggal chat, bowl-mu meluncur ke Sekolah, kampus, kos, atau kantor. Waktu istirahatmu tetap utuh.",
    iconType: "delivery",
  },
];

export const menuData: MenuItem[] = [
  {
    id: "chicken-grill",
    name: "Chicken Grill Bowl",
    price: "Rp32.000",
    description: "Ayam panggang juicy yang bikin kenyang lebih lama.",
    ingredients: "ayam panggang, selada, tomat, jagung, timun, dressing ringan.",
    image: "/img/menu1.jpg",
    imageAlt: "Chicken Grill Bowl berisi ayam panggang, selada, tomat, jagung, dan timun",
  },
  {
    id: "egg-avocado",
    name: "Egg Avocado Bowl",
    price: "Rp35.000",
    description: "Alpukat creamy dan telur rebus, favorit para pekerja sibuk.",
    ingredients: "alpukat, telur rebus, bayam, tomat ceri, lada hitam.",
    image: "/img/menu2.jpg",
    imageAlt: "Egg Avocado Bowl berisi telur rebus, alpukat, bayam, dan tomat ceri",
  },
  {
    id: "veggie-power",
    name: "Veggie Power Bowl",
    price: "Rp25.000",
    description: "Penuh warna dan nabati, pas untuk bekal hemat.",
    ingredients: "kacang arab, edamame, kubis ungu, wortel, saus wijen.",
    image: "/img/menu3.jpg",
    imageAlt: "Veggie Power Bowl berisi kacang arab, edamame, kubis ungu, wortel, dan quinoa",
  },
];

export const stepsData: Step[] = [
  {
    number: 1,
    title: "Chat WhatsApp",
    description: "Klik tombol pesan dan kirim sapaan singkat ke kami.",
  },
  {
    number: 2,
    title: "Pilih bowl",
    description: "Tentukan varian, topping, dan alamat antarmu.",
  },
  {
    number: 3,
    title: "Terima di tempatmu",
    description: "Bowl segar tiba di kampus, kos, atau kantor. Tinggal makan.",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    name: "Nadia",
    role: "Mahasiswi Manajemen",
    quote: "“Sayurnya renyah, porsinya pas. Sekarang jadi langganan buat makan siang di sela kelas.”",
    rating: 5,
  },
  {
    name: "Raka",
    role: "Staf Marketing",
    quote: "“Pesannya gampang, antarnya cepat. Pas banget buat yang jam istirahatnya mepet.”",
    rating: 5,
  },
  {
    name: "Dewi",
    role: "Desainer Grafis",
    quote: "“Egg Avocado Bowl-nya enak banget. Harganya juga masih masuk uang jajan anak kos.”",
    rating: 5,
  },
];

export const statsData: Stat[] = [
  { value: "3", label: "varian bowl pilihan" },
  { value: "Rp25rb", label: "harga mulai dari" },
  { value: "Setiap hari", label: "bahan disiapkan segar" },
];

export function getWhatsAppUrl(customMessage?: string): string {
  const text = encodeURIComponent(customMessage || freshbowlConfig.defaultOrderMessage);
  return `https://wa.me/${freshbowlConfig.whatsappNumber}?text=${text}`;
}
