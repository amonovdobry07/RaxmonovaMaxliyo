// ==================== MAXSULOT RASMLARI ====================
import maxsulotlar_photo_1 from "../assets/images/Maxsulotlar/maxsulotlar_photo_1.jpg";
import maxsulotlar_photo_2 from "../assets/images/Maxsulotlar/maxsulotlar_photo_2.jpg";
import maxsulotlar_photo_3 from "../assets/images/Maxsulotlar/maxsulotlar_photo_3.jpg";
import maxsulotlar_photo_4 from "../assets/images/Maxsulotlar/maxsulotlar_photo_4.jpg";

// ==================== MAGAZIN LOGOTIPLARI ====================
import ozon from "../assets/images/Logos/ozon.png";
import uzum from "../assets/images/Logos/uzummarket.png";
import wb from "../assets/images/Logos/wb.png";
import yandex from "../assets/images/Logos/yandexmarket.png";


// 1. MAGAZINLAR RO'YXATI
export const MarketsList = [
  { id: 'uzum', name: 'Uzum Market', logo: uzum, bgColor: '#f3ebff' },
  { id: 'wildberries', name: 'Wildberries', logo: wb, bgColor: '#fcebf6' },
  { id: 'ozon', name: 'Ozon', logo: ozon, bgColor: '#e3ecff' },
  { id: 'yandex', name: 'Yandex Market', logo: yandex, bgColor: '#fff4cc' }
];


// 2. BARCHA MAHSULOTLAR RO'YXATI
export const MarketProducts = [
  
  // ==================== UZUM MARKET ====================
  { id: 1, market: "uzum", titleKey: "marketProducts.adras", price: "150,000 so'm", image: maxsulotlar_photo_1, externalLink: "https://uzum.uz" },
  { id: 2, market: "uzum", titleKey: "marketProducts.chapan", price: "350,000 so'm", image: maxsulotlar_photo_2, externalLink: "https://uzum.uz" },
  { id: 3, market: "uzum", titleKey: "marketProducts.suzani", price: "250,000 so'm", image: maxsulotlar_photo_3, externalLink: "https://uzum.uz" },
  { id: 4, market: "uzum", titleKey: "marketProducts.scarf", price: "95,000 so'm", image: maxsulotlar_photo_4, externalLink: "https://uzum.uz" },

  // ==================== WILDBERRIES ====================
  { id: 5, market: "wildberries", titleKey: "marketProducts.adras", price: "1200 rubl", image: maxsulotlar_photo_1, externalLink: "https://wildberries.ru" },
  { id: 6, market: "wildberries", titleKey: "marketProducts.chapan", price: "2800 rubl", image: maxsulotlar_photo_2, externalLink: "https://wildberries.ru" },
  { id: 7, market: "wildberries", titleKey: "marketProducts.suzani", price: "2000 rubl", image: maxsulotlar_photo_3, externalLink: "https://wildberries.ru" },
  { id: 8, market: "wildberries", titleKey: "marketProducts.scarf", price: "800 rubl", image: maxsulotlar_photo_4, externalLink: "https://wildberries.ru" },

  // ==================== OZON ====================
  { id: 9, market: "ozon", titleKey: "marketProducts.adras", price: "1250 rubl", image: maxsulotlar_photo_1, externalLink: "https://ozon.ru" },
  { id: 10, market: "ozon", titleKey: "marketProducts.chapan", price: "2900 rubl", image: maxsulotlar_photo_2, externalLink: "https://ozon.ru" },
  { id: 11, market: "ozon", titleKey: "marketProducts.suzani", price: "2100 rubl", image: maxsulotlar_photo_3, externalLink: "https://ozon.ru" },
  { id: 12, market: "ozon", titleKey: "marketProducts.scarf", price: "850 rubl", image: maxsulotlar_photo_4, externalLink: "https://ozon.ru" },

  // ==================== YANDEX MARKET ====================
  { id: 13, market: "yandex", titleKey: "marketProducts.adras", price: "1300 rubl", image: maxsulotlar_photo_1, externalLink: "https://market.yandex.ru" },
  { id: 14, market: "yandex", titleKey: "marketProducts.chapan", price: "3000 rubl", image: maxsulotlar_photo_2, externalLink: "https://market.yandex.ru" },
  { id: 15, market: "yandex", titleKey: "marketProducts.suzani", price: "2200 rubl", image: maxsulotlar_photo_3, externalLink: "https://market.yandex.ru" },
  { id: 16, market: "yandex", titleKey: "marketProducts.scarf", price: "900 rubl", image: maxsulotlar_photo_4, externalLink: "https://market.yandex.ru" }

];