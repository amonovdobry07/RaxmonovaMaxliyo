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
  { id: 'uzum', name: 'Uzum Market', logo: uzum, bgColor: '#f3ebff' },      // Ochiq binafsha fon
  { id: 'wildberries', name: 'Wildberries', logo: wb, bgColor: '#fcebf6' }, // Ochiq pushti fon
  { id: 'ozon', name: 'Ozon', logo: ozon, bgColor: '#e3ecff' },             // Ochiq ko'k fon
  { id: 'yandex', name: 'Yandex Market', logo: yandex, bgColor: '#fff4cc' } // Ochiq sariq fon
];


// 2. BARCHA MAHSULOTLAR RO'YXATI (Har bir market uchun 4 tadan, jami 16 ta)
export const MarketProducts = [
  
  // ==================== UZUM MARKET ====================
  { id: 1, market: "uzum", title: "Milliy Adras", price: "150,000 so'm", image: maxsulotlar_photo_1, externalLink: "https://uzum.uz" },
  { id: 2, market: "uzum", title: "Zardo'zi Chopon", price: "350,000 so'm", image: maxsulotlar_photo_2, externalLink: "https://uzum.uz" },
  { id: 3, market: "uzum", title: "Suzani Dasturxon", price: "250,000 so'm", image: maxsulotlar_photo_3, externalLink: "https://uzum.uz" },
  { id: 4, market: "uzum", title: "Ipak Ro'mol", price: "95,000 so'm", image: maxsulotlar_photo_4, externalLink: "https://uzum.uz" },

  // ==================== WILDBERRIES ====================
  { id: 5, market: "wildberries", title: "Milliy Adras", price: "1200 rubl", image: maxsulotlar_photo_1, externalLink: "https://wildberries.ru" },
  { id: 6, market: "wildberries", title: "Zardo'zi Chopon", price: "2800 rubl", image: maxsulotlar_photo_2, externalLink: "https://wildberries.ru" },
  { id: 7, market: "wildberries", title: "Suzani Dasturxon", price: "2000 rubl", image: maxsulotlar_photo_3, externalLink: "https://wildberries.ru" },
  { id: 8, market: "wildberries", title: "Ipak Ro'mol", price: "800 rubl", image: maxsulotlar_photo_4, externalLink: "https://wildberries.ru" },

  // ==================== OZON ====================
  { id: 9, market: "ozon", title: "Milliy Adras", price: "1250 rubl", image: maxsulotlar_photo_1, externalLink: "https://ozon.ru" },
  { id: 10, market: "ozon", title: "Zardo'zi Chopon", price: "2900 rubl", image: maxsulotlar_photo_2, externalLink: "https://ozon.ru" },
  { id: 11, market: "ozon", title: "Suzani Dasturxon", price: "2100 rubl", image: maxsulotlar_photo_3, externalLink: "https://ozon.ru" },
  { id: 12, market: "ozon", title: "Ipak Ro'mol", price: "850 rubl", image: maxsulotlar_photo_4, externalLink: "https://ozon.ru" },

  // ==================== YANDEX MARKET ====================
  { id: 13, market: "yandex", title: "Milliy Adras", price: "1300 rubl", image: maxsulotlar_photo_1, externalLink: "https://market.yandex.ru" },
  { id: 14, market: "yandex", title: "Zardo'zi Chopon", price: "3000 rubl", image: maxsulotlar_photo_2, externalLink: "https://market.yandex.ru" },
  { id: 15, market: "yandex", title: "Suzani Dasturxon", price: "2200 rubl", image: maxsulotlar_photo_3, externalLink: "https://market.yandex.ru" },
  { id: 16, market: "yandex", title: "Ipak Ro'mol", price: "900 rubl", image: maxsulotlar_photo_4, externalLink: "https://market.yandex.ru" }

];