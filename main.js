import "./assets/scss/all.scss";
import "./assets/aos.js";
// import 'aos/dist/aos.js';

//   document.addEventListener("DOMContentLoaded", function () {
//     const desktopWidth = 1200;

//     // 如果是桌面設備，初始化 AOS
//     if (window.innerWidth >= desktopWidth) {
//       AOS.init({
//         once: true, // 只在首次滾動時觸發動畫
//       });
//     } else {
//       // 如果是移動設備，移除所有 data-aos 屬性，確保元素顯示
//       const aosElements = document.querySelectorAll("[data-aos]");
//       aosElements.forEach(function (element) {
//         element.removeAttribute("data-aos");
//         element.style.opacity = 1; // 確保元素不透明
//         element.style.transform = "none"; // 移除動畫效果
//       });
//     }
//   });